import React from 'react';
import { AtomLoader } from 'react-loaders-kit';
// import Typed from "react-typed";

function Loader() {
  const loaderProps = {
    loading: true,
    size: 275,
    duration: 2,
    colors: ['#ffffff', '#f42e00', '#042549']
  };

  return (
    <div className='fixed top-0 left-0 w-full h-full min-h-screen flex justify-center items-center z-[9999] bg-theme-black'>
      <AtomLoader {...loaderProps} />
    </div>
  );
}

export default Loader;
