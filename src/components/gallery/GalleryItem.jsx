import React from 'react';
import YoutubePlayer from './YoutubePlayer';
import FacebookPlayer from './FacebookPlayer';
import ReactPlayer from 'react-player/lazy';

const GalleryItem = ({ data, onClickHandler }) => {
  const getPlayer = () => {
    switch (data.platform) {
      case 'youtube':
        return <YoutubePlayer url={data.url} />;

      case 'facebook':
        return <FacebookPlayer url={data.url} />;

      default:
        return <ReactPlayer url={data.url} width='100%' height='250px' />;
    }
  };

  if (data.type === 'video') {
    return (
      <div className='w-full h-[250px] mb-[12px] rounded-sm overflow-hidden'>
        {getPlayer()}
      </div>
    );
  }

  return (
    <div className='pics' onClick={onClickHandler}>
      <img src={data.url} alt={data.alt} className='rounded-sm' />
    </div>
  );
};

export default GalleryItem;
