import React from 'react';
import ContentVideo from './ContentVideo';

const Content = () => {
  return (
    <section id='about' className='w-full text-white content-bg pl-2 md:pt-16'>
      <div className='py-8 md:p-8 pr-4 !pl-16'>
        <h1 className='text-6xl mb-4' data-aos='fade-right'>
          Ab<span className='text-red-600'>ou</span>t{' '}
          <span className='text-red-600'>U</span>s
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
