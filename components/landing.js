import { useEffect, useState } from 'react';

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
    <div className='text-center absolute inset-0 flex flex-col items-center justify-center'>
      <h2 className='relative py-3 font-bold text-6xl sm:text-8xl lg:text-9xl group cursor-default mx-auto w-9/12 max-w-lg'>
        <span className='relative z-10 text-orange-500 dark:text-black group-hover:text-black dark:group-hover:text-orange-500 pointer-events-none'>
          DIEGO ARNDT
        </span>
        <span
          className='absolute inset-0 w-full skew-x-12 transition duration-300 ease-in-out origin-right bg-gray-300 dark:bg-orange-500 group-hover:bg-orange-500 dark:group-hover:bg-gray-300'
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        ></span>
      </h2>
      <h3 className='text-lg pt-3 dark:text-gray-300 lg:text-xl tracking-widest'>
        {translation.jobTitle}
      </h3>
    </div>
  );
};

export default Landing;
