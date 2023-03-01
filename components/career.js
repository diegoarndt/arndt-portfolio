import React from 'react';
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

const Career = ({ translation }) => {
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
      period: '2014 - 2015',
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
      period: '2015 - 2018',
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
      period: '2018 - 2019',
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
    <div className='container max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto px-20 w-full h-full'>
      <div className='text-gray-500 dark:text-white'>
        <p className='text-2xl lg:text-3xl font-bold border-b-4 border-gray-500 py-2 inline'>
          {translation.careerTitle}
        </p>
        <p className='py-6'>{translation.careerDescription}</p>
      </div>
      <div className='relative wrap overflow-hidden h-full py-8'>
        <div
          className='border-2-2 absolute border-opacity-20 border-gray-600 dark:border-gray-300 h-full border'
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
                className={`mb-8 flex justify-between items-center w-full ${timelineDirection}`}
              >
                <div className='order-1 w-5/12'></div>
                <div className='z-20 flex items-center order-1 w-10 h-10'>
                  <Link href={`${link}`} passHref={true}>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:scale-110'
                    >
                      <img className='rounded-full' src={`${logo}`} />
                    </a>
                  </Link>
                </div>
                <div
                  className={`order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 relative ${bgColor}`}
                >
                  <img
                    src={`${bgImage}`}
                    className='absolute inset-0 w-full h-full object-cover opacity-10 hover:opacity-30'
                  />
                  <div className='relative w-fit'>
                    <h3 className='font-bold text-white text-xl'>
                      {title}
                      <small className='px-1'>{subtitle}</small>
                    </h3>
                    <h6 className='mb-3'>
                      <small className='flex items-center text-white'>
                        {period} | {location}
                        <span className='text-2xl px-1'>{locationFlag}</span>
                      </small>
                    </h6>
                    <p className='text-sm leading-snug tracking-wide text-white'>
                      {description}
                    </p>
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
