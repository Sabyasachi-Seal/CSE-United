import React from "react";
import logo from "../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex py-2 px-4 bg-red-800 text-white">
      <div className="grow">
        <img src={logo} alt="" width={40} height={40} className="rounded-md" />
      </div>

      <ul className="flex justify-center items-center">
        <li className="px-4">Home</li>
        <li className="px-4">Events</li>
        <li className="px-4">Sponsors</li>
        <li className="px-4">Gallery</li>
        <li className="px-4">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
