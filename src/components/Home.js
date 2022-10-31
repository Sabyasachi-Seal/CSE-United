import React, { useEffect,useRef } from "react";
import homeBg from "../assets/images/home-bg.png";

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
    <section className="min-h-screen w-full bg-red-400 text-white flex justify-center items-center">
      <img src={homeBg} alt="home-bg" className="z-10 w-full" id="parallex" ref={ref}/>
      {/* <h1 className="z-0">Hello CSE-UNITED</h1> */}
    </section>
  );
};

export default Home;
