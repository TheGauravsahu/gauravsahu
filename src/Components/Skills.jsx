import React from "react";

function Skills() {
  return (
    <div id="Skills" className="Skills px-24 flex flex-col items-center lg:h-screen lg:mt-0 mt-36  h-full">
      <h1 className="text-5xl font-semibold text-center">Skills </h1>
      <p className="text-xl opacity-50 text-center mt-2">Here are some of my skills on which I have been working on.</p>

      <div className="card lg:w-[500px] w-[350px] h-[350px] rounded-2xl py-2 px-4 mt-8 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
        <h1 className="text-3xl opacity-70 text-center">Frontend</h1>
        
        <div className="flex items-center justify-center gap-4 mt-6">
        <h1 className="flex items-center gap-2 border-[1px] border-[#adabab] rounded-lg w-fit px-2 py-2"><img className="h-8" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React logo" />React Js</h1>
        
        <h1 className="flex items-center gap-2 border-[1px] border-[#adabab] rounded-lg w-fit px-2 py-2"><img className="h-8" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png" alt="React logo" />HTML</h1>
        
        <h1 className="flex items-center gap-2 border-[1px] border-[#adabab] rounded-lg w-fit px-2 py-2"><img className="h-8" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-256.png" alt="CSS logo" />CSS</h1>
        
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
        <h1 className="flex items-center gap-2 border-[1px] border-[#adabab] rounded-lg w-fit px-2 py-2"><img className="h-8" src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png" alt="JavaScript logo" />JavaScript</h1>
        
        <h1 className="flex items-center gap-2 border-[1px] border-[#adabab] rounded-lg w-fit px-2 py-2"><img className="h-6" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png" alt="React logo" />Tailwind Css</h1>
        </div>
        
        <div className="flex items-center justify-center gap-4 mt-6">
        <h1 className="flex items-center gap-2 border-[1px] border-[#adabab] rounded-lg w-fit px-2 py-2"><img className="h-6" src="https://sheryjs.com/assets/images/newLogo.png" alt="Shery Js" />Shery Js</h1>
        </div>

      </div>
    </div>
  );
}

export default Skills;
