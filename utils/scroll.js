import { useState, useEffect } from 'react';
import { getScrollOffset } from './scrollOffsets';

export default function ScrollLink({ to, isLgScreen, onClickCallback, onTrack, children }) {
  const [isActive, setIsActive] = useState(false);
  const isLanding = to === 'landing';

  const handleClick = (event) => {
    event.preventDefault();
    if (onTrack) {
      onTrack();
    }
    const currentPath = window.location.pathname;
    window.history.replaceState(null, '', isLanding ? currentPath : `${currentPath}#${to}`);

    const performScroll = () => {
      const target = document.getElementById(to);
      if (!target) {
        return;
      }
      const offset = getScrollOffset(to);
      const top = target.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    if (onClickCallback) {
      onClickCallback();
      setTimeout(performScroll, 200);
      return;
    }

    performScroll();
  };

  useEffect(() => {
    const handleScroll = () => {
      const target = document.getElementById(to);
      if (!target) {
        return;
      }

      const currentScrollPos = window.pageYOffset;
      const targetOffsetTop = target.offsetTop;
      const targetHeight = target.offsetHeight;
      const isWithinTarget =
        currentScrollPos >= targetOffsetTop && currentScrollPos < targetOffsetTop + targetHeight;

      if (isWithinTarget && !isActive) {
        setIsActive(true);
      }

      if (!isWithinTarget && isActive) {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isActive, to]);

  return (
    <button
      type='button'
      onClick={handleClick}
      className='relative cursor-pointer bg-transparent p-0 sm:h-16 sm:w-16'
    >
      <span className={isActive ? 'active' : ''}>{children}</span>
    </button>
  );
}
