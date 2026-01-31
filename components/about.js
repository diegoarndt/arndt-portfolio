import myself from '../public/myself.jpg';
import Image from 'next/image';
import Reveal from '../utils/reveal';

const About = ({ translation }) => {
  return (
    <div className='mx-auto max-w-screen-md px-10 lg:max-w-screen-lg lg:px-20 xl:max-w-screen-xl'>
      <div className='relative mx-auto h-72 w-72 overflow-hidden rounded-full border border-green-400 transition-all hover:border-4 hover:border-blue-500 md:h-96 md:w-96'>
        <Image
          src={myself}
          alt='profile-picture'
          fill
          style={{ objectFit: 'cover' }}
          priority={true}
          className='border-t-8-4 pointer-events-none border-black'
        />
      </div>
      <h2 className='mx-auto mb-4 mt-12 text-2xl font-normal text-gray-600 dark:text-gray-300 lg:mb-6 lg:mt-14 lg:text-3xl'>
        How I Work
      </h2>
      <div className='lg:text-1xl mx-auto space-y-5 text-justify text-xl text-gray-600 dark:text-gray-100'>
        <p>
          <strong className='font-semibold text-gray-700 dark:text-gray-100'>
            Frontend Engineer with 5+ years of experience
          </strong>
          , focused on Angular, TypeScript, and RxJS — building product-focused, user-centered web
          applications.
        </p>
        <p>
          I partner with product and stakeholders, and collaborate with backend and infrastructure
          teams to translate requirements into clear frontend solutions.
        </p>
        <p>
          Experienced with REST APIs, CI/CD, and AWS in production (Cloud Practitioner certified),
          with a focus on clean code, accessibility, and pragmatic testing.
        </p>
      </div>
    </div>
  );
};

export default About;
