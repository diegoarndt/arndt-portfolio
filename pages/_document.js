import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='theme-color' content='#e5e7eb' media='(prefers-color-scheme: light)' />
        <meta name='theme-color' content='#000000' media='(prefers-color-scheme: dark)' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='canonical' href='https://diegoarndt.com/' />
        <link rel='alternate' hrefLang='en' href='https://diegoarndt.com/' />
        <link rel='alternate' hrefLang='pt' href='https://diegoarndt.com/pt' />
        <link rel='alternate' hrefLang='es' href='https://diegoarndt.com/es' />
        <link rel='alternate' hrefLang='de' href='https://diegoarndt.com/de' />
        <link rel='alternate' hrefLang='fr' href='https://diegoarndt.com/fr' />
        <link rel='alternate' hrefLang='x-default' href='https://diegoarndt.com/' />

        {/* DNS prefetch for third-party domains */}
        <link rel='dns-prefetch' href='https://formspree.io' />
      </Head>
      <body className='font-poppins'>
        <div
          aria-hidden='true'
          dangerouslySetInnerHTML={{
            __html: `<!--
              ██╗  ██╗██╗██████╗ ███████╗    ███╗   ███╗███████╗
              ██║  ██║██║██╔══██╗██╔════╝    ████╗ ████║██╔════╝
              ███████║██║██████╔╝█████╗      ██╔████╔██║█████╗
              ██╔══██║██║██╔══██╗██╔══╝      ██║╚██╔╝██║██╔══╝
              ██║  ██║██║██║  ██║███████╗    ██║ ╚═╝ ██║███████╗
              ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝╚══════╝

              Open to new opportunities ☕ Let's build something meaningful together.

              Feel free to reach out: diegoarndt@outlook.com
            -->`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
