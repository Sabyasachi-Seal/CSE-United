import React from "react";

const SpecialEvents = () => {
  return (
    <section
      id="special-events"
      className="w-full flex flex-col items-center pt-10 pb-10 text-white"
    >
      <a
        href="https://www.instagram.com/p/CnrZw8oAmYs/"
        target="_blank"
        rel="noreferrer"
      >
        <h1 className="text-6xl font-heading shadow-heading border-b-2 border-red-600 mb-8">
          <span>
            Check out our
          </span>{" "}
            <span className="text-red-500 font-heading">Insta Aftermovie</span>
        </h1>
      </a>
    </section>
  );
};

export default SpecialEvents;
