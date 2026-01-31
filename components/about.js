import myself from '../public/myself.jpg';
import Image from 'next/image';
import Reveal from '../utils/reveal';

const About = ({ translation }) => {
  return (
    <div className='mx-auto max-w-screen-md px-10 lg:max-w-screen-lg lg:px-20 xl:max-w-screen-xl'>
      <div className='relative mx-auto h-72 w-72 overflow-hidden rounded-full border-2 border-green-500 transition-all hover:border-8 hover:border-blue-500 md:h-96 md:w-96'>
        <Image
          src={myself}
          alt='profile-picture'
          fill
          style={{ objectFit: 'cover' }}
          priority={true}
          className='border-t-8-4 pointer-events-none border-black'
        />
      </div>
      <h3 className='mx-auto py-20 text-3xl font-bold text-blue-500 dark:text-green-500 lg:py-16 lg:text-4xl'>
        How I Work
      </h3>
      <div className='mx-auto space-y-6 text-justify text-xl text-gray-600 dark:text-gray-100 lg:text-1xl'>
        <p>
          Frontend Engineer specialized in Angular, TypeScript, and RxJS, with strong
          experience building and maintaining scalable, user-focused web applications.
        </p>
        <p>
          I work closely with product and stakeholders, translating business requirements and
          user feedback into clear, actionable frontend solutions. I regularly participate in
          client-facing discussions, help scope features, and collaborate with backend and
          infrastructure teams to deliver reliable, high-quality results.
        </p>
        <p>
          I have solid experience consuming REST APIs, working within CI/CD pipelines, and
          using AWS in production environments (Cloud Practitioner certified). I value clean
          code, accessibility, and pragmatic testing, and I use AI-assisted tools responsibly
          to improve productivity while maintaining full ownership of quality and decisions.
        </p>
      </div>
    </div>
  );
};

export default About;
