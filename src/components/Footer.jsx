import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-200 py-2 mt-auto fixed bottom-0 w-full print:hidden">
      <div>
        <p className="text-xs sm:text-sm text-center">
          Copyrights ©2024 |{" "}
          <a href="https://tanvirali.netlify.app" target="_blank">
            Sayyad Tanvir
          </a>{" "}
          | All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
