import React, { useState } from 'react';
import Player from 'react-player/youtube';
import getYouTubeID from 'get-youtube-id';

const getYTVideoThumbnailLink = (url) => {
  const videoID = getYouTubeID(url, { fuzzy: false });
  return `https://i.ytimg.com/vi_webp/${videoID}/0.webp`;
};

const YoutubePlayer = ({ url }) => {
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    return '';
  }

  return (
    <Player
      playing={playing}
      url={url}
      config={{
        youtube: {
          playerVars: {
            controls: 1,
            modestbranding: 1,
            enablejsapi: 1
          }
        }
      }}
      width='100%'
      height='250px'
      light={getYTVideoThumbnailLink(url)}
      onClickPreview={() => setPlaying(true)}
      onError={() => setError(true)}
    />
  );
};

export default YoutubePlayer;
