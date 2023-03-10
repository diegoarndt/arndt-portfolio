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
    <div className='text-center absolute inset-0 flex flex-col items-center justify-center pt-16 lg:pt-0'>
      <h2 className='relative py-3 font-bold text-7xl sm:text-8xl lg:text-9xl group cursor-default mx-auto w-9/12 max-w-lg'>
        <span className='relative z-10 text-gray-100 pointer-events-none'>
          DIEGO ARNDT
        </span>

        <span
          className='absolute inset-0 w-full skew-x-12 border-t-2 border-b-2 border-cyan-500 bg-gradient-to-r from-cyan-600 to-blue-900 hover:to-cyan-600 dark:from-blue-900 dark:to-green-500 hover:dark:to-blue-900'
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        ></span>
      </h2>
      <h3 className='pt-3 text-gray-500 dark:text-gray-300 text-lg lg:text-xl tracking-widest cursor-default'>
        {translation.jobTitle}
      </h3>
    </div>
  );
};

export default Landing;
