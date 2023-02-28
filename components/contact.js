import { BsFillEnvelopeFill } from 'react-icons/bs';

const Contact = ({ translation }) => {
  return (
    <form className='h-full max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-20'>
      <h3 className='flex justify-center font-bold text-orange-500 dark:text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-lg lg:max-w-2xl xl:max-w-4xl'>
        {translation.thanksForContacting}
      </h3>
      <h3 className='flex justify-center text-orange-500 dark:text-white text-sm md:text-md lg:text-lg xl:text-xl max-w-lg lg:max-w-2xl xl:max-w-4xl'>
        {translation.contactMe}
      </h3>
      <div className='flex justify-center items-center pt-4 px-10 pb-16 lg:pb-12 mx-auto'>
        <span
          className='text-gray-500 dark:text-white px-1 cursor-pointer'
          onClick={() => (window.location = 'mailto:diegoarndt@outlook.com')}
        >
          <BsFillEnvelopeFill />
        </span>
        <span className='flex items-center text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-600'>
          diegoarndt@outlook.com
        </span>
      </div>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
          <label
            className='block uppercase tracking-wide text-gray-500 dark:text-gray-300 text-xs font-bold mb-2'
            htmlFor='grid-name'
          >
            {translation.name}
          </label>
          <input
            className='appearance-none block w-full bg-gray-300 dark:bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            id='grid-name'
            type='text'
            placeholder={`${translation.namePlaceholder}`}
            autoComplete='off'
          ></input>
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
          <label
            className='block uppercase tracking-wide text-gray-500 dark:text-gray-300 text-xs font-bold mb-2'
            htmlFor='grid-email'
          >
            {translation.email}
          </label>
          <input
            className='appearance-none block w-full bg-gray-300 dark:bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            id='grid-email'
            type='email'
            placeholder={`${translation.emailPlaceholder}`}
            autoComplete='off'
          ></input>
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
          <label
            className='block uppercase tracking-wide text-gray-500 dark:text-gray-300 text-xs font-bold mb-2'
            htmlFor='grid-message'
          >
            {translation.message}
          </label>
          <textarea
            className='appearance-none block w-full bg-gray-300 dark:bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            id='grid-message'
            rows='8'
            placeholder={`${translation.messagePlaceholder}`}
          ></textarea>
        </div>
      </div>
      <div className='flex items-center justify-end'>
        <button
          className='shadow bg-orange-600 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-32'
          type='button'
        >
          {translation.send}
        </button>
      </div>
    </form>
  );
};

export default Contact;
