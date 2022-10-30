import React, { useEffect } from "react";
import homeBg from "../assets/images/home-bg.png";

// use-ref - https://the-goonies.webflow.io/

const Home = () => {
  useEffect(() => {
    // const handleScroll = event => {
    //   // console.log("window.scrollY", window.scrollY);
    //   var scroll = event.currentTarget.scrollTop;
    //   //document.getElementById("#parallex");

    // window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <section className="min-h-screen w-full bg-red-400 text-white flex justify-center items-center">
      <img src={homeBg} alt="home-bg" className="z-10 w-full" />
      {/* <h1 className="z-0">Hello CSE-UNITED</h1> */}
    </section>
  );
};

export default Home;
