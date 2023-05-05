import React, { useState } from 'react';
import logo from '../../assets/images/logo.jpg';
import menuIcon from '../../assets/icons/menu-icon.png';
import close from '../../assets/icons/close.svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='sticky w-full top-0 text-white z-[999]'>
      <div className='font-bold flex py-2 px-4 bg-red-800 relative'>
        <div className='grow flex items-center'>
          <img
            src={logo}
            alt=''
            width={40}
            height={40}
            className='rounded-md'
          />
          <p className='mb-0 pl-2 text-3xl font-bold brand_name'>
            CSE-UNITED 2k23
          </p>
        </div>

        <ul className='justify-center items-center hidden md:flex'>
          <li className='px-2 lg:px-4'>
            <a href='#home'>Home</a>
          </li>
          <li className='px-2 lg:px-4'>
            <a href='#about'>About</a>
          </li>
          <li className='px-2 lg:px-4'>
            <a href='#events'>Events</a>
          </li>
          <li className='px-2 lg:px-4'>
            <a href='#gallery'>Gallery</a>
          </li>
          <li className='px-2 lg:px-4'>
            <a href='#sponsors'>Sponsors</a>
          </li>
          <li className='px-2 lg:px-4'>
            <a href='#contact'>Contact</a>
          </li>
          <li className='px-2 lg:px-4'>
            <a href='https://www.hastalavistacse.com/'>Hasta La Vista</a>
          </li>
        </ul>

        <div className='flex items-center md:hidden'>
          <img
            src={open ? close : menuIcon}
            alt=''
            width={25}
            height={25}
            onClick={() => setOpen((cur) => !cur)}
          />
        </div>
      </div>

      {open && (
        <div className='dropdown_menu -z-1 bg-black/80 w-full py-4 block md:hidden'>
          <ul className='flex flex-col justify-around items-center h-full text-lg text-white'>
            <li className='py-4 dropdown_item-1'>
              <a href='#home' onClick={() => setOpen(false)}>
                Home
              </a>
            </li>
            <li className='py-4 dropdown_item-2'>
              <a href='#about' onClick={() => setOpen(false)}>
                About
              </a>
            </li>
            <li className='py-4 dropdown_item-3'>
              <a href='#events' onClick={() => setOpen(false)}>
                Events
              </a>
            </li>
            <li className='py-4 dropdown_item-4'>
              <a href='#sponsors' onClick={() => setOpen(false)}>
                Sponsors
              </a>
            </li>
            <li className='py-4 dropdown_item-5'>
              <a href='#gallery' onClick={() => setOpen(false)}>
                Gallery
              </a>
            </li>
            <li className='py-2 dropdown_item-6'>
              <a href='#contact' onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
