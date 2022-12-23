import React from 'react';
import EVENTS from '../../data/events.json';
import EventCard from './EventCard';

const Events = () => {
  return (
    <section
      id='events'
      className='min-h-[80vh] w-full bg-transparent text-white flex flex-col items-center pt-16 pl-16 pr-4 pb-8'
    >
      <h1 className='text-6xl font-heading shadow-heading border-b-2 border-red-600'>
        Ev<span className='text-red-500'>ent</span>s
      </h1>
      <div className='pt-12 grid grid-cols-1 md:grid-cols-2'>
        {EVENTS.map((event) => (
          <EventCard key={event.id} data={event} />
        ))}
      </div>
    </section>
  );
};

export default Events;
