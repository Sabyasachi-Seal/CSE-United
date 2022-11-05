import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { ReactComponent as Logo } from "../assets/Logo.svg";

const Home = () => {
  return (
    <section className="min-h-screen w-full text-white">
      <ParallaxBanner className="aspect-[1]">
        <ParallaxBannerLayer scale={[0.8, 2]}>
          <div className="w-full h-[160vh] relative bg-green-200">
            <img
              src="/bg-b.jpg"
              alt=""
              className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover"
            />
          </div>
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-15}>
          <div className="w-full h-full flex justify-center items-center">
            <Logo width={300} height={300} className="-mt-[400px] logo" />
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <ParallaxBannerLayer speed={-30}>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-8xl text-red-600 font-thin -mt-[250px]">
            CSE-UNITED
          </h1>
        </div>
      </ParallaxBannerLayer>
    </section>
  );
};

export default Home;

/*
<ParallaxBanner
        layers={[
          {
            // speed: -20,
            scale: [1, 2, "easeOutBack"],
            children: (
              <div className="w-full h-[200vh] relative bg-green-200">
                <img
                  src="/bg-b.jpg"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-contain object-center"
                  // ref={ref}
                />
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
                />
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
                <h1 className="text-8xl text-red-600 font-thin -mt-[250px]">
                  CSE-UNITED
                </h1>
              </div>
            ),
          },
        ]}
        className="aspect-[3/4] h-400vh"
      />
*/
