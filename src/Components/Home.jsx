import React from "react";
import Img from "/src/assets/Portfolio_Image.jpg";


function Home() {
  return (
    <div id="Home" className="Home w-full lg:h-screen h-full flex justify-between flex-col gap-7 lg:flex-row overflow-hidden lg:px-24 px-6 lg:mt-0 mt-16">
      <div className="Home-Left h-full w-full lg:w-[60%] flex flex-col justify-center">
      <h1 className="text-6xl font-[600]">Hi, I am</h1>
      <h1 className="text-6xl font-[600] my-2">Gaurav Sahu</h1>
      <h1 className="text-3xl font-[600] mb-4">I am a <span className="text-cyan-500">Web Developer</span></h1>

      <p className="w-full lg:w-2/3 opacity-50 text-xl">I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>

      <div className="Connect  mt-10">
        <button className="py-3 px-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  mb-[10px]">
          Explore More
        </button>
      </div>
      </div>
      
      <div className="Home-Right h-full w-full lg:w-[35%] flex items-center">
        <img className="h-[400px] w-[400px] rounded-full object-cover border-teal-500 border-4" src={Img} alt="" />
      </div>
    </div>
  );
}

export default Home;
