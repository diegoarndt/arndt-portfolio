import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use/';
import ScrollLink from '../utils/scroll';

import Nav from '../components/nav';
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

  const translation = props.translation[props.locale];

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
        <meta name='description' content={`${translation.content}`} />
        <meta
          name='keywords'
          content='diego arndt, portfolio, resume, developer, design, typescript, angular, tailwind'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav
        props={props}
        translation={translation}
        menuItems={menuItems}
        darkMode={darkMode}
        isLgScreen={isLgScreen}
        isMenuOpened={isMenuOpened}
        setDarkMode={setDarkMode}
        setMenuOpen={setMenuOpen}
      />

      <main
        className={`flex-grow bg-gray-200 dark:bg-black px-10 md:px-20 lg:px-20 flex flex-col justify-center ${
          isMenuOpened && !isLgScreen ? '' : 'hidden'
        }`}
      >
        <ul className='flex flex-col justify-center items-center'>
          {menuItems.map(({ name, id }) => (
            <li
              className='text-3xl py-5 text-gray-500 hover:text-gray-300 cursor-pointer'
              key={id}
            >
              <ScrollLink to={id} isLgScreen={isLgScreen}>
                <button onClick={() => setMenuOpen(!isMenuOpened)} aria-label="Menu item">
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
          className='main-section'
          style={{
            background: 'radial-gradient(gray 1%, transparent 5%)',
            backgroundSize: '4vmin 4vmin',
            transition: 'background-size 0.3s, background-position 0.3s',
            minHeight: 'calc(100vh - 7vh)',
          }}
          id='landing'
        >
          <Landing translation={translation} />
        </section>

        <section className='min-h-screen section-bg' id='about'>
          <About translation={translation} />
        </section>

        <section className='min-h-screen section-bg' id='skills'>
          <Skills translation={translation} />
        </section>

        <section className='min-h-screen section-bg' id='career'>
          <Career translation={translation} isLgScreen={isLgScreen} />
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
