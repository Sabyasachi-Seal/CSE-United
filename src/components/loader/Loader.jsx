import React from "react";
import { AtomLoader } from "react-loaders-kit";
// import Typed from "react-typed";

function Loader() {

  const loaderProps = {
    loading: true,
    size: 275,
    duration: 2,
    colors: ["#ffffff", "#f42e00", "#042549"],
  };

  return (
    <div className="loader">
        <AtomLoader {...loaderProps} />
    </div>
  );
}

export default Loader;