import myself from '../public/myself.jpg';
import Image from 'next/image';

const About = ({ translation }) => {
  return (
    <div className='max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto p-10 lg:p-20'>
      <div className='mx-auto mt-20 lg:mt-16 border-2 border-green-500 hover:border-8 hover:border-blue-500 transition-all rounded-full relative overflow-hidden h-72 w-72 md:h-96 md:w-96'>
        <Image
          src={myself}
          alt='profile-picture'
          layout='fill'
          objectFit='cover'
          priority={true}
          className='border-t-8-4 border-black pointer-events-none'
        />
      </div>
      <h3 className='mx-auto py-20 lg:py-16 font-bold text-blue-500 dark:text-green-500 text-3xl lg:text-4xl'>
        {translation.summary}
      </h3>
      <p className='mx-auto text-justify tracking-widest text-gray-600 dark:text-gray-100 text-xl lg:text-1xl'>
        {translation.summaryDescription}
      </p>
    </div>
  );
};

export default About;
