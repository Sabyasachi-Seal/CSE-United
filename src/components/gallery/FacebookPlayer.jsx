import React, { useState } from 'react';
import Player from 'react-player/facebook';

const FacebookPlayer = ({ url }) => {
  const [error, setError] = useState(false);

  if (error) {
    return '';
  }

  return (
    <Player
      url={url}
      width='100%'
      height='250px'
      onError={() => setError(true)}
    />
  );
};

export default FacebookPlayer;
