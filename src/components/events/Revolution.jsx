import React from "react";

const Revolution = () => {
  return (
    <div className="bg-theme-black">
      {/* <div
        className="text-white text-center px-4 py-12"
        data-aos="zoom-in-down"
        data-aos-delay="600"
      >
      </div> */}
      <div className="w-full flex flex-col md:flex-row pl-8">
        <div data-aos="flip-right" data-aos-delay="400">
          <img
            src="/events/revolution.jpeg"
            alt="Resolution"
            className="w-full md:min-w-[36vw]"
          />
        </div>
        <div className="px-6 py-12 md:p-12 text-white text-justify flex items-center">
          <div className="text-lg">
            <h1 className="italic text-white text-4xl mb-8 pb-16 tracking-wide">
              “What's a fest without a guest performance?”
            </h1>
            <p className="italic tracking-wider">
              With the fall of evening on 7th January, 2023 you will feel the
              familiar rush of adrenaline rush once again.
            </p>
            <br />
            <p data-aos="fade-up" data-aos-delay="100" data-aos-offset="10">
              <b className="tracking-wide">
                The indie rock band REVOLUTION is all set to visit the campus on
                the final night. Revolution is a multilingual rock band that
                covers bollywood classics in their own distinctive rock style.
                They also have their original music in both Hindi and Bengali.
                Revolution has already been featured on reputed platforms such
                as Zee Music and Colors TV.
              </b>
            </p>
            <br />
            <p data-aos="fade-up" data-aos-delay="100" data-aos-offset="10">
              Get braced for an evening of bolly rock music, fabulous solo
              instrumentals and relentless headbanging.
              <i>CATCH REVOLUTION LIVE ON 7TH JAN , 6:30 PM ONWARDS AT TMSL.</i>
            </p>
            <br />

            <div
              className=""
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-offset="10"
            >
              {/* <span>GENERAL INSTRUCTIONS :</span>
              <br />
              <ul className="list-[square]">
                <li>
                  Entry will be provided on a first-come-first-serve basis as
                  there are limited seats.
                </li>
                <li>
                  The event is open only to the students of CSE, CSBS and
                  Diploma CST.
                </li>
                <li>Producing your ID Card is compulsory for entry.</li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revolution;
