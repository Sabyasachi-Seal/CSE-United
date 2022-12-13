import React from 'react';
import ContentVideo from './ContentVideo';

const Content = () => {
  return (
    <section id='about' className='w-full text-white content-bg pl-2 md:pt-16'>
      <div className='py-8 md:p-8 pr-4 !pl-16'>
        <h1 className='text-6xl mb-4' data-aos='fade-right'>
          The Title
        </h1>
        <div className='flex flex-col lg:flex-row'>
          <div className='grow-1 py-4' data-aos='fade-up'>
            <p className='text-lg'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div
            className='grow-1 md:p-4 flex justify-center'
            data-aos='fade-left'
          >
            <ContentVideo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;