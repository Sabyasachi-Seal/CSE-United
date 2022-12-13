import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import HomeMain from "./HomeMain";

const Home = () => {
  return (
    <section id="home" className="min-h-[125vh] w-full text-white bg-theme-black relative overflow-hidden">
      <ParallaxBanner className="aspect-[1/3] md:aspect-[1] lg:aspect-[2] !overflow-visible">
        <ParallaxBannerLayer>
          <HomeMain />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer speed={-15}>
          <div className="w-full h-full flex justify-center items-center">
            <Logo className="logo w-[10rem] h-[10rem] lg:w-[16rem] lg:h-[16rem]" />
          </div>
        </ParallaxBannerLayer>

        {/* <ParallaxBannerLayer speed={-30} opacity={[1, 0, 'easeInOut']}>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="mt-[300px] lg:mt-[400px] text-4xl sm:text-6xl lg:text-8xl text-red-600 title-text">
              CSE-UNITED
            </h1>
          </div>
        </ParallaxBannerLayer> */}
      </ParallaxBanner>
    </section>
  );
};

export default Home;
