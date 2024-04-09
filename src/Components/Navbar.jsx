import React, { useState } from 'react';
import Logo from "/src/assets/GS_text.png";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage navbar visibility

  const toggleLinks = () => {
    setIsOpen(!isOpen); // Toggle navbar visibility on click
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'; // Disable scrolling when navbar is open
  };
  
  return (
    <div className="Navbar w-full h-16 items-center lg:justify-around justify-between px-3 lg:px-0 pt-6 lg:fixed flex lg:backdrop-blur-md lg:bg-white/0 lg:rounded-xl lg:shadow-lg lg:ring-1 lg:ring-black/5 relative">
      <div className="Logo">
        <img className="h-5" src={Logo} alt="" />
      </div>

      <div className={`Links h-screen w-[80%] lg:w-fit lg:bg-inherit bg-cyan-500 z-20 rounded-border border-gray-100 lg:border-none lg:sticky absolute left-0 top-0 text-black lg:text-white lg:flex flex-col lg:flex-row justify-center items-center gap-6 text-5xl lg:text-lg transition duration-300 ease-in-out ${isOpen ? '' : 'hidden'}`}>
        <AnchorLink href="#Home">
          <li className="list-none mt-44 lg:my-0 ml-10">Home</li>
        </AnchorLink>
        <AnchorLink offset={50} href="#Skills">
          <li className="list-none my-6 lg:my-0 ml-10 lg:ml-0">Skills</li>
        </AnchorLink>
        <AnchorLink offset={50} href="#Projects">
          <li className="list-none my-6 lg:my-0 ml-10 lg:ml-0">Projects</li>
        </AnchorLink>
        <AnchorLink offset={50} href="#Contact">
          <li className="list-none ml-10 lg:ml-0">Contact</li>
        </AnchorLink>
      </div>

      <div className="Connect hidden lg:flex">
        <button className="py-3 px-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          Connect With Me
        </button>
      </div>

      <div className="mobile-nav lg:hidden flex item-end justify-end">
        <i onClick={() => {
      const Links = document.querySelector(".Links");
      Links.classList.toggle("hidden");
    document.body.style.overflow = 'hidden';
     }} 
          className="ri-menu-3-line text-2xl"
        ></i>
      </div>
    </div>
  );
};

export default Navbar;

