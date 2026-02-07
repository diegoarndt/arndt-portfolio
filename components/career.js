import React from 'react';
import Image from 'next/image';
import { track } from '@vercel/analytics';
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
      link: 'https://www.veralogica.com/',
      logo: veralogica,
      bgImage: work,
      bgColor: 'bg-green-600',
      title: 'Veralogica GmbH',
      subtitle: '(Angular Frontend Engineer)',
      period: `2021 - ${translation.current}`,
      location: `Frankfurt, HE, ${translation.germany}`,
      locationFlag: '🇩🇪',
      description: `${translation.veralogicaDescription}`,
      timelineDirection: 'flex-row-reverse',
    },
    {
      link: 'https://www.humber.ca/',
      logo: humber,
      bgImage: study,
      bgColor: 'bg-yellow-600',
      title: 'Humber College',
      subtitle: `(${translation.humberTitle})`,
      period: `2022 - 2023`,
      location: `Toronto, ON, ${translation.canada}`,
      locationFlag: '🇨🇦',
      description: `${translation.humberDescription}`,
      timelineDirection: '',
    },
    {
      link: 'https://www.vailresorts.com/',
      logo: vail,
      bgImage: wxp,
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
      link: 'https://www.furb.br/',
      logo: furb,
      bgImage: study,
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
      link: 'https://www.t-systems.com/',
      logo: telekom,
      bgImage: work,
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
      link: 'https://www.sc.senai.br/',
      logo: senai,
      bgImage: study,
      bgColor: 'bg-blue-500',
      title: 'SENAI',
      subtitle: `(${translation.senaiTitle})`,
      period: '2013 - 2014',
      location: `Blumenau, SC, ${translation.brazil}`,
      locationFlag: '🇧🇷',
      description: `${translation.senaiDescription}`,
      timelineDirection: '',
    },
  ];

  return (
    <div className='container mx-auto h-full w-full max-w-screen-md px-10 pt-10 lg:max-w-screen-lg lg:px-20 lg:pb-10 lg:pt-12 xl:max-w-screen-xl'>
      <div className='text-gray-500 dark:text-gray-300'>
        <Reveal>
          <h2 className='inline text-2xl font-normal text-gray-600 dark:text-gray-300 lg:text-3xl'>
            {translation.careerTitle}
          </h2>
        </Reveal>
      </div>
      <div className='wrap relative h-full overflow-hidden pt-8'>
        <div
          className='border-2-2 absolute hidden h-full border border-gray-500 border-opacity-20 dark:border-gray-300 lg:block'
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
                className={`mb-8 flex w-full items-center justify-between ${
                  isLgScreen && timelineDirection
                }`}
              >
                <div className='order-1 hidden w-5/12 lg:block'></div>
                <div className='z-20 order-1 flex h-12 w-12 items-center'>
                  <a
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:scale-110'
                    aria-label={`Visit ${title} website`}
                    onClick={() =>
                      track('project_link_click', {
                        project: title,
                        url: link,
                        section: 'career',
                      })
                    }
                  >
                    <Image
                      className='rounded-full'
                      src={logo}
                      alt={title}
                      width={120}
                      height={120}
                      sizes='48px'
                      placeholder='blur'
                      loading='lazy'
                    />
                  </a>
                </div>
                <div
                  className={`relative order-1 w-10/12 rounded-lg px-6 py-4 shadow-xl lg:w-5/12 ${bgColor}`}
                >
                  <Image
                    className='absolute inset-0 h-full w-full object-cover opacity-10 hover:opacity-30'
                    src={bgImage}
                    alt={title}
                    fill
                    sizes='(min-width: 1024px) 40vw, 90vw'
                    placeholder='blur'
                    loading='lazy'
                  />
                  <div className='relative w-fit'>
                    <Reveal>
                      <h3 className='text-xl font-bold text-white'>
                        {title}
                        <small className='block text-sm font-medium text-white/80'>
                          {subtitle}
                        </small>
                      </h3>
                    </Reveal>
                    <Reveal>
                      <h4 className='mb-3'>
                        <small className='flex items-center text-sm text-white/70'>
                          {period} | {location}
                          <span className='px-1 text-2xl'>{locationFlag}</span>
                        </small>
                      </h4>
                    </Reveal>
                    <Reveal>
                      <p className='leading-snug tracking-wide text-white'>{description}</p>
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
