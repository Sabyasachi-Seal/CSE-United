import React from 'react';

const Striver = () => {
  return (
    <div className='bg-theme-black'>
      <div
        className='text-white text-center px-4 py-12'
        data-aos='zoom-in-down'
        data-aos-delay='600'
      >
        <h1 className='italic text-white text-4xl mb-8 tracking-wide'>
          “Well, I am coming to the grand fest of CSE-United 2023. Excited ?”
        </h1>
        <p className='text-lg'>
          - Mr.Raj Vikramaditya aka{' '}
          <span className='text-red-500 font-bold tracking-wide'>Striver</span>
        </p>
      </div>

      <div className='w-full flex flex-col md:flex-row pl-16'>
        <div data-aos='flip-right' data-aos-delay='400'>
          <img
            src='/events/striver.jpg'
            alt='Raj Vikramaditya a.k.a Striver'
            className='w-full md:min-w-[36vw]'
          />
        </div>

        <div className='px-6 py-12 md:p-12 text-white text-justify flex items-center'>
          <div className='text-lg'>
            <p className='italic tracking-wider'>...Drum rolls…</p>
            <br />
            <p data-aos='fade-up' data-aos-delay='100' data-aos-offset='10'>
              <b className='tracking-wide'>Raj Vikramaditya a.k.a Striver</b>, a
              commonplace name in the coding community owing to his
              revolutionary SDE Sheet, is all set to visit the campus on 6th
              January, 2023.
            </p>
            <br />
            <p data-aos='fade-up' data-aos-delay='100' data-aos-offset='10'>
              An extremely popular Youtuber with 2,90,000+ subscribers, the
              founder at Take U Forward and a 6-Star Coder at CodeChef, Striver
              also happens to be an SWE at Google. Tune in to catch him live at
              G-Series, on the session A guide to Placement sharp at 4:00 P.M
              IST.
            </p>
            <br />

            <div
              className=''
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-offset='10'
            >
              <span>GENERAL INSTRUCTIONS :</span>
              <br />
              <ul className='list-[square]'>
                <li>
                  Entry will be provided on a first-come-first-serve basis as
                  there are limited seats.
                </li>
                <li>
                  The event is open only to the students of CSE, CSBS and
                  Diploma CST.
                </li>
                <li>Producing your ID Card is compulsory for entry.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Striver;
