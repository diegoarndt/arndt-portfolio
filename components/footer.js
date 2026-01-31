import { AiFillLinkedin, AiFillGithub, AiFillGitlab } from 'react-icons/ai';
import YearInWords from '../utils/yearInWords';

const Footer = ({ props, translation }) => {
  return (
    <footer className='border-t-2 border-cyan-600 bg-gray-200 py-5 text-center text-gray-600 dark:bg-black dark:text-gray-400 lg:py-10'>
      <div className='mx-auto max-w-3xl'>
        <blockquote className='mx-6 my-1 border-l-4 border-cyan-500 px-4 pl-4 text-lg italic text-gray-600'>
          &quot;{translation.quote}&quot; &ndash; Cory House
        </blockquote>
      </div>
      <div className='flex justify-center gap-16 py-5 text-5xl text-gray-600 dark:text-gray-400'>
        <a
          href='https://gitlab.com/diegoarndt'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:scale-110 hover:text-orange-600'
          aria-label='Gitlab profile'
        >
          <AiFillGitlab />
        </a>
        <a
          href='https://github.com/diegoarndt'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:scale-110 hover:text-purple-600'
          aria-label='Github profile'
        >
          <AiFillGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/diegoarndt'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:scale-110 hover:text-blue-600'
          aria-label='LinkedIn profile'
        >
          <AiFillLinkedin />
        </a>
      </div>
      <p>
        {translation.handcrafted}&nbsp;©&nbsp;
        <span>
          <YearInWords language={props.locale} />
        </span>
      </p>
    </footer>
  );
};

export default Footer;
