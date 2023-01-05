import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Sponsors = () => {
  return (
    <section
      id="special-events"
      className="w-full flex flex-col items-center pt-10 pb-10 text-white"
    >
      <h1 className="text-6xl font-heading shadow-heading border-b-2 border-red-600 mb-8">
        <span>
          O<span className="text-red-500 font-heading">u</span>r
        </span>{" "}
        <span>
          Sp<span className="text-red-500 font-heading">ons</span>ors
        </span>
      </h1>
      {/* <h5 className="text-6xl font-heading shadow-heading mb-8">
        <span>
          Coming<span className="text-red-500 font-heading"> Soon</span>...
        </span>{" "}
      </h5> */}
      <Carousel>
        <div className="rounded-md">
          <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </section>
  );
};
export default Sponsors;
