import Head from 'next/head';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/next';
import { League_Spartan, Titillium_Web } from 'next/font/google';

import en from '../locales/en.json';
import es from '../locales/es.json';
import pt from '../locales/pt.json';
import de from '../locales/de.json';
import fr from '../locales/fr.json';

import '../styles/globals.css';

const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-titillium',
  display: 'swap',
});

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-league',
  display: 'swap',
});

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
  const enableAnalytics =
    process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true' && process.env.NODE_ENV === 'production';
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
      <div className={`${titilliumWeb.variable} ${leagueSpartan.variable}`}>
        <Component {...pageProps} initialLanguage={initialLanguage} />
      </div>
      {enableAnalytics && <Analytics />}
    </>
  );
}

export default ArndtPortfolio;
