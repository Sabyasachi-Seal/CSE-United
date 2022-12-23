import React from 'react';

const Football = () => {
  return (
    <div className='w-full flex flex-col-reverse md:flex-row pl-16 py-12 bg-[rgba(0,0,0,0.3)] pb-12'>
      <div className='px-6 py-12 md:p-12 text-white text-justify flex items-center'>
        <div className='text-lg'>
          <p className='italic tracking-wider'>Cheer up CSE Footballers!</p>
          <br />
          <p data-aos='fade-up' data-aos-delay='100' data-aos-offset='10'>
            CSE United is back with KICKOFF, the Inter-year Football Tournament.
            Brace yourselves for a thrilling round of knockout football matches
            as we come together to celebrate the sport in the best of spirits.
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
                Only the Captains of the respective teams should fill the form.
              </li>
              <li>All players of one team should be from the same year.</li>
              <li>
                The tournament is open only for students from the departments of
                CSE, CSBS and CST.
              </li>
              <li>Multiple teams from the same year are allowed.</li>
              <li>Refreshments will be provided on-spot.</li>
              <li>Entry fee: ₹ 300 per team.</li>
              <li>Timing: 6th January, 10:00 A.M.</li>
              <li>Team Size: 7-10 players.</li>
              <li>Max teams : 8</li>
            </ul>
            <br />
            <p>TOTAL PRIZE POOL: <span className='text-red-500 tracking-wide font-bold'>INR 3000</span></p>
          </div>
        </div>
      </div>

      <div
        className='md:pr-4 flex items-center'
        data-aos='flip-left'
        data-aos-delay='400'
      >
        <img
          src='/events/football.jpg'
          alt='Raj Vikramaditya a.k.a Striver'
          className='w-full md:min-w-[36vw]'
        />
      </div>
    </div>
  );
};

export default Football;
