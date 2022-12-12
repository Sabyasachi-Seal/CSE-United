import React from 'react';
import logo from '../assets/images/logo.jpg';

const Navbar = () => {
  return (
    <nav className='sticky top-0 flex py-2 px-4 bg-red-800 text-white z-10'>
      <div className='grow flex items-center'>
        <img src={logo} alt='' width={40} height={40} className='rounded-md' />
        <p className='mb-0 pl-2 text-2xl'>CSE-UNITED 2k23</p>
      </div>

      <ul className='flex justify-center items-center'>
        <li className='px-4'>
          <a href='#home'>Home</a>
        </li>
        <li className='px-4'>
          <a href='#events'>Events</a>
        </li>
        <li className='px-4'>
          <a href='#sponsors'>Sponsors</a>
        </li>
        <li className='px-4'>
          <a href='#gallery'>Gallery</a>
        </li>
        <li className='px-4'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
