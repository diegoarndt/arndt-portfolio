import { AiFillLinkedin, AiFillGithub, AiFillGitlab } from 'react-icons/ai';
import Link from 'next/link';
import YearInWords from '../utils/yearInWords';

const Footer = ({props, translation}) => {
  return (
    <footer className='border-t-2 border-green-600 text-center py-10 text-gray-600 bg-gray-200 dark:bg-black dark:text-gray-400'>
      <div className='mx-auto max-w-3xl'>
        <blockquote className='text-lg text-gray-600 italic my-1 mx-6 pl-4 px-4 border-l-4 border-green-500'>
          &quot;{translation.quote}&quot; &ndash; Cory House
        </blockquote>
      </div>
      <div className='text-5xl py-5 flex justify-center gap-16 text-gray-600 dark:text-gray-400'>
        <Link href='https://gitlab.com/diegoarndt' passHref={true}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='hover:scale-110 hover:text-green-600'
          >
            <AiFillGitlab />
          </a>
        </Link>
        <Link href='https://github.com/diegoarndt' passHref={true}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='hover:scale-110 hover:text-purple-600'
          >
            <AiFillGithub />
          </a>
        </Link>
        <Link href='https://www.linkedin.com/in/diegoarndt' passHref={true}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='hover:scale-110 hover:text-blue-600'
          >
            <AiFillLinkedin />
          </a>
        </Link>
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
