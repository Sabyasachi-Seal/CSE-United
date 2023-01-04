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
      <h5 className="text-6xl font-heading shadow-heading mb-8">
        <span>
          Coming<span className="text-red-500 font-heading"> Soon</span>...
        </span>{" "}
      </h5>
    </section>
  );
};
export default Sponsors;
