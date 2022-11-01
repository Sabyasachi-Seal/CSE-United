import React, { useEffect, useRef } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { ReactComponent as Fire } from "../assets/fire.svg";

// use-ref - https://the-goonies.webflow.io/

const Home = () => {
  const ref = useRef(null);

  useEffect(() => {

    const ele = ref.current;
    const handleScroll = (event) => {
      console.log("window.scrollY", window.scrollY);
      var scroll = event.currentTarget.scrollTop;
      ele.style.transform = 'scale(5,5)';
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="min-h-[90vh] w-full bg-gray-800 text-white flex justify-center items-center">
      <ParallaxBanner
        layers={[
          {
            speed: -20,
            children: (
              <div className="w-full h-full min-h-screen flex justify-center items-center">
                {/* <img
                  src="/bg3.jpg"
                  alt=""
                  className="w-full h-full object-contain"
                /> */}
              </div>
            ),
          },
          {
            speed: -15,
            children: (
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src="/logo_transparent.png"
                  alt=""
                  className="w-[250px] h-[250px] mb-[200px] logo"
                />
              </div>
            ),
          },
          // { image: "/banner-foreground.png", speed: -10 },
          {
            children: (
              <div className="w-full h-full flex justify-center items-end">
                {/* <img
                  src="/fire.svg"
                  alt=""
                  className="w-full h-full object-contain mt-[200px] opacity-40 relative"
                /> */}
                <div className="w-full h-auto flex justify-center object-contain opacity-50 mb-5">
                  <Fire className="" />
                </div>
              </div>
            ),
            speed: -15,
          },
          {
            speed: -30,
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-8xl text-red-600 font-thin mt-[150px]">
                  CSE-UNITED
                </h1>
              </div>
            ),
          },
        ]}
        className="aspect-[2/1]"
      />
    </section>
  );
};

export default Home;
