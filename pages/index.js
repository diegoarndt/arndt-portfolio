import Head from 'next/head';
import Image from 'next/image';
import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsList,
  BsX,
} from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use/';
import logo from '../public/da-logo.png';
import HandleDownload from '../utils/handleDownload';
import ReactFlagsSelect from 'react-flags-select';
import ScrollLink from '../utils/scroll';

import Landing from '../components/landing';
import About from '../components/about';
import Skills from '../components/skills';
import Career from '../components/career';
import Contact from '../components/contact';
import Footer from '../components/footer';

export default function Home(props) {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpened, setMenuOpen] = useState(true);
  const [isLgScreen, setIsLgScreen] = useState(false);
  const { width } = useWindowSize();
  useEffect(() => setDarkMode(true), []);
  useEffect(() => setMenuOpen(false), []);
  useEffect(() => {
    setIsLgScreen(width >= 1024);
    setMenuOpen(false);
  }, [width]);

  const themeIcon = darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />;
  const menuIcon = isMenuOpened ? <BsX size={24} /> : <BsList size={24} />;
  const translation = props.translation[props.locale];

  const handleChangeLanguage = (countryCode) => {
    const locale = Object.keys(props.countryCodes).find(
      (key) => props.countryCodes[key] === countryCode
    );
    props.push('/', undefined, { locale });
  };

  const menuItems = [
    {
      name: translation.about,
      id: 'about',
    },
    {
      name: translation.skills,
      id: 'skills',
    },
    {
      name: translation.career,
      id: 'career',
    },
    {
      name: translation.contact,
      id: 'contact',
    },
  ];

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>Diego Arndt</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav className='py-10 px-20 flex justify-between sticky top-0 z-50 bg-gray-200 dark:bg-black dark:text-white'>
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
              <li className='mx-4 text-lg text-gray-500 hover:text-gray-300 cursor-pointer'>
                <ScrollLink to={`${id}`}>{name}</ScrollLink>
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
                className='cursor-pointer bg-gradient-to-r from-red-600 to-orange-600 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 border-none rounded-md'
                onClick={HandleDownload}
                tooltip='Download resume'
              >
                {translation.resume}
              </a>
            </div>
          </li>
        </ul>
      </nav>

      <main
        className={`flex-grow bg-gray-200 dark:bg-black px-10 md:px-20 lg:px-20 flex flex-col justify-center ${
          isMenuOpened && !isLgScreen ? '' : 'hidden'
        }`}
      >
        <ul className='flex flex-col justify-center items-center'>
          {menuItems.map(({ name, id }) => (
            <li className='text-3xl py-5 text-gray-500 hover:text-gray-300 cursor-pointer'>
              <ScrollLink to={`${id}`}>
                <button onClick={() => setMenuOpen(!isMenuOpened)}>
                  {name}
                </button>
              </ScrollLink>
            </li>
          ))}
        </ul>
      </main>

      <main
        className={`mb-auto bg-gray-200 dark:bg-black ${
          isMenuOpened && !isLgScreen ? 'hidden' : ''
        }`}
      >
        <section
          className='main-section min-h-screen'
          style={{
            background: 'radial-gradient(gray 1%, transparent 5%)',
            backgroundSize: '4vmin 4vmin',
            transition: 'background-size 0.3s, background-position 0.3s',
          }}
          id='landing'
        >
          <Landing translation={translation} />
        </section>

        <section className='min-h-screen pt-40 section-bg' id='about'>
          <About translation={translation} />
        </section>

        <section className='min-h-screen pt-40 section-bg' id='skills'>
          <Skills translation={translation} />
        </section>

        <section className='min-h-screen pt-40 section-bg' id='career'>
          <Career translation={translation} />
        </section>

        <section
          className='min-h-screen flex justify-center items-center section-bg'
          id='contact'
        >
          <Contact translation={translation} />
        </section>
      </main>

      <Footer props={props} translation={translation} />
    </div>
  );
}
