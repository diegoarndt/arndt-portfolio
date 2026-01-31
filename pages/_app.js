import Head from 'next/head';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/next';

import en from '../locales/en.json';
import es from '../locales/es.json';
import pt from '../locales/pt.json';
import de from '../locales/de.json';
import fr from '../locales/fr.json';

import '../styles/globals.css';

const translation = {
  en,
  pt,
  es,
  de,
  fr,
};

const countryCodes = {
  en: 'US',
  pt: 'BR',
  es: 'ES',
  de: 'DE',
  fr: 'FR',
};

const customLabels = {
  US: 'English',
  BR: 'Português',
  ES: 'Español',
  DE: 'Deutsch',
  FR: 'Français',
};

function ArndtPortfolio({ Component, pageProps, initialLanguage }) {
  const { locale, asPath, push } = useRouter();
  pageProps = {
    ...pageProps,
    countryCodes,
    customLabels,
    translation,
    locale,
    initialLanguage,
    asPath,
    push,
  };

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} initialLanguage={initialLanguage} />
      <Analytics />
    </>
  );
}

export default ArndtPortfolio;
