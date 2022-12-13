import React, { useState } from 'react';
import ReactPlayer from 'react-player/facebook';

const ContentVideo = () => {
  const [error, setError] = useState(false);

  const config = {
    url: 'https://www.facebook.com/watch/?v=498074305564729',
    muted: false,
    controls: true,
    onError: (e) => {
      console.log('Error');
      setError(true);
    },
    width: '100%',
    height: '100%'
  };

  if (error) return '';

  return (
    <div className='rounded-md overflow-hidden md:w-[500px] md:h-full h-[300px]'>
      <ReactPlayer playing={true} {...config} />
    </div>
  );
};

export default ContentVideo;
