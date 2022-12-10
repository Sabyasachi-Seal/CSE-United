import React from 'react';
import { ReactComponent as FBIcon } from '../assets/icons/facebook.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin.svg';
import { ReactComponent as YTIcon } from '../assets/icons/youtube.svg';
import { ReactComponent as WAIcon } from '../assets/icons/whatsapp.svg';

// use ref - https://cseunitedmain.gtsb.io/

const FloatingSocialIcons = () => {
  return (
    <aside className='fixed bottom-0 left-0 text-white'>
      <ul className='flex flex-col h-[60vh] items-center left-icons-container justify-end'>
        <li>
          <FBIcon width={35} height={35} color='#ff0000' />
        </li>
        <li>
          <LinkedInIcon width={35} height={35} color='#ff0000' />
        </li>
        <li>
          <YTIcon width={35} height={35} color='#ff0000' />
        </li>
        <li>
          <WAIcon width={38} height={38} color='#ff0000' />
        </li>
      </ul>
    </aside>
  );
};

export default FloatingSocialIcons;
