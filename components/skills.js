import React from 'react';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaAngular,
  FaReact,
  FaBootstrap,
  FaHandsHelping,
  FaLightbulb,
  FaCode,
  FaTachometerAlt,
  FaGraduationCap,
  FaBolt,
  FaDatabase,
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';
import Reveal from '../utils/reveal';

const Skills = ({ translation }) => {
  const hardSkills = [
    {
      icon: FaHtml5,
      title: 'HTML',
      fromBgColor: 'from-orange-400',
      toBgColor: 'to-orange-600',
      shadow: 'shadow-orange-500',
    },
    {
      icon: FaCss3,
      title: 'CSS',
      fromBgColor: 'from-blue-400',
      toBgColor: 'to-blue-600',
      shadow: 'shadow-blue-500',
    },
    {
      icon: FaJs,
      title: 'JavaScript',
      fromBgColor: 'from-yellow-400',
      toBgColor: 'to-yellow-600',
      shadow: 'shadow-yellow-500',
    },
    {
      icon: SiTypescript,
      title: 'TypeScript',
      fromBgColor: 'from-blue-400',
      toBgColor: 'to-blue-600',
      shadow: 'shadow-blue-500',
    },
    {
      icon: FaAngular,
      title: 'Angular',
      fromBgColor: 'from-red-400',
      toBgColor: 'to-red-600',
      shadow: 'shadow-red-500',
    },
    {
      icon: FaBootstrap,
      title: 'Bootstrap',
      fromBgColor: 'from-purple-400',
      toBgColor: 'to-purple-600',
      shadow: 'shadow-purple-500',
    },
    {
      icon: FaReact,
      title: 'Next JS',
      fromBgColor: 'from-blue-400',
      toBgColor: 'to-blue-600',
      shadow: 'shadow-blue-500',
    },
    {
      icon: SiTailwindcss,
      title: 'Tailwind',
      fromBgColor: 'from-sky-400',
      toBgColor: 'to-sky-600',
      shadow: 'shadow-sky-400',
    },
    {
      icon: FaDatabase,
      title: 'SQL',
      fromBgColor: 'from-red-400',
      toBgColor: 'to-red-600',
      shadow: 'shadow-red-400',
    },
  ];

  const softSkills = [
    {
      icon: FaCode,
      title: `${translation.softSkillOne}`,
      fromBgColor: 'from-green-400',
      toBgColor: 'to-green-600',
      shadow: 'shadow-green-500',
    },
    {
      icon: FaTachometerAlt,
      title: `${translation.softSkillTwo}`,
      fromBgColor: 'from-purple-400',
      toBgColor: 'to-purple-600',
      shadow: 'shadow-purple-500',
    },
    {
      icon: FaLightbulb,
      title: `${translation.softSkillThree}`,
      fromBgColor: 'from-yellow-400',
      toBgColor: 'to-yellow-600',
      shadow: 'shadow-yellow-500',
    },
    {
      icon: FaHandsHelping,
      title: `${translation.softSkillFour}`,
      fromBgColor: 'from-blue-400',
      toBgColor: 'to-blue-600',
      shadow: 'shadow-blue-500',
    },
    {
      icon: FaBolt,
      title: `${translation.softSkillFive}`,
      fromBgColor: 'from-red-400',
      toBgColor: 'to-red-600',
      shadow: 'shadow-red-500',
    },
    {
      icon: FaGraduationCap,
      title: `${translation.softSkillSix}`,
      fromBgColor: 'from-cyan-400',
      toBgColor: 'to-cyan-600',
      shadow: 'shadow-cyan-400',
    },
  ];

  return (
    <div className='mx-auto flex h-full w-full max-w-screen-md flex-col justify-center px-10 pt-24 lg:max-w-screen-lg lg:px-20 lg:pt-0 xl:max-w-screen-xl'>
      <div className='pb-10'>
        <div className='text-gray-500 dark:text-gray-200'>
          <Reveal>
            <p className='inline py-2 text-2xl font-bold leading-loose lg:text-3xl'>
              {translation.hardSkills}
            </p>
          </Reveal>
          <Reveal>
            <p className='lg:text-1xl py-6 text-xl'>{translation.hardSkillsDescription}</p>
          </Reveal>
        </div>

        <div className='grid w-full grid-cols-2 gap-8 py-8 text-center text-white sm:grid-cols-3 sm:px-0 lg:px-12'>
          {hardSkills.map(({ icon, title, shadow, fromBgColor, toBgColor }, id) => {
            return (
              <div
                key={id}
                className={`flex flex-col items-center rounded-lg bg-gradient-to-b py-2 shadow-sm duration-500 hover:scale-105 hover:to-black hover:shadow-2xl ${fromBgColor} ${toBgColor} ${shadow} `}
              >
                <span className='mx-auto'>
                  {React.createElement(icon, { className: 'text-5xl' })}
                </span>
                <Reveal>
                  <p className='mt-4 font-bold'>{title}</p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>

      <div className='lg:pb-10'>
        <div className='text-gray-500 dark:text-gray-200'>
          <Reveal>
            <p className='inline py-2 text-2xl font-bold leading-loose lg:text-3xl'>
              {translation.softSkills}
            </p>
          </Reveal>
          <Reveal>
            <p className='lg:text-1xl py-6 text-xl'>{translation.softSkillsDescription}</p>
          </Reveal>
        </div>

        <div className='grid w-full grid-cols-2 gap-8 py-8 text-center text-white sm:grid-cols-3 sm:px-0 lg:px-12'>
          {softSkills.map(({ icon, title, shadow, fromBgColor, toBgColor }, id) => {
            return (
              <div
                key={id}
                className={`flex flex-col items-center rounded-lg bg-gradient-to-b py-2 shadow-md duration-500 hover:scale-105 hover:to-black hover:shadow-2xl ${fromBgColor} ${toBgColor} ${shadow}`}
              >
                <span className='mx-auto'>
                  {React.createElement(icon, { className: 'text-5xl' })}
                </span>
                <Reveal>
                  <p className='mt-4 font-bold'>{title}</p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
