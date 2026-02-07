import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use/';
import dynamic from 'next/dynamic';
import ScrollLink from '../utils/scroll';
import { getScrollOffset } from '../utils/scrollOffsets';
import { track } from '@vercel/analytics';
import Nav from '../components/nav';
import Landing from '../components/landing';
import About from '../components/about';
const Skills = dynamic(() => import('../components/skills'), {
  ssr: false,
  loading: () => <div className='mx-auto max-w-screen-md px-10 text-gray-500'>Loading…</div>,
});

const Career = dynamic(() => import('../components/career'), {
  ssr: false,
  loading: () => <div className='mx-auto max-w-screen-md px-10 text-gray-500'>Loading…</div>,
});

const Contact = dynamic(() => import('../components/contact'), {
  ssr: false,
  loading: () => <div className='mx-auto max-w-screen-md px-10 text-gray-500'>Loading…</div>,
});

const Footer = dynamic(() => import('../components/footer'), {
  ssr: false,
  loading: () => (
    <div className='border-t-2 border-cyan-600 bg-gray-200 py-5 text-center text-gray-600 dark:bg-black dark:text-gray-400 lg:py-10'>
      Loading…
    </div>
  ),
});

export default function Home(props) {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpened, setMenuOpen] = useState(false);
  const [isLgScreen, setIsLgScreen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const { width } = useWindowSize();

  const translation = props.translation[props.locale];

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://diegoarndt.com';
  const localePath = props.locale && props.locale !== 'en' ? `/${props.locale}` : '';
  const canonicalUrl = `${siteUrl}${localePath}`;
  const metaTitle = translation.metaTitle;
  const metaDescription = translation.metaDescription;
  const ogImage = `${siteUrl}/myself.jpg`;
  const ogLocaleMap = { en: 'en_US', pt: 'pt_BR', es: 'es_ES', de: 'de_DE', fr: 'fr_FR' };
  const ogLocale = ogLocaleMap[props.locale] || 'en_US';
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
  useEffect(() => setHasMounted(true), []);
  useEffect(() => {
    if (!hasMounted) return;
    setIsLgScreen(width >= 1024);
    setMenuOpen(false);
  }, [width, hasMounted]);

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

  useEffect(() => {
    const sequence = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ];
    let index = 0;

    const handleKeyDown = (event) => {
      const key = event.key;
      if (key === sequence[index]) {
        index += 1;
        if (index === sequence.length) {
          track('easter_egg_unlock', { method: 'konami' });
          setShowEasterEgg(true);
          index = 0;
        }
        return;
      }

      index = key === sequence[0] ? 1 : 0;
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // eslint-disable-next-line no-console
    console.log(
      '%cEaster egg unlocked! Try the Konami code. ↑ ↑ ↓ ↓ ← → ← → B A',
      'color:#06b6d4;font-weight:700;'
    );
  }, []);

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
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-cyan-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none'
        onClick={() => track('skip_link_click', { target: 'main-content' })}
      >
        Skip to main content
      </a>
      <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDescription} />
        <meta
          name='keywords'
          content='frontend engineer, angular developer, frontend engineer angular, remote frontend engineer, typescript, rxjs, product-focused frontend, user-centered web applications, remote software engineer, US time zones, Canada time zones'
        />
        <meta name='author' content='Diego Arndt' />
        <meta property='og:title' content={metaTitle} />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={canonicalUrl} />
        <meta property='og:image' content={ogImage} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:alt' content='Diego Arndt — Frontend Engineer' />
        <meta property='og:site_name' content='Diego Arndt' />
        <meta property='og:locale' content={ogLocale} />
        {Object.entries(ogLocaleMap)
          .filter(([key]) => key !== props.locale)
          .map(([key, value]) => (
            <meta key={key} property='og:locale:alternate' content={value} />
          ))}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={metaTitle} />
        <meta name='twitter:description' content={metaDescription} />
        <meta name='twitter:image' content={ogImage} />
        <meta name='twitter:image:alt' content='Diego Arndt — Frontend Engineer' />
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

      <div
        role='navigation'
        aria-label='Mobile menu'
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
                onTrack={() =>
                  track('nav_link_click', { section: id, label: name, location: 'mobile' })
                }
              >
                {name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      <main
        id='main-content'
        aria-label='Main content'
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
          aria-label='Introduction'
        >
          <Landing translation={translation} />
        </section>

        <section className='section-bg py-16 lg:py-24' id='about' aria-label='About'>
          <About translation={translation} />
        </section>

        <section className='section-bg py-16 lg:py-24' id='skills' aria-label='Skills'>
          <Skills translation={translation} />
        </section>

        <section className='section-bg py-16 lg:py-24' id='career' aria-label='Career'>
          <Career translation={translation} isLgScreen={isLgScreen} />
        </section>

        <section
          className='section-bg flex items-center justify-center py-16 lg:py-24'
          id='contact'
          aria-label='Contact'
        >
          <Contact translation={translation} />
        </section>
      </main>

      <Footer props={props} translation={translation} />
      {showEasterEgg && (
        <div className='fixed inset-0 z-[200] flex items-center justify-center bg-black/70 px-6'>
          <div className='w-full max-w-md rounded-2xl border border-cyan-500/40 bg-gray-900/90 p-6 text-center text-white shadow-2xl'>
            <p className='text-sm uppercase tracking-[0.3em] text-cyan-300'>Easter Egg</p>
            <h2 className='mt-3 text-3xl font-bold text-white'>Konami code unlocked</h2>
            <p className='mt-3 text-sm text-gray-200'>
              You found the hidden shortcut. Thanks for exploring.
            </p>
            <button
              type='button'
              className='mt-6 rounded-md bg-cyan-600 px-5 py-2 text-sm font-semibold text-white hover:bg-cyan-700'
              onClick={() => {
                track('easter_egg_close', { method: 'button' });
                setShowEasterEgg(false);
              }}
              aria-label='Close easter egg'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
