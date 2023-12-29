import React from "react";

const Contact = () => {
  return (
    <>
      <div id="contact" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-20">
        <h1 className="text-white text-4xl font-bold rounded-md bg-gradient-to-l to-gray-700 from-zinc-900 text-center md:text-start p-2 mb-10">
          Contact
        </h1>

        <div>
            <form action="https://getform.io/f/3cbe6b3c-51ba-4ccd-8785-7bfb2370faed" method="POST" className="flex flex-col justify-center items-center gap-4">
                <input 
                type="text"
                name="name"
                placeholder="Name"
                className="p-2 rounded-md bg-black text-white border-[1.5px] focus:outline-none border-white w-[350px]" 
                 />

                <input 
                type="email"
                name="name"
                placeholder="E-mail"
                className="p-2 rounded-md bg-black text-white border-[1.5px] focus:outline-none border-white w-[350px]"
                 />

                 <textarea name="message" placeholder="Message" className="p-2 rounded-md bg-black text-white border-[1.5px] focus:outline-none border-white w-[350px]" cols="30" rows="10"></textarea>

                 <button type="submit" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-md hover:scale-105 duration-300">Let's Talk</button>
            </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
