import React from 'react';

const EventCard = ({ data }) => {
  const dates = data.date.map((d) => getDateAndLabel(d));

  return (
    <div className='p-4'>
      <div
        className='flex flex-col bg-[#2B2D2F] rounded-md overflow-hidden'
        data-aos='fade-up'
      >
        <div className='flex flex-col sm:flex-row'>
          <div
            className='shrink-0 sm:max-w-[45%] flex justify-center'
            data-aos='fade-left'
            data-aos-delay='200'
          >
            <img src={`/events/${data.poster}`} alt='' className='' />
          </div>

          <div
            className='flex flex-col p-4'
            data-aos='fade-right'
            data-aos-delay='200'
          >
            <div className='text-center text-red-600 text-3xl pb-4'>
              {data.title}
            </div>
            <div className='text-white'>{data.description}</div>
          </div>
        </div>

        <div className='flex items-center py-6'>
          <p className='m-0 grow flex justify-center text-sm md:text-base'>
            {dates.map((dt, idx) => (
              <>
                {idx > 0 && <span className='pl-1 pr-2'>&&</span>}
                <span className='block'>{dt.day}</span>
                <span className='-translate-y-1 text-xs'>{dt.label}</span>
                <span className='block pl-2'>{dt.rest}</span>
              </>
            ))}
          </p>
          <div className='grow' data-aos='fade-down' data-aos-delay='400'>
            <a
              className='theme-btn'
              href={data.link}
              target='_blank'
              rel='noreferrer'
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

const getDateAndLabel = (date) => {
  const arr = date.split(' ');
  const t = arr[0].split('').reverse().join('');
  const label = t.slice(0, 2).split('').reverse().join('');
  const day = t.slice(2);
  const rest = arr.slice(1).join(' ');

  return { day, label, rest };
};
