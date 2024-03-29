import Image from 'next/image';
import logo from '../public/da-logo.png';
import HandleDownload from '../utils/handleDownload';
import ScrollLink from '../utils/scroll';
import ReactFlagsSelect from 'react-flags-select';
import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsList,
  BsX,
} from 'react-icons/bs';

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

  const handleChangeLanguage = (countryCode) => {
    const locale = Object.keys(props.countryCodes).find(
      (key) => props.countryCodes[key] === countryCode
    );
    const currentHash = window.location.hash;
    const newPath = props.asPath.split('#')[0] + currentHash;
    props.push(newPath, undefined, { locale });
  };

  return (
    <nav className='py-5 lg:py-10 px-10 lg:px-20 flex justify-between sticky top-0 z-50 bg-gray-200 dark:bg-black dark:text-white'>
      <div className='lg:hidden flex items-center pr-3 lg:pr-4 py-2'>
        <button
          onClick={() => setMenuOpen(!isMenuOpened)}
          aria-label='Toggle menu'
        >
          {menuIcon}
        </button>
      </div>

      <div className={`da-logo ${isLgScreen ? 'lg:contents' : 'hidden'}`}>
        <ScrollLink to='landing'>
          <Image
            src={logo}
            alt='profile-picture'
            layout='fill'
            objectFit='cover'
            className='h-12 w-12'
          />
        </ScrollLink>

        <ul className='flex justify-center items-center'>
          {menuItems.map(({ name, id }) => (
            <li
              className='menu-item relative mx-4 text-lg text-gray-500 hover:text-gray-700 hover:dark:text-gray-300 cursor-pointer'
              key={id}
            >
              <ScrollLink to={id} isLgScreen={isLgScreen}>
                {name}
              </ScrollLink>
              <div className='absolute left-0 bottom-0 w-full'></div>
            </li>
          ))}
        </ul>
      </div>

      <ul className='flex items-center'>
        <li>
          <label htmlFor='language-select'></label>
          <ReactFlagsSelect
            countries={Object.values(props.countryCodes)}
            customLabels={props.customLabels}
            selected={props.countryCodes[props.locale]}
            onSelect={handleChangeLanguage}
            showSelectedLabel={false}
            showSecondarySelectedLabel={false}
            fullWidth={false}
            placeholder='Language'
            className='react-flags-select px-3 lg:px-4 py-2'
            id='language-select'
            aria-label='Select language'
          />
        </li>
        <li>
          <div className='transform hover:scale-110 px-3 lg:px-4 py-2'>
            <span
              onClick={() => setDarkMode(!darkMode)}
              className='cursor-pointer text-2xl hover:text-blue-600 dark:hover:text-yellow-400'
            >
              {themeIcon}
            </span>
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
