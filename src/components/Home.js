import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import HomeMain from "./HomeMain";

const Home = () => {
  return (
    <section className="min-h-screen w-full text-white black">
      <ParallaxBanner className="aspect-[1]">
        <ParallaxBannerLayer>
          {/* <div className="w-full h-[140vh] relative z-[-1]">
            <img
              src="/bg-bhibhek.jpg"
              alt=""
              className="absolute top-0 left-0 bottom-0 right-0 w-full h-[110vh] object-cover"
            />
          </div> */}

          <HomeMain />
        </ParallaxBannerLayer>
        {/* <ParallaxBannerLayer scale={[1.4, 0.5]}>
          <div className="w-full h-[140vh] relative z-[10]">
            <img
              src="/CSE_bg_cropped.png"
              id="abcd"
              alt=""
              className="absolute scale-[1.2] top-0 bottom-0 left-0 right-0 w-full h-full object-cover z-[1]"
            />
          </div>
        </ParallaxBannerLayer> */}

        <ParallaxBannerLayer speed={-15}>
          <div className="w-full h-full flex justify-center items-center">
            <Logo width={300} height={300} className="-mt-[400px] logo" />
          </div>
        </ParallaxBannerLayer>

        {/* <ParallaxBannerLayer speed={-30}>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl text-red-600 font-thin -mt-[250px]">
              CSE-UNITED
            </h1>
          </div>
        </ParallaxBannerLayer> */}
      </ParallaxBanner>
    </section>
  );
};

export default Home;
