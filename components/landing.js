import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Landing = ({ translation }) => {
  const [mainSection, setMainSection] = useState(null);

  useEffect(() => {
    setMainSection(document.getElementsByClassName('main-section')[0]);
  }, []);

  const handleHover = () => {
    if (mainSection) {
      mainSection.classList.add('landing-section');
    }
  };

  const handleLeave = () => {
    if (mainSection) {
      mainSection.classList.remove('landing-section');
    }
  };

  return (
    <div className='absolute inset-0 flex flex-col items-center justify-center pt-16 text-center lg:pt-0'>
      <motion.h2
        className='group relative mx-auto w-9/12 max-w-lg cursor-default py-3 text-7xl font-bold sm:text-8xl lg:text-9xl'
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.75, delay: 0.25 }}
      >
        <span className='pointer-events-none relative z-10 text-gray-100'>DIEGO ARNDT</span>

        <span
          className='absolute inset-0 w-full skew-x-12 border-b-2 border-t-2 border-cyan-500 bg-gradient-to-r from-cyan-600 to-blue-900 hover:to-cyan-600 dark:from-blue-900 dark:to-green-500 hover:dark:to-blue-900'
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        ></span>
      </motion.h2>

      <h1 className='cursor-default pt-7 text-xl font-semibold tracking-widest text-gray-600 dark:text-gray-200 lg:text-2xl'>
        Frontend Engineer (Angular)
      </h1>
      <p className='pt-3 text-sm text-gray-400 dark:text-gray-500 lg:text-sm'>
        Exploring long-term fully remote opportunities aligned with US &amp; Canada time zones
      </p>
    </div>
  );
};

export default Landing;
