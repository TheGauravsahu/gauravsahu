import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
  return (
    <div className="Footer h-[40vh] lg:h-[30vh] w-full mt-[200px] bg-black flex flex-col items-center overflow-hidden">
      <h1 className="text-center text-xl text-cyan-500 mt-6">Gaurav Sahu</h1>
      <div className="Links2 flex flex-col lg:flex-row gap-4 mt-6 text-2xl">
        <AnchorLink href="#Home">
          <li className="list-none">Home</li>
        </AnchorLink>
        <AnchorLink offset={50} href="#Skills">
          <li className="list-none">Skills</li>
        </AnchorLink>
        <AnchorLink offset={50} href="#Projects">
          <li className="list-none">Projects</li>
        </AnchorLink>
        <AnchorLink offset={50} href="#Contact">
          <li className="list-none ">Contact</li>
        </AnchorLink>
      </div>

      <div className="Links2  flex flex-row gap-4 mt-6 text-2xl">
        <a target="_blank" href="https://github.com/TheGauravsahu"><i className="ri-github-fill text-3xl"></i></a>
        <a target="_blank" href="https://gauravsahu.vercel.app/"><i className="ri-pages-line text-3xl"></i></a>
      </div>
    </div>
  );
}

export default Footer;
