import React from 'react';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaAngular,
  FaReact,
  FaBootstrap,
  FaComments,
  FaHandsHelping,
  FaLightbulb,
  FaExchangeAlt,
  FaRegClock,
  FaTools,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiMicrosoftsqlserver,
} from 'react-icons/si';

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
      icon: SiMicrosoftsqlserver,
      title: 'SQL',
      fromBgColor: 'from-red-400',
      toBgColor: 'to-red-600',
      shadow: 'shadow-red-400',
    },
  ];

  const softSkills = [
    {
      icon: FaLightbulb,
      title: `${translation.creativity}`,
      fromBgColor: 'from-yellow-400',
      toBgColor: 'to-yellow-600',
      shadow: 'shadow-yellow-500',
    },
    {
      icon: FaHandsHelping,
      title: `${translation.teamwork}`,
      fromBgColor: 'from-blue-400',
      toBgColor: 'to-blue-600',
      shadow: 'shadow-blue-500',
    },
    {
      icon: FaComments,
      title: `${translation.communication}`,
      fromBgColor: 'from-orange-400',
      toBgColor: 'to-orange-600',
      shadow: 'shadow-orange-500',
    },
    {
      icon: FaExchangeAlt,
      title: `${translation.adaptability}`,
      fromBgColor: 'from-purple-400',
      toBgColor: 'to-purple-600',
      shadow: 'shadow-purple-500',
    },
    {
      icon: FaTools,
      title: `${translation.problemSolving}`,
      fromBgColor: 'from-red-400',
      toBgColor: 'to-red-600',
      shadow: 'shadow-red-500',
    },
    {
      icon: FaRegClock,
      title: `${translation.timeManagement}`,
      fromBgColor: 'from-gray-400',
      toBgColor: 'to-gray-600',
      shadow: 'shadow-gray-400',
    },
  ];

  return (
    <div className='flex flex-col justify-center w-full h-full max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto pt-24 lg:pt-0 px-10 lg:px-20 text-white'>
      <div className='pb-10'>
        <div className='text-gray-500 dark:text-gray-200'>
          <p className='text-2xl lg:text-3xl font-bold border-b-4 border-gray-500 py-2 inline'>
            {translation.hardSkills}
          </p>
          <p className='text-xl lg:text-1xl py-6'>
            {translation.hardSkillsDescription}
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-2 lg:px-12 sm:px-0'>
          {hardSkills.map(
            ({ icon, title, shadow, fromBgColor, toBgColor }, id) => {
              return (
                <div
                  key={id}
                  className={`flex flex-col items-center shadow-sm hover:scale-105 hover:shadow-2xl duration-500 py-2 rounded-lg hover:to-black bg-gradient-to-b ${fromBgColor} ${toBgColor} ${shadow} `}
                >
                  <span className='mx-auto'>
                    {React.createElement(icon, { className: 'text-5xl' })}
                  </span>
                  <p className='mt-4 font-bold'>{title}</p>
                </div>
              );
            }
          )}
        </div>
      </div>

      <div>
        <div className='text-gray-500 dark:text-gray-200'>
          <p className='text-2xl lg:text-3xl font-bold border-b-4 border-gray-500 py-2 inline'>
            {translation.softSkills}
          </p>
          <p className='text-xl lg:text-1xl py-6'>
            {translation.softSkillsDescription}
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-2 lg:px-12 sm:px-0'>
          {softSkills.map(
            ({ icon, title, shadow, fromBgColor, toBgColor }, id) => {
              return (
                <div
                  key={id}
                  className={`flex flex-col items-center shadow-md hover:scale-105 hover:shadow-2xl duration-500 py-2 rounded-lg hover:to-black  bg-gradient-to-b ${fromBgColor} ${toBgColor} ${shadow}`}
                >
                  <span className='mx-auto'>
                    {React.createElement(icon, { className: 'text-5xl' })}
                  </span>
                  <p className='mt-4 font-bold'>{title}</p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
