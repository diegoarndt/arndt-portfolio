import myself from '../public/myself.jpg';
import Image from 'next/image';
import Reveal from '../utils/reveal';

const About = ({ translation }) => {
  return (
    <div className='mx-auto max-w-screen-md px-10 pt-10 lg:max-w-screen-lg lg:px-20 lg:pt-20 xl:max-w-screen-xl'>
      <div className='relative mx-auto mt-20 h-72 w-72 overflow-hidden rounded-full border-2 border-green-500 transition-all hover:border-8 hover:border-blue-500 md:h-96 md:w-96 lg:mt-16'>
        <Image
          src={myself}
          alt='profile-picture'
          fill
          style={{ objectFit: 'cover' }}
          priority={true}
          className='border-t-8-4 pointer-events-none border-black'
        />
      </div>
      <Reveal>
        <h3 className='mx-auto py-20 text-3xl font-bold text-blue-500 dark:text-green-500 lg:py-16 lg:text-4xl'>
          {translation.summary}
        </h3>
      </Reveal>
      <Reveal>
        <p className='lg:text-1xl mx-auto text-justify text-xl text-gray-600 dark:text-gray-100'>
          {translation.summaryDescription}
        </p>
      </Reveal>
    </div>
  );
};

export default About;
