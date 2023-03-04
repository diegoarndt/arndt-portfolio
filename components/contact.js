import React from 'react';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import Confetti from 'react-confetti';
import confetti from 'canvas-confetti';

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
      <h3 className='flex justify-center font-bold text-green-500 dark:text-gray-100 text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-lg lg:max-w-2xl xl:max-w-4xl'>
        {translation.thanksForContacting}
      </h3>
    );
  }
  return (
    <>
      <form
        className='min-h-screen flex flex-col justify-center items-center pb-24 lg:pb-52 pt-24 lg:pt-0 px-10 lg:px-20'
        onSubmit={onSubmitWithConfetti}
      >
        <h3 className='flex justify-center font-bold text-blue-500 dark:text-green-500 text-xl px-10 pb-16 lg:pb-12 md:text-2xl lg:text-3xl xl:text-4xl max-w-lg lg:max-w-2xl xl:max-w-4xl cursor-default'>
          {translation.contactMe}
        </h3>
        <div className='flex flex-wrap w-full -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-500 dark:text-gray-300 text-xs font-bold mb-2'
              htmlFor='name'
            >
              {translation.name}
            </label>
            <input
              className='appearance-none block w-full bg-gray-300 dark:bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='name'
              name='name'
              type='text'
              placeholder={`${translation.namePlaceholder}`}
              autoComplete='off'
            ></input>
            <ValidationError prefix='Name' field='name' errors={state.errors} />
          </div>
        </div>
        <div className='flex flex-wrap w-full -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-500 dark:text-gray-300 text-xs font-bold mb-2'
              htmlFor='email'
            >
              {translation.email}
            </label>
            <input
              className='appearance-none block w-full bg-gray-300 dark:bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='email'
              name='email'
              type='email'
              placeholder={`${translation.emailPlaceholder}`}
              autoComplete='off'
            ></input>
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
          </div>
        </div>
        <div className='flex flex-wrap w-full -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-500 dark:text-gray-300 text-xs font-bold mb-2'
              htmlFor='message'
            >
              {translation.message}
            </label>
            <textarea
              className='appearance-none block w-full bg-gray-300 dark:bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='message'
              name='message'
              rows='8'
              placeholder={`${translation.messagePlaceholder}`}
            ></textarea>
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
          </div>
        </div>
        <div className='flex items-center justify-end w-full px-3'>
          <button
            className='bg-gradient-to-r from-blue-500 to-blue-900 dark:from-green-500 dark:to-cyan-600 hover:to-blue-500 hover:dark:to-blue-500 text-white font-bold py-2 px-4 rounded w-32'
            type='submit'
            aria-label="Send message"
            disabled={state.submitting}
          >
            {translation.send}
          </button>
        </div>
      </form>
      {showConfetti && (
        <Confetti
          recycle={false}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}
    </>
  );
};

export default Contact;
