import React from 'react'
import heroImage from '../assets/heroImage.png'
import { MdArrowRight ,MdArrowDropDown  } from "react-icons/md";
const Hero = () => {
  return (
    <>
      <div id='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800 flex flex-col md:flex-row gap-[40px]'>

          <div className='py-[20px] md:h-screen flex justify-center items-center md:w-[50%]'>
            <img src={heroImage} className='w-[250px] md:w-[400px] rounded-2xl' alt="my profile" />
          </div>

          <div className='md:h-screen flex flex-col justify-center items-center md:items-start md:w-[50%] md:px-[5vw] px-5'>
            <h1 className='text-4xl md:text-6xl font-bold text-white text-center md:text-start'>I'm a Full Stack <br /> Developer</h1>
            <p className='text-gray-400 md:text-start text-center w-2/3 mx-auto md:mx-0 py-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dicta sunt optio ab voluptas nihil?</p>
            
            <button className='text-white flex justify-center items-center w-fit px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 group to-blue-500 cursor-pointer'>
                Portfolio
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