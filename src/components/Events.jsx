import React from 'react';

const Events = () => {
  return (
    <section
      id='events'
      className='min-h-[80vh] w-full bg-transparent text-white flex flex-col items-center pt-16 pl-16'
    >
      <h1 className='text-6xl font-heading shadow-heading border-b-2 border-red-600'>
        Ev<span className='text-red-500'>ent</span>s
      </h1>
      <div className='pt-12'>
        <p className='text-6xl font-heading italic'>Coming Soon</p>
      </div>
    </section>
  );
};

export default Events;
