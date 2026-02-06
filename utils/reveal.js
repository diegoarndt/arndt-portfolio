import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

function Reveal({ children, width = 'fit-content' }) {
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      mainControls.start('visible');
      slideControls.start('visible');
      return;
    }
    if (isInView) {
      slideControls.start('visible');
      mainControls.start('visible');
    } else {
      slideControls.start('hidden');
      mainControls.start('hidden');
    }
  }, [isInView, mainControls, slideControls, prefersReducedMotion]);

  const duration = prefersReducedMotion ? 0 : 0.75;
  const slideDuration = prefersReducedMotion ? 0 : 0.5;

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration, delay: prefersReducedMotion ? 0 : 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial='hidden'
        animate={slideControls}
        transition={{
          duration: slideDuration,
          delay: prefersReducedMotion ? 0 : 0.25,
          ease: 'easeIn',
        }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'radial-gradient(cyan -300%, transparent 50%)',
          zIndex: 20,
        }}
      />
    </div>
  );
}

export default Reveal;
