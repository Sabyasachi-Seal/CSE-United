import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive';

const items = [
  {
    img: '/bg.jpg',
    imgSm: '/bg-sm.jpg'
  },
  {
    img: '/gallery/bg-p.jpg',
    title1: 'CATCH UP',
    title2: 'with ALUMNI',
    subtitle:
      'Old batchmates, Professors, Staff, Beloved juniors, and Memories...',
    overlayOpacity: 75
  },
  {
    img: '/gallery/2.png',
    title1: 'WITNESS THE',
    title2: 'GRAND FEST',
    subtitle: 'Department of Computer Science and Engineering',
    subtitle2: 'Techno India Salt Lake'
  },
  {
    img: '/gallery/6.png',
    title1: '7th January',
    title2: '2023',
    subtitle: 'Mark your calendar'
  }
];

const config = {
  showArrows: false,
  showStatus: false,
  showThumbs: false,
  showIndicators: false,
  autoPlay: true,
  // interval: 2200,
  infiniteLoop: true
  // stopOnHover: true
};

const Home = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <section id='home' className='w-full text-white bg-theme-black'>
      <Carousel {...config}>
        {items.map((item, idx) => (
          <div className='relative' key={idx.toString()}>
            <img
              src={item.imgSm ? (isMobile ? item.imgSm : item.img) : item.img}
              alt=''
              className='h-[70vh] md:h-[calc(100vh-50px)] object-cover'
            />

            {item.title1 && (
              <div
                className={`absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center pl-20 md:pl-24 bg-black ${
                  item.overlayOpacity ? 'bg-opacity-75' : 'bg-opacity-40'
                }`}
              >
                <p className='text-4xl md:text-6xl font-thin tracking-widest leading-tight'>
                  <span className='font-extrabold'>
                    {item.title1.split(' ')[0]}
                  </span>
                  {item.title1.slice(item.title1.indexOf(' '))}
                </p>

                {item.title2 && (
                  <p className='text-3xl md:text-5xl font-thin tracking-widest leading-tight pt-8'>
                    {item.title2}
                  </p>
                )}

                {item.subtitle && (
                  <p className='pt-8 text-lg md:text-2xl text-left pr-2'>
                    {item.subtitle}
                  </p>
                )}
                {item.subtitle2 && (
                  <p className='pt-4 text-lg md:text-2xl text-left pr-2'>
                    {item.subtitle2}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Home;
