import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import study from '../public/bg-study.jpg';
import work from '../public/bg-work.jpg';
import wxp from '../public/bg-wxp.jpg';
import senai from '../public/senai-logo.jpeg';
import telekom from '../public/telekom-logo.jpeg';
import furb from '../public/furb-logo.jpeg';
import vail from '../public/vail-logo.jpeg';
import veralogica from '../public/veralogica-logo.jpeg';
import humber from '../public/humber-logo.jpeg';
import Reveal from '../utils/reveal';

const Career = ({ translation, isLgScreen }) => {
  const careerTimeline = [
    {
      link: 'https://www.sc.senai.br/',
      logo: senai.src,
      bgImage: study.src,
      bgColor: 'bg-blue-500',
      title: 'SENAI',
      subtitle: `(${translation.senaiTitle})`,
      period: '2013 - 2014',
      location: `Blumenau, SC, ${translation.brazil}`,
      locationFlag: '🇧🇷',
      description: `${translation.senaiDescription}`,
      timelineDirection: '',
    },
    {
      link: 'https://www.t-systems.com/',
      logo: telekom.src,
      bgImage: work.src,
      bgColor: 'bg-pink-700',
      title: 'T-Systems',
      subtitle: `(${translation.telekomTitle})`,
      period: '2014 - 2020',
      location: `Blumenau, SC, ${translation.brazil}`,
      locationFlag: '🇧🇷',
      description: `${translation.telekomDescription}`,
      timelineDirection: 'flex-row-reverse',
    },
    {
      link: 'https://www.furb.br/',
      logo: furb.src,
      bgImage: study.src,
      bgColor: 'bg-blue-900',
      title: 'FURB',
      subtitle: `(${translation.furbTitle})`,
      period: '2015 - 2020',
      location: `Blumenau, SC, ${translation.brazil}`,
      locationFlag: '🇧🇷',
      description: `${translation.furbDescription}`,
      timelineDirection: '',
    },
    {
      link: 'https://www.vailresorts.com/',
      logo: vail.src,
      bgImage: wxp.src,
      bgColor: 'bg-gray-800',
      title: 'Vail Resorts',
      subtitle: `(${translation.vailTitle})`,
      period: '2017 - 2018',
      location: `South Lake Tahoe, CA, ${translation.usa}`,
      locationFlag: '🇺🇸',
      description: `${translation.vailDescription}`,
      timelineDirection: 'flex-row-reverse',
    },
    {
      link: 'https://www.veralogica.com/',
      logo: veralogica.src,
      bgImage: work.src,
      bgColor: 'bg-green-600',
      title: 'Veralogica GmbH',
      subtitle: `(${translation.veralogicaTitle})`,
      period: `2020 - ${translation.current}`,
      location: `Frankfurt, HE, ${translation.germany}`,
      locationFlag: '🇩🇪',
      description: `${translation.veralogicaDescription}`,
      timelineDirection: '',
    },
    {
      link: 'https://www.humber.ca/',
      logo: humber.src,
      bgImage: study.src,
      bgColor: 'bg-yellow-600',
      title: 'Humber College',
      subtitle: `(${translation.humberTitle})`,
      period: `2022 - ${translation.current}`,
      location: `Toronto, ON, ${translation.canada}`,
      locationFlag: '🇨🇦',
      description: `${translation.humberDescription}`,
      timelineDirection: 'flex-row-reverse',
    },
  ];

  return (
    <div className='container max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto pt-24 lg:pt-0 lg:pb-10 px-10 lg:px-20 w-full h-full'>
      <div className='text-gray-500 dark:text-gray-200'>
        <Reveal>
          <p className='text-2xl lg:text-3xl font-bold py-2 inline'>
            {translation.careerTitle}
          </p>
        </Reveal>
        <Reveal>
          <p className='text-xl lg:text-1xl py-6'>
            {translation.careerDescription}
          </p>
        </Reveal>
      </div>
      <div className='relative wrap overflow-hidden h-full pt-8'>
        <div
          className='border-2-2 absolute border-opacity-20 border-gray-500 dark:border-gray-300 h-full border hidden lg:block'
          style={{ left: '50%' }}
        ></div>

        {careerTimeline.map(
          (
            {
              link,
              logo,
              bgImage,
              bgColor,
              title,
              subtitle,
              period,
              location,
              locationFlag,
              description,
              timelineDirection,
            },
            index
          ) => {
            return (
              <div
                key={index}
                className={`mb-8 flex justify-between items-center w-full ${
                  isLgScreen && timelineDirection
                }`}
              >
                <div className='order-1 w-5/12 hidden lg:block'></div>
                <div className='z-20 flex items-center order-1 w-10 h-10'>
                  <Link href={link} passHref={true}>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:scale-110'
                      aria-label="Organization's website"
                    >
                      <Image
                        className='rounded-full'
                        src={logo}
                        alt={title}
                        width={100}
                        height={100}
                      />
                    </a>
                  </Link>
                </div>
                <div
                  className={`order-1 rounded-lg shadow-xl w-10/12 lg:w-5/12 px-6 py-4 relative ${bgColor}`}
                >
                  <Image
                    className='absolute inset-0 w-full h-full object-cover opacity-10 hover:opacity-30'
                    src={bgImage}
                    alt={title}
                    layout='fill'
                  />
                  <div className='relative w-fit'>
                    <Reveal>
                      <h3 className='font-bold text-white text-xl'>
                        {title}
                        <small className='px-1'>{subtitle}</small>
                      </h3>
                    </Reveal>
                    <Reveal>
                      <h4 className='mb-3'>
                        <small className='flex items-center text-white'>
                          {period} | {location}
                          <span className='text-2xl px-1'>{locationFlag}</span>
                        </small>
                      </h4>
                    </Reveal>
                    <Reveal>
                      <p className='leading-snug tracking-wide text-white'>
                        {description}
                      </p>
                    </Reveal>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Career;
