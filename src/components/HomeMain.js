import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeMain = () => {
  const ele = useRef(null);

  useLayoutEffect(() => {
    if (!ele.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.defaults({
        // Defaults are used by all ScrollTriggers
        toggleActions: "restart pause resume pause", // Scoll effect Forward, Leave, Back, Back Leave
      });

      gsap.to(".image-1", {
        scale: 1.5,
        duration: 2,
        scrollTrigger: {
          trigger: ".image-1",
          scrub: true,
          start: "top top",
          end: "+=100% 50px",
        },
      });

      gsap.to(".image-2", {
        scale: 3,
        duration: 2,
        scrollTrigger: {
          trigger: ".image-2",
          scrub: true,
          start: "top top",
          end: "+=100% 50px",
        },
      });
    }, ele.current);

    return () => ctx.revert();
  }, []);

  return (
    <section className="test" ref={ele}>
      <div id="zoom" style={{ backgroundColor: "green" }}>
        <div className="zoom">
          <div className="image image-1">
            <img
              src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5cffeaf7b3cb0ed2d33f7943_hero.jpg"
              alt=""
            />
          </div>
          <div className="image image-2">
            <img
              src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d13364599bb70e3560cc4e5_background-min 3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
