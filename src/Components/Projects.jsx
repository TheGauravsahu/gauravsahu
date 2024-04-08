import React from "react";
import Sundown from "/src/assets/Sundown.png";
import Nike1 from "/src/assets/Nike1.png";
import Pinerest from "/src/assets/Pinterest.png";

function Projects() {
  return (
    <div id="Projects" className="Projects lg:h-screen lg:mt-0 mt-36 h-full">
      <h1 className="text-5xl font-semibold text-center">Projects</h1>
      <p className="text-xl opacity-50 text-center mt-2">
        I have worked on a wide range of projects. Here are some of my projects.
      </p>

      <div className="Project-Cards w-full h-full flex flex-col lg:flex-row gap-16 items-center lg:justify-center mt-7">
       
        <div className="Project-card1 h-[450px] w-[350px] bg-[#171721] rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] px-4 py-4">
          
        <a target="_blank" href="https://gs-sundown-studio.vercel.app/"><img className="rounded-lg mb-2" src={Sundown} alt="" /></a>
          
          <a target="_blank" href="https://gs-sundown-studio.vercel.app/">
            Sundown Studio
          </a>
          
          <p className="opacity-50 mt-4">Sundown studio website crafted with HTML, CSS, and JavaScript. Utilizing the power of Locomotive.js, my site offers smooth scrolling and dynamic animations. From stunning design to fluid transitions,and immerse yourself in a truly engaging web experience.</p>
        </div>

        <div className="Project-card2 h-[450px] w-[350px] bg-[#171721] rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] px-4 py-4">

          <a target="_blank" href="https://gs-nikeproject.vercel.app/"><img className="rounded-lg mb-2" src={Nike1} alt="" /></a>

          <a target="_blank" href="https://gs-nikeproject.vercel.app/">
            Nike Project
          </a>

          <p className="opacity-50 mt-4">Nike's website, where HTML, CSS, and JavaScript converge to create a dynamic online hub. Immerse yourself in the world of sportswear excellence with seamless navigation, interactive product displays, and engaging user experiences.</p>
        </div>

        <div className="Project-card2 h-[450px] w-[350px] bg-[#171721] rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] px-4 py-4">
          
        <a target="_blank" href="https://gs-pinterest.vercel.app/"><img className="rounded-lg mb-2" src={Pinerest} alt="" /></a>
          
          <a target="_blank" href="https://gs-pinterest.vercel.app/">
            Pinterest Project
          </a>
         
          <p className="opacity-50 mt-4">Pinterest clone, meticulously crafted using HTML, CSS, JavaScript,.Dive into a world of endless creativity as you curate boards, discover new ideas, and connect with like-minded individuals.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
