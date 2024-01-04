import React from 'react'
import heroImage from '../assets/heroImage.png'
import { MdArrowRight ,MdArrowDropDown  } from "react-icons/md";
import {Link} from "react-scroll"
const Hero = () => {
  return (
    <>
      <div id='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800 flex flex-col md:flex-row gap-[40px]'>

          <div className='py-[20px] md:h-screen flex justify-center items-center md:w-[50%]'>
            <img src={heroImage} className='w-[250px] md:w-[400px] rounded-2xl z-30' alt="my profile" />
          </div>

          <div className='md:h-screen flex flex-col justify-center items-center md:items-start md:w-[50%] md:px-[5vw] px-5 relative'>
            <h1 className='text-4xl md:text-6xl font-bold text-white text-center md:text-start z-30'>Indrani <br /> Pal</h1>
            <p className='text-gray-400 md:text-start text-center w-2/3 mx-auto md:mx-0 py-5 z-30'>A full stack web alchemist, creating elixirs of code while trying to attain the arcanum, transmutating codes into functionalities, trying to attain the quintessential esoteric of coding and development. 🚀</p>
            <div className='w-[200px] h-[200px] top-[25%] right-[80%] bg-[#1f5174] absolute rounded-[50%] blur-[20px]'></div>
            <div className='w-[200px] h-[200px] hidden md:flex md:top-[40%] md:right-[30%] bg-[#1f5174] absolute rounded-[50%] blur-[20px]'></div>
            <button className='text-white flex justify-center items-center w-fit px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 group to-blue-500 cursor-pointer'>
                <Link to='portfolio' smooth duration={500}>Portfolio</Link>
                <span className='group-hover:rotate-90 duration-300'>
                  <MdArrowRight size={20}/>
                </span>
            </button>
          </div>

      </div>
    </>
  )
}

export default Hero