import TypeIt from 'typeit-react';
import { AiFillLinkedin, AiFillGithub, AiFillGitlab } from 'react-icons/ai';
import YearInWords from '../utils/yearInWords';

const Footer = ({ props, translation }) => {
  const quotes = [
    '“Code is like humor. When you have to explain it, it’s bad.” — Cory House',
    '“Make it work, make it right, make it fast.” — Kent Beck',
    '“The best code is no code at all — but only when it solves the problem.”',
    '“Good software is built for people first, computers second.”',
    '“Simplicity is the ultimate sophistication.”',
    '“If you care about the user, the code will follow.”',
  ];

  return (
    <footer className='border-t-2 border-cyan-600 bg-gray-200 py-5 text-center text-gray-600 dark:bg-black dark:text-gray-400 lg:py-10'>
      <div className='mx-auto max-w-3xl'>
        <blockquote className='mx-6 my-1 border-l-4 border-cyan-500 px-4 pl-4 text-lg italic text-gray-600'>
          <TypeIt
            options={{ loop: true, speed: 30, lifeLike: true, waitUntilVisible: true }}
            getBeforeInit={(instance) => {
              quotes.forEach((quote, index) => {
                instance.type(quote).pause(2000);
                if (index < quotes.length - 1) {
                  instance.delete();
                }
              });
              return instance;
            }}
          />
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
