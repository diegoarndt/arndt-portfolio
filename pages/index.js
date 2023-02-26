import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillLinkedin } from 'react-icons/ai';
import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsList,
  BsX,
} from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use/';
import myself from '../public/myself.jpg';
import logo from '../public/da-logo.png';
import YearInWords from '../utils/yearInWords';
import HandleDownload from '../utils/handleDownload';
import ReactFlagsSelect from 'react-flags-select';
import ScrollLink from '../utils/scroll';

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

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>Diego Arndt Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav className='py-10 px-20 flex justify-between sticky top-0 z-20 bg-gray-200 dark:bg-black dark:text-white'>
        <div className='lg:hidden flex items-center'>
          <button
            onClick={() => setMenuOpen(!isMenuOpened)}
          >
            {menuIcon}
          </button>
        </div>

        <div className={`da-logo ${
          isLgScreen ? 'lg:contents' : 'hidden'
        }`}> 
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
            <li className='mx-4 text-lg text-gray-500 hover:text-gray-300 cursor-pointer'>
              <ScrollLink to='about'>About</ScrollLink>
            </li>
            <li className='mx-4 text-lg text-gray-500 hover:text-gray-300 cursor-pointer'>
              <ScrollLink to='career'>Career</ScrollLink>
            </li>
            <li className='mx-4 text-lg text-gray-500 hover:text-gray-300 cursor-pointer'>
              <ScrollLink to='skills'>Skills</ScrollLink>
            </li>
            <li className='mx-4 text-lg text-gray-500 hover:text-gray-300 cursor-pointer'>
              <ScrollLink to='contact'>Say hello</ScrollLink>
            </li>
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
          <li className='text-3xl py-5 text-gray-500 hover:text-gray-300 cursor-pointer'>
            <ScrollLink to='about'><button onClick={() => setMenuOpen(!isMenuOpened)}>About</button></ScrollLink>
          </li>
          <li className='text-3xl py-5 text-gray-500 hover:text-gray-300 cursor-pointer'>
            <ScrollLink to='career'><button onClick={() => setMenuOpen(!isMenuOpened)}>Career</button></ScrollLink>
          </li>
          <li className='text-3xl py-5 text-gray-500 hover:text-gray-300 cursor-pointer'>
            <ScrollLink to='skills'><button onClick={() => setMenuOpen(!isMenuOpened)}>Skills</button></ScrollLink>
          </li>
          <li className='text-3xl py-5 text-gray-500 hover:text-gray-300 cursor-pointer'>
            <ScrollLink to='contact'><button onClick={() => setMenuOpen(!isMenuOpened)}>Say hello</button></ScrollLink>
          </li>
        </ul>
      </main>

      <main
        className={`mb-auto bg-gray-200 dark:bg-black px-10 md:px-20 lg:px-20 ${
          isMenuOpened && !isLgScreen ? 'hidden' : ''
        }`}
      >
        <section className='min-h-screen bg-purple-600' id='landing'>
          <div className='text-center p-10 py-10 absolute inset-0 flex flex-col items-center justify-center'>
            <h2 className='relative py-3 font-bold text-4xl sm:text-7xl md:text-8xl lg:text-9xl group cursor-default mx-auto w-1/2 lg:w-full max-w-lg'>
              <span className='relative z-10 text-orange-500 dark:text-black group-hover:text-black dark:group-hover:text-orange-500 pointer-events-none'>
                DIEGO ARNDT
              </span>
              <span className='absolute inset-0 w-full skew-x-12 transition duration-300 ease-in-out origin-right bg-gray-300 dark:bg-orange-500 group-hover:bg-orange-500 dark:group-hover:bg-gray-300'></span>
            </h2>
            <h3 className='text-lg py-3 dark:text-gray-300 lg:text-xl tracking-widest'>
              {translation.jobTitle}
            </h3>
          </div>
        </section>

        <section
          className='min-h-screen pt-28 md:pt-48 bg-yellow-600'
          id='about'
        >
          <div className='mx-auto mt-20 lg:mt-16 border-2 border-orange-500 rounded-full relative overflow-hidden h-80 w-80 lg:h-96 lg:w-96'>
            <Image
              src={myself}
              alt='profile-picture'
              layout='fill'
              objectFit='cover'
              priority={true}
              className='border-t-8-4 border-black pointer-events-none'
            />
          </div>
          <h3 className='mx-auto py-20 lg:py-16 font-bold text-orange-500 dark:text-white text-3xl lg:text-4xl max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl'>
            {translation.summary}
          </h3>
          <p className='mx-auto text-justify tracking-widest text-orange-500 dark:text-white text-xl lg:text-1xl max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl'>
            As a motivated front-end developer with experience in the Angular
            framework and a solid understanding of TypeScript and web
            technologies, I specialize in creating visually appealing and
            intuitive user interfaces with a focus on UI/UX design principles.
            My expertise includes collaborating with stakeholders to implement
            design best practices, optimizing layouts for usability and
            performance, and delivering top-quality user support to clients.
            Combining my artistic skills with my technical knowledge, I am
            dedicated to building dynamic and engaging web apps that provide a
            seamless user experience.
          </p>
        </section>

        <section className='min-h-screen bg-red-600' id='career'>
          <h2>test career</h2>
        </section>

        <section className='min-h-screen bg-blue-600' id='skills'>
          <h2>test skills</h2>
        </section>

        <section className='min-h-screen bg-green-600' id='contact'>
          <h2>test contact</h2>
        </section>
      </main>

      <footer className='border-t-2 border-orange-600 text-center py-10 text-gray-600 bg-gray-200 dark:bg-black dark:text-gray-400'>
        <div className='mx-auto max-w-3xl'>
          <blockquote className='text-lg text-gray-600 italic my-1 mx-6 pl-4 px-4 border-l-4 border-orange-500'>
            &quot;{translation.quote}&quot; &ndash; Cory House
          </blockquote>
        </div>
        <div className='text-5xl py-5 flex justify-center gap-16 text-gray-600 dark:text-gray-400'>
          <Link href='https://www.linkedin.com/in/diegoarndt/' passHref={true}>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-110 hover:text-blue-600'
            >
              <AiFillLinkedin />
            </a>
          </Link>
        </div>
        <p>
          {translation.handcrafted} ©&nbsp;
          <span>
            <YearInWords language={props.locale} />
          </span>
        </p>
      </footer>
    </div>
  );
}
