import { useRouter } from 'next/router';

import en from '../locales/en.json';
import es from '../locales/es.json';
import br from '../locales/br.json';
import de from '../locales/de.json';

import '../styles/globals.css';

const translation = {
  en,
  br,
  es,
  de
};

const countryCodes = {
  en: 'CA',
  br: 'BR',
  es: 'ES',
  de: 'DE'
};

const customLabels = {
  CA: 'English',
  BR: 'Português',
  ES: 'Español',
  DE: 'Deutsch'
};

function ArndtPortfolio({ Component, pageProps }) {
  const { locale, asPath, push } = useRouter();
  pageProps = { ...pageProps, countryCodes, customLabels, translation, locale, asPath, push };

  return <Component {...pageProps} />;
}

export default ArndtPortfolio;
