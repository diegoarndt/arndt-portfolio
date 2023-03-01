import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=League+Spartan&family=Titillium+Web:wght@900&display=swap'
          rel='stylesheet'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <body className='font-poppins'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
