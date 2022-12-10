import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import HomeMain from "./HomeMain";

const Home = () => {
  return (
    <section id="home" className="min-h-screen w-full text-white bg-theme-black relative">
      <ParallaxBanner className="aspect-[1]">
        <ParallaxBannerLayer>
          <HomeMain />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-15}>
          <div className="w-full h-full flex justify-center items-center">
            <Logo width={300} height={300} className="-mt-[600px] logo" />
          </div>
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-30} opacity={[1, 0, 'easeInOut']}>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl text-red-600 font-thin title-text">
              CSE-UNITED
            </h1>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </section>
  );
};

export default Home;
