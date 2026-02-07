import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { track } from '@vercel/analytics';
import logo from '../public/da-logo.png';

export default function Custom404() {
  useEffect(() => {
    track('404_view', { path: typeof window !== 'undefined' ? window.location.pathname : '' });
  }, []);

  return (
    <div className='flex min-h-screen flex-col bg-gray-200 text-gray-700 dark:bg-black dark:text-gray-200'>
      <Head>
        <title>404 — Page not found</title>
        <meta name='robots' content='noindex, follow' />
      </Head>

      <main className='relative mx-auto flex w-full max-w-4xl flex-grow flex-col items-center justify-center overflow-hidden px-6 py-16 text-center'>
        <div className='pointer-events-none absolute inset-0 opacity-70 dark:opacity-40'>
          <div className='absolute inset-0 bg-[radial-gradient(cyan_-300%,transparent_50%)]' />
          <div className='absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl' />
        </div>

        <div className='relative z-10 flex flex-col items-center'>
          <div className='relative h-16 w-16'>
            <Image src={logo} alt='Diego Arndt logo' fill sizes='64px' priority />
          </div>
          <p className='mt-4 text-sm uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400'>
            Diego Arndt
          </p>
          <h1 className='mt-4 text-6xl font-bold text-gray-800 dark:text-gray-100 sm:text-7xl'>
            404
          </h1>
          <p className='mt-4 text-xl text-gray-600 dark:text-gray-300'>
            This page doesn’t exist. Let’s get you back on track.
          </p>
          <div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
            <Link
              href='/'
              className='rounded-md bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-700'
              onClick={() => track('404_home_click')}
            >
              Back to home
            </Link>
            <a
              href='mailto:diegoarndt@outlook.com'
              className='rounded-md border border-cyan-600 px-6 py-3 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-600 hover:text-white dark:text-cyan-300'
              onClick={() =>
                track('404_contact_click', { method: 'mailto', email: 'diegoarndt@outlook.com' })
              }
            >
              Contact me
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
