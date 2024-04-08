import React from "react";

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1ff6ae6e-02d3-4238-8d9b-ad5072650a8d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div id="Contact" className="Contact h-full w-full mt-[200px] flex flex-col items-center">
      <h1 className="text-5xl font-semibold text-center">Contact</h1>
      <p className="text-xl opacity-50 text-center my-4">
        Feel free to reach out to me for any questions or opportunities!
      </p>

      <form onSubmit={onSubmit} className="h-[550px] w-[300px] lg:h-[550px] lg:w-[600px] bg-[#171721] mt-6 rounded-xl flex flex-col shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
        <h1 className="text-3xl font-semibold px-4 py-6 ">Email Me 🚀</h1>
        <input className="mb-4 mx-4 h-12 px-4 bg-transparent border-[.5px] border-white rounded-xl hover:animate-pulse" type="email" placeholder="Your Email" name="email"/>
        
        <input className="mb-4 mx-4 h-12 px-4 bg-transparent border-[.5px] border-white rounded-xl hover:animate-pulse" type="text" placeholder="Your Name" name="name"/>
        
        <input className="mb-4 mx-4 h-12 px-4 bg-transparent border-[.5px] border-white rounded-xl hover:animate-pulse" type="text" placeholder="Subject" />

        <textarea className="mb-4 mx-4  px-4 py-4 bg-transparent border-[.5px] border-white rounded-xl hover:animate-pulse" placeholder="Message" name="message" rows="6"></textarea>

        <button type="submit" className="py-3 mx-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:animate-pulse" onClick={()=>{
          const text1 = document.querySelector(".fs");
          text1.classList.toggle("hidden");
        }}>
         Send
        </button>
        <h1 className="fs text-center text-green-400 text-2xl my-6 hidden font-semibold">Your Message Has Been Sended</h1>
        </form>
      </div>
  );
}


export default Contact;
