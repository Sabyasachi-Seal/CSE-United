import React from "react";
import ReactPlayer from "react-player/lazy";

const Content = () => {
  return (
    <section id="about" className="w-full text-white content-bg pl-2">
      <div className="p-8 pl-16">
        <h1 className="text-6xl mb-4">The Title</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="grow-1 py-4">
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div className="grow-1 p-4 flex justify-center">
            <div className="rounded-md overflow-hidden">
              <ReactPlayer url="https://fb.watch/gVSG5-k0Sq" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
