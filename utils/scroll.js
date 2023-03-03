import { Link } from 'react-scroll';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';

export default function ScrollLink({ to, isLgScreen, children }) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const targetRef = useRef(null);
  const isLanding = to === 'landing';

  const handleClick = () => {
    setIsActive(true);

    router.push(`${isLanding ? '' : '/#' + to}`, undefined, {
      scroll: false,
      shallow: true,
    });
  };

  return (
    <Link
      to={to}
      offset={isLanding ? -500 : isLgScreen ? -150 : 0}
      smooth={true}
      duration={1000}
      spy={true}
      exact='true'
      activeClass='active'
      onSetActive={() => setIsActive(true)}
      onSetInactive={() => setIsActive(false)}
      onClick={handleClick}
      className='relative sm:h-16 sm:w-16 cursor-pointer'
    >
      <span className={isActive ? 'active' : ''} ref={targetRef}>
        {children}
      </span>
    </Link>
  );
}
