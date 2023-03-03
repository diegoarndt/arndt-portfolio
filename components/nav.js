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
    props.push(props.asPath, undefined, { locale });
  };

  return (
    <nav className='py-5 lg:py-10 px-10 lg:px-20 flex justify-between sticky top-0 z-50 bg-gray-200 dark:bg-black dark:text-white'>
      <div className='lg:hidden flex items-center'>
        <button onClick={() => setMenuOpen(!isMenuOpened)}>{menuIcon}</button>
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
            <li className='mx-4 text-lg text-gray-500 hover:text-gray-300 cursor-pointer' key={id}>
              <ScrollLink to={id} isLgScreen={isLgScreen}>{name}</ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      <ul className='flex items-center'>
        <li>
          <ReactFlagsSelect
            countries={Object.values(props.countryCodes)}
            customLabels={props.customLabels}
            selected={props.countryCodes[props.locale]}
            onSelect={handleChangeLanguage}
            showSelectedLabel={false}
            showSecondarySelectedLabel={false}
            fullWidth={false}
            placeholder='Language'
            className='react-flags-select px-4 py-2'
          />
        </li>
        <li>
          <div className='transform hover:scale-110 px-4 py-2'>
            <span
              onClick={() => setDarkMode(!darkMode)}
              className='cursor-pointer text-2xl hover:text-blue-600 dark:hover:text-yellow-400'
            >
              {themeIcon}
            </span>
          </div>
        </li>
        <li>
          <div className='pl-4 py-2'>
            <a
              className='cursor-pointer bg-gradient-to-r from-green-500 to-green-900 dark:from-blue-900 dark:to-blue-500 hover:to-green-500 hover:dark:to-blue-900 text-white px-4 py-2 border-none rounded-md'
              onClick={HandleDownload}
              tooltip='Download resume'
            >
              {translation.resume}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
