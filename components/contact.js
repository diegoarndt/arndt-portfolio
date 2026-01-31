import React from 'react';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Confetti from 'react-confetti';
import confetti from 'canvas-confetti';
import Reveal from '../utils/reveal';

const Contact = ({ translation }) => {
  const [state, handleSubmit] = useForm('xdovzaap');
  const [showConfetti, setShowConfetti] = useState(false);

  const onSubmitWithConfetti = async (data) => {
    confettiEffect();
    handleSubmit(data);
  };

  const confettiEffect = () => {
    setShowConfetti(true);
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
        className='flex min-h-screen flex-col items-center justify-center px-10 pb-12 pt-24 lg:px-20 lg:pb-52 lg:pt-0'
        onSubmit={onSubmitWithConfetti}
      >
        <Reveal>
          <h3 className='flex max-w-lg cursor-default justify-center pb-16 text-2xl font-bold text-blue-500 dark:text-green-500 lg:max-w-2xl lg:pb-12 lg:text-3xl xl:max-w-4xl xl:text-4xl'>
            {translation.contactMe}
          </h3>
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
                placeholder={`${translation.namePlaceholder}`}
                autoComplete='off'
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
                placeholder={`${translation.emailPlaceholder}`}
                autoComplete='off'
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
                placeholder={`${translation.messagePlaceholder}`}
              ></textarea>
              <ValidationError prefix='Message' field='message' errors={state.errors} />
            </div>
          </div>
          <div className='flex w-full items-center justify-end px-3'>
            <button
              className='w-32 rounded bg-gradient-to-r from-blue-500 to-blue-900 px-4 py-2 font-bold text-white hover:to-blue-500 dark:from-green-500 dark:to-cyan-600 hover:dark:to-blue-500'
              type='submit'
              aria-label='Send message'
              disabled={state.submitting}
            >
              {translation.send}
            </button>
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
