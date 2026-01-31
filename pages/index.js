import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use/';
import ScrollLink from '../utils/scroll';
import { getScrollOffset } from '../utils/scrollOffsets';
import Nav from '../components/nav';
import Landing from '../components/landing';
import About from '../components/about';
import Skills from '../components/skills';
import Career from '../components/career';
import Contact from '../components/contact';
import Footer from '../components/footer';

export default function Home(props) {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpened, setMenuOpen] = useState(false);
  const [isLgScreen, setIsLgScreen] = useState(false);
  const { width } = useWindowSize();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://diegoarndt.com';
  const metaTitle = 'Frontend Engineer (Angular) | Remote US & Canada';
  const metaDescription =
    'Frontend Engineer specialized in Angular, TypeScript, and RxJS. Building scalable, product-focused web applications. Open to remote roles in US & Canada.';
  const ogImage = `${siteUrl}/myself.jpg`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Diego Arndt',
        jobTitle: 'Frontend Engineer (Angular)',
        url: siteUrl,
        sameAs: ['https://www.linkedin.com/in/diegoarndt', 'https://github.com/diegoarndt'],
        knowsAbout: [
          'Angular',
          'TypeScript',
          'RxJS',
          'JavaScript',
          'HTML',
          'CSS',
          'SCSS',
          'REST APIs',
          'CI/CD',
          'AWS',
          'Git',
          'Agile',
          'Unit Testing',
          'E2E Testing',
        ],
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: 'AWS Certified Cloud Practitioner',
        },
        workLocation: {
          '@type': 'VirtualLocation',
          description: 'Remote - US & Canada Time Zones',
        },
      },
      {
        '@type': 'WebSite',
        name: 'Diego Arndt — Frontend Engineer (Angular)',
        url: siteUrl,
      },
    ],
  };

  useEffect(() => setDarkMode(false), []);
  useEffect(() => setMenuOpen(false), []);
  useEffect(() => {
    setIsLgScreen(width >= 1024);
    setMenuOpen(false);
  }, [width]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const hash = window.location.hash;
    if (!hash) {
      return;
    }

    const targetId = hash.replace('#', '');
    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    const offset = getScrollOffset(targetId);
    const top = target.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top, behavior: 'auto' });
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
    <div className={`flex min-h-screen flex-col ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDescription} />
        <meta
          name='keywords'
          content='frontend engineer, angular developer, frontend engineer angular, remote frontend engineer, typescript, rxjs, product-focused frontend, user-centered web applications, remote software engineer, US time zones, Canada time zones'
        />
        <meta property='og:title' content={metaTitle} />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={siteUrl} />
        <meta property='og:image' content={ogImage} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={metaTitle} />
        <meta name='twitter:description' content={metaDescription} />
        <meta name='twitter:image' content={ogImage} />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
        className={`flex flex-grow flex-col justify-center bg-gray-200 px-10 dark:bg-black md:px-20 lg:px-20 ${
          isMenuOpened && !isLgScreen ? '' : 'hidden'
        }`}
      >
        <ul className='flex flex-col items-center justify-center'>
          {menuItems.map(({ name, id }) => (
            <li className='cursor-pointer py-5 text-3xl text-gray-500 hover:text-gray-300' key={id}>
              <ScrollLink
                to={id}
                isLgScreen={isLgScreen}
                onClickCallback={() => setMenuOpen(false)}
              >
                {name}
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

        <section className='section-bg py-16 lg:py-24' id='about'>
          <About translation={translation} />
        </section>

        <section className='section-bg py-16 lg:py-24' id='skills'>
          <Skills translation={translation} />
        </section>

        <section className='section-bg py-16 lg:py-24' id='career'>
          <Career translation={translation} isLgScreen={isLgScreen} />
        </section>

        <section
          className='section-bg flex items-center justify-center py-16 lg:py-24'
          id='contact'
        >
          <Contact translation={translation} />
        </section>
      </main>

      <Footer props={props} translation={translation} />
    </div>
  );
}
