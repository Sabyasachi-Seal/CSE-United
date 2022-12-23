import React from 'react';
import Football from './Football';
import Striver from './Striver';

const SpecialEvents = () => {
  return (
    <section id="special-events" className='w-full flex flex-col items-center pt-10 text-white'>
      <h1 className='text-6xl font-heading shadow-heading border-b-2 border-red-600 mb-8'>
        <span>
          Sp<span className='text-red-500 font-heading'>eci</span>al
        </span>
        {' '}
        <span>
          Ev<span className='text-red-500 font-heading'>ent</span>s
        </span>
      </h1>

      <Striver />
      <Football />
    </section>
  );
};

export default SpecialEvents;
