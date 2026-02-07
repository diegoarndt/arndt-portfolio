import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useForm, ValidationError } from '@formspree/react';
import { track } from '@vercel/analytics';
import Reveal from '../utils/reveal';

const InlineWidget = dynamic(() => import('react-calendly').then((module) => module.InlineWidget), {
  ssr: false,
});

const Confetti = dynamic(() => import('react-confetti'), { ssr: false });

const Contact = ({ translation }) => {
  const [state, handleSubmit] = useForm('xdovzaap');
  const [showConfetti, setShowConfetti] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [showScheduler, setShowScheduler] = useState(false);
  const hasTrackedSuccess = useRef(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (state.succeeded && !hasTrackedSuccess.current) {
      track('contact_form_success', { form: 'contact' });
      hasTrackedSuccess.current = true;
    }
  }, [state.succeeded]);

  const onSubmitWithConfetti = async (data) => {
    track('contact_form_submit', { form: 'contact' });
    await confettiEffect();
    handleSubmit(data);
  };

  const confettiEffect = async () => {
    setShowConfetti(true);
    const { default: confetti } = await import('canvas-confetti');
    confetti({
      particleCount: 250,
      startVelocity: 30,
      spread: 720,
      duration: 10000,
    });
  };

  if (state.succeeded) {
    return (
      <h3 className='flex max-w-lg justify-center px-10 text-2xl font-bold text-green-500 dark:text-gray-100 lg:max-w-2xl lg:text-3xl xl:max-w-4xl xl:text-4xl'>
        {translation.thanksForContacting}
      </h3>
    );
  }
  return (
    <>
      <form
        className='flex flex-col items-center justify-center px-10 pb-6 lg:px-20 lg:pb-8'
        onSubmit={onSubmitWithConfetti}
      >
        <Reveal>
          <h2 className='flex max-w-lg cursor-default justify-center pb-4 pt-10 text-2xl font-normal text-gray-600 dark:text-gray-300 lg:max-w-2xl lg:pt-12 lg:text-3xl xl:max-w-4xl'>
            Let’s talk
          </h2>
          <p className='mb-10 text-center text-base text-gray-500 dark:text-gray-300 lg:text-lg'>
            Open to frontend roles, remote opportunities, and collaborations.
          </p>
          <div className='mb-6 flex w-full flex-wrap'>
            <div className='w-full px-3'>
              <label
                className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-300'
                htmlFor='name'
              >
                {translation.name}
              </label>
              <input
                className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-300 px-4 py-3 leading-tight text-gray-500 focus:bg-white focus:outline-none dark:bg-gray-200'
                id='name'
                name='name'
                type='text'
                placeholder='Full name'
                autoComplete='off'
                required
                aria-required='true'
              ></input>
              <ValidationError prefix='Name' field='name' errors={state.errors} />
            </div>
          </div>
          <div className='mb-6 flex w-full flex-wrap'>
            <div className='w-full px-3'>
              <label
                className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-300'
                htmlFor='email'
              >
                {translation.email}
              </label>
              <input
                className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-300 px-4 py-3 leading-tight text-gray-500 focus:bg-white focus:outline-none dark:bg-gray-200'
                id='email'
                name='email'
                type='email'
                placeholder='Email address'
                autoComplete='off'
                required
                aria-required='true'
              ></input>
              <ValidationError prefix='Email' field='email' errors={state.errors} />
            </div>
          </div>
          <div className='mb-6 flex w-full flex-wrap'>
            <div className='w-full px-3'>
              <label
                className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-300'
                htmlFor='message'
              >
                {translation.message}
              </label>
              <textarea
                className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-300 px-4 py-3 leading-tight text-gray-500 focus:bg-white focus:outline-none dark:bg-gray-200'
                id='message'
                name='message'
                rows='8'
                placeholder='How can I help?'
                required
                aria-required='true'
              ></textarea>
              <ValidationError prefix='Message' field='message' errors={state.errors} />
            </div>
          </div>
          <div className='mt-6 flex w-full items-center justify-center px-3 lg:mt-8'>
            <button
              className='w-56 rounded bg-gradient-to-r from-blue-500 to-blue-900 px-4 py-2 font-bold text-white hover:to-blue-500 dark:from-green-500 dark:to-cyan-600 hover:dark:to-blue-500'
              type='submit'
              aria-label='Send message'
              disabled={state.submitting}
            >
              Send message
            </button>
          </div>
          <div className='mt-6 text-center text-sm text-gray-500 dark:text-gray-300'>
            Prefer email?{' '}
            <a
              href='mailto:diegoarndt@outlook.com'
              className='text-gray-600 underline-offset-4 hover:underline dark:text-gray-200'
            >
              Email me directly
            </a>
          </div>

          <div className='my-10 flex w-full items-center'>
            <div className='flex-grow border-t border-gray-300 dark:border-gray-600'></div>
            <span className='mx-4 text-sm text-gray-400 dark:text-gray-500'>or</span>
            <div className='flex-grow border-t border-gray-300 dark:border-gray-600'></div>
          </div>

          <div className='w-full'>
            <h3 className='mb-4 text-center text-xl font-normal text-gray-600 dark:text-gray-300'>
              Schedule a call
            </h3>
            <div className='overflow-hidden rounded-lg'>
              {!showScheduler ? (
                <div className='flex h-[480px] min-w-[320px] flex-col items-center justify-center gap-4 rounded-lg bg-gray-100 text-sm text-gray-500 dark:bg-gray-900 dark:text-gray-400'>
                  <p>Calendly loads after you click.</p>
                  <button
                    type='button'
                    className='rounded bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-700'
                    onClick={() => {
                      track('calendly_load_click', { section: 'contact' });
                      setShowScheduler(true);
                    }}
                    aria-label='Load scheduler'
                  >
                    Load scheduler
                  </button>
                </div>
              ) : hasMounted ? (
                <InlineWidget
                  url='https://calendly.com/diegoarndt'
                  styles={{ height: '480px', minWidth: '320px' }}
                />
              ) : (
                <div className='flex h-[480px] min-w-[320px] items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500 dark:bg-gray-900 dark:text-gray-400'>
                  onClick={() =>
                    track('contact_email_click', {
                      method: 'mailto',
                      email: 'diegoarndt@outlook.com',
                    })
                  }
                  Loading scheduler…
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </form>
      {showConfetti && (
        <Confetti recycle={false} onConfettiComplete={() => setShowConfetti(false)} />
      )}
    </>
  );
};

export default Contact;
