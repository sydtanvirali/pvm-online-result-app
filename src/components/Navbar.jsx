import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex flex-wrap items-center justify-center md:gap-5 w-full bg-slate-100 p-2 print:hidden">
      <img src={Logo} alt="Logo" className="w-16 md:w-24" />
      <h1 className="hidden sm:block md:text-3xl font-bold text-center">
        Pratap Vidya Mandir High School, Chopda
      </h1>
    </div>
  );
};

export default Navbar;
