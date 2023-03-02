import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';

import en from '../locales/en.json';
import es from '../locales/es.json';
import pt from '../locales/pt.json';
import de from '../locales/de.json';

import '../styles/globals.css';

const translation = {
  en,
  pt,
  es,
  de,
};

const countryCodes = {
  en: 'CA',
  pt: 'BR',
  es: 'ES',
  de: 'DE',
};

const customLabels = {
  CA: 'English',
  PT: 'Português',
  ES: 'Español',
  DE: 'Deutsch',
};

function ArndtPortfolio({ Component, pageProps, initialLanguage, isDarkMode }) {
  const { locale, asPath, push } = useRouter();
  pageProps = {
    ...pageProps,
    countryCodes,
    customLabels,
    translation,
    locale,
    initialLanguage,
    isDarkMode,
    asPath,
    push,
  };

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const acceptLanguage = req.headers['accept-language'] || '';
  const preferredLanguage =
    acceptLanguage.split(',')[0].trim().split('-')[0] || 'en';

  let isDarkMode = false;
  if (typeof window !== 'undefined') {
    isDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  console.log('getServerSideProps props:', preferredLanguage, isDarkMode);

  return {
    props: {
      initialLanguage: preferredLanguage,
      isDarkMode,
    },
  };
}

export default ArndtPortfolio;
