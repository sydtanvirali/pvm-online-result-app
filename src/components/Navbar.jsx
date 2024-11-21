import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex flex-wrap items-center justify-center md:gap-5 w-screen bg-slate-100 p-5">
      <img src={Logo} alt="Logo" className="w-24" />
      <h1 className="text-3xl font-bold text-center">
        Pratap Vidya Mandir High School, Chopda
      </h1>
    </div>
  );
};

export default Navbar;
