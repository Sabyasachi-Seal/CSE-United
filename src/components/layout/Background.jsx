import React, { useEffect, useState } from "react";

const Background = () => {
  const [offSetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handle = () => {
      const y = window.scrollY;
      setOffsetY(y);
    };

    window.addEventListener("scroll", handle);

    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, []);

  //   console.log(offSetY);

  return (
    <>
      <div
        id="bg1"
        style={{ backgroundPositionY: `${offSetY * 0.2}px` }}
        data-0="background-position:0px 0px;"
        data-end="background-position:-500px -10000px;"
      ></div>
      <div
        id="bg2"
        style={{ backgroundPositionY: `${offSetY * 0.4}px` }}
        data-0="background-position:0px 0px;"
        data-end="background-position:-500px -8000px;"
      ></div>
    </>
  );
};

export default Background;
