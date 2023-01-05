// import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

const Sponsors = () => {
  return (
    <section
      id="special-events"
      className="bg-transparent backdrop-blur-md pl-10 pr-10 w-full flex flex-col items-center pt-10 pb-10 text-white"
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
      <div class="grid grid-cols-3 gap-6">
        <div className="rounded-md">
          <a rel="noreferrer" target="_blank"  href="https://prestogifts.com/mobile/"><img class="" src="https://www.smergers.com/media/franchiselogos/Presto_LOGO.png" alt=""/></a>
        </div>
        <div className="rounded-md">
          <a rel="noreferrer" target="_blank"  href="https://www.decathlon.in/"><img class="" src="https://logos-world.net/wp-content/uploads/2020/12/Decathlon-Logo.png" alt=""/></a>
        </div>
        <div className="rounded-md">
          <a rel="noreferrer" target="_blank"  href="https://ayuhealthandwellness.com/wp/"><img class="" src="https://cdn.discordapp.com/attachments/1036282124468244572/1059881867416973382/Bottle.png" alt=""/></a>
        </div>
        <div className="rounded-md">
          <a rel="noreferrer" target="_blank"  href="https://kwikpic.in/"><img class="" src="https://www.kwikpic.in/blog/wp-content/uploads/2022/10/Primary-Logo-e1667194420295-2048x532.png" alt=""/></a>
        </div>
        {/* <div className="rounded-md">
          <a rel="noreferrer" target="_blank"  href=""><img class="" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/></a>
        </div>
        <div className="rounded-md">
          <a rel="noreferrer" target="_blank"  href=""><img class="" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/></a>
        </div> */}
      </div>
    </section>
  );
};
export default Sponsors;
