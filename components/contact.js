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
      <h3 className='flex justify-center font-bold text-green-500 dark:text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-lg lg:max-w-2xl xl:max-w-4xl'>
        {translation.thanksForContacting}
      </h3>
    );
  }
  return (
    <>
      <form
        className='min-h-screen flex flex-col justify-center items-center pb-0 lg:pb-52 py-10 px-10 lg:px-20'
        onSubmit={onSubmitWithConfetti}
      >
        <h3 className='flex justify-center font-bold text-green-500 dark:text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-lg lg:max-w-2xl xl:max-w-4xl'>
          {translation.contactMe}
        </h3>
        <div className='flex justify-center items-center w-full pt-4 px-10 pb-16 lg:pb-12 mx-auto'>
          <span
            className='text-gray-500 dark:text-white px-1 cursor-pointer'
            onClick={() => (window.location = 'mailto:diegoarndt@outlook.com')}
          >
            <BsFillEnvelopeFill />
          </span>
          <span className='flex items-center text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-600'>
            diegoarndt@outlook.com
          </span>
        </div>
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
            className='shadow bg-green-600 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-32'
            type='submit'
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
