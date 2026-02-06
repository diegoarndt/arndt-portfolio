import Image from 'next/image';
import logo from '../public/da-logo.png';
import HandleDownload from '../utils/handleDownload';
import ScrollLink from '../utils/scroll';
import { BsFillMoonStarsFill, BsFillSunFill, BsList, BsX } from 'react-icons/bs';

const Nav = ({
  props,
  translation,
  menuItems,
  darkMode,
  isLgScreen,
  isMenuOpened,
  setDarkMode,
  setMenuOpen,
}) => {
  const themeIcon = darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />;
  const menuIcon = isMenuOpened ? <BsX size={24} /> : <BsList size={24} />;

  return (
    <nav
      aria-label='Main navigation'
      className='sticky top-0 z-50 flex justify-between bg-gray-200 px-10 py-5 dark:bg-black dark:text-white lg:px-20 lg:py-10'
    >
      <div className='flex items-center py-2 pr-3 lg:hidden lg:pr-4'>
        <button onClick={() => setMenuOpen(!isMenuOpened)} aria-label='Toggle menu'>
          {menuIcon}
        </button>
      </div>

      <div className={`da-logo ${isLgScreen ? 'lg:contents' : 'hidden'}`}>
        <ScrollLink to='landing'>
          <Image
            src={logo}
            alt='Diego Arndt logo — go to top'
            fill
            style={{ objectFit: 'cover' }}
            className='h-12 w-12'
            priority
          />
        </ScrollLink>

        <ul className='flex items-center justify-center'>
          {menuItems.map(({ name, id }) => (
            <li
              className='menu-item relative mx-4 cursor-pointer text-lg text-gray-500 hover:text-gray-700 hover:dark:text-gray-300'
              key={id}
            >
              <ScrollLink to={id} isLgScreen={isLgScreen}>
                {name}
              </ScrollLink>
              <div className='absolute bottom-0 left-0 w-full'></div>
            </li>
          ))}
        </ul>
      </div>

      <ul className='flex items-center'>
        <li>
          <div className='transform px-3 py-2 hover:scale-110 lg:px-4'>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className='cursor-pointer text-2xl hover:text-blue-600 dark:hover:text-yellow-400'
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {themeIcon}
            </button>
          </div>
        </li>
        {/* <li>
          <div className='pl-3 lg:pl-4 py-2'>
            <button
              className='cursor-pointer bg-gradient-to-r from-blue-500 to-blue-900 dark:from-cyan-600 dark:to-green-600 hover:to-blue-500 hover:dark:to-blue-500 text-white px-4 py-1 border-none rounded-md'
              onClick={HandleDownload}
              aria-label='Download resume'
              title={translation.resumeTitle}
            >
              {translation.resume}
            </button>
          </div>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
