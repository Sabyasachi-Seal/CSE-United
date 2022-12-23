import React from 'react';

const Alumni = () => {
  return (
    <section id='alumni' className='w-full pb-12'>
      <div
        className='w-full flex flex-col md:flex-row bg-theme-black'
        data-aos='fade-up'
      >
        <div data-aos="fade-right">
          <img
            src='/alumni.jpg'
            alt='alumni'
            className='w-full md:min-w-[36vw]'
          />
        </div>

        <div className='pl-16 pr-6 py-12 md:p-12 text-white text-justify'>
          <h4 className='text-gray-200'>Dear Alumni,</h4>
          <h1
            className='text-4xl md:text-5xl font-bold pt-4 pb-12 tracking-widest leading-tight'
            data-aos='fade-left'
            data-aos-offset='10'
          >
            WITNESS OUR
            <br />
            GRAND FEST
          </h1>
          <div className='text-lg'>
            <p data-aos='fade-up' data-aos-delay='100' data-aos-offset='10'>
              Mark your calendar. Spread the word around. CSE United is just
              around the corner! Catch up with old batchmates, professors,
              staff, beloved juniors, and memories of days gone by on 7th
              January 2023. We request your valued association and support to
              make the event a huge success!
            </p>
            <br />
            <p data-aos='fade-up' data-aos-delay='100' data-aos-offset='10'>
              👉🏻We, your dear juniors, have planned several exciting events to
              celebrate the spirit of CSE United. However, we need your support
              to help realize our efforts and transform them into reality.
              <span className='inline md:hidden'>
                {' '}
                We request you extend any monetary help that you can, to help us
                out and motivate us further.
              </span>
            </p>
            <br />
            <div
              className='flex items-center'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-offset='10'
            >
              <p className='pr-3'>
                <span className='hidden md:inline'>
                  We request you extend any monetary help that you can, to help
                  us out and motivate us further.
                </span>
                Kindly Scan the QR code in the poster to extend your support.
              </p>
              <span>
                <img src='/QR.jpg' alt='QR-code' width='200px' height='200px' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alumni;
