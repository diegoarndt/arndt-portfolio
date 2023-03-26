import { Link } from 'react-scroll';
import { useState, useRef, useEffect } from 'react';

export default function ScrollLink({ to, isLgScreen, children }) {
  const [isActive, setIsActive] = useState(false);
  const targetRef = useRef(null);
  const isLanding = to === 'landing';

  const handleClickOrSetActive = () => {
    setIsActive(true);
    const currentPath = window.location.pathname;
    window.history.replaceState(
      null,
      '',
      isLanding ? currentPath : `${currentPath}#${to}`
    );
  };

  const handleSetInactive = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const targetOffsetTop = targetRef.current.offsetTop;
      const targetHeight = targetRef.current.offsetHeight;

      if (
        currentScrollPos >= targetOffsetTop &&
        currentScrollPos < targetOffsetTop + targetHeight
      ) {
        if (!isActive) {
          setIsActive(true);
        }
      } else {
        if (isActive) {
          setIsActive(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isActive, to, isLanding]);

  return (
    <Link
      to={to}
      offset={isLanding ? -500 : isLgScreen ? -150 : 0}
      smooth={true}
      duration={1000}
      spy={true}
      exact='true'
      activeClass='active'
      onSetActive={handleClickOrSetActive}
      onSetInactive={handleSetInactive}
      onClick={handleClickOrSetActive}
      className='relative sm:h-16 sm:w-16 cursor-pointer'
    >
      <span className={isActive ? 'active' : ''} ref={targetRef}>
        {children}
      </span>
    </Link>
  );
}
