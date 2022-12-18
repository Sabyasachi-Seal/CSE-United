import React from 'react';
import ContentVideo from './ContentVideo';

const Content = () => {
  return (
    <section id='about' className='w-full text-white content-bg pl-2 md:pt-16'>
      <div className='py-8 md:p-8 pr-4 !pl-16'>
        <h1 className='text-5xl mb-4' data-aos='fade-right'>
          <span>A</span>
          <span className='text-4xl'>
            B<span className='text-red-600'>OU</span>
            <span>T</span>
          </span>

          <br className='sm:hidden' />

          <span>{' C'}</span>
          <span className='text-red-600'>SE</span>
          <span>-UN</span>
          <span className='text-red-600'>ITE</span>
          <span>D</span>
        </h1>
        <div className='flex flex-col lg:flex-row'>
          <div className='grow-1 py-4' data-aos='fade-up'>
            <p className='text-lg'>
              At a time when the fest frenzy was just catching up, the
              Department of Computer Science and Engineering of Techno India
              Salt Lake came up with something quite ingenious. A totally new
              event, CSE United, the first of its kind was the annual and
              cultural cum alumni meet which began in the year 2011 under the
              supervision of the faculties of the department. 6 editions down
              the timeline, more performances oriented events, a bigger budget
              became add-ons. The glamour grew exponentially, the event which
              once begun as a platform to unveil the potential of the students
              became an ever bonding journey between the students, the alumni
              and the faculties.
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
