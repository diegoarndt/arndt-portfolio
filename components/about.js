import myself from '../public/myself.jpg';
import Image from 'next/image';

const About = ({ translation }) => {
  return (
    <div className='max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto p-10 lg:p-20'>
      <div className='mx-auto mt-20 lg:mt-16 border-2 border-orange-500 rounded-full relative overflow-hidden w-64 h-64 md:h-80 md:w-80 lg:h-96 lg:w-96'>
        <Image
          src={myself}
          alt='profile-picture'
          layout='fill'
          objectFit='cover'
          priority={true}
          className='border-t-8-4 border-black pointer-events-none'
        />
      </div>
      <h3 className='mx-auto py-20 lg:py-16 font-bold text-orange-500 dark:text-white text-3xl lg:text-4xl'>
        {translation.summary}
      </h3>
      <p className='mx-auto text-justify tracking-widest text-gray-600 dark:text-white text-xl lg:text-1xl'>
        {translation.summaryDescription}
      </p>
    </div>
  );
};

export default About;
