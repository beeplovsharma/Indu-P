import React from 'react'

const About = () => {
  return (
    <>
        <div id='about' className='w-full min-h-[65vh] bg-gradient-to-b to-black from-gray-800'>
            <div className='flex flex-col p-20'>
                <h1 className='text-white text-4xl font-bold rounded-md bg-gradient-to-l to-gray-700 from-zinc-800 text-center md:text-start p-2'>About</h1>

                <p className='text-zinc-400 mt-6 text-center text-2xl leading-10 md:text-start'>Welcome to the digital realm crafted by Web Developer! 🚀 With a passion for weaving the intricate threads of front-end finesse and back-end brilliance, I bring websites to life. From captivating user interfaces to robust server-side logic, every line of code is a brushstroke in the canvas of innovation. Join me on this journey through pixels and algorithms, where creativity meets functionality, and where your digital aspirations find their code-driven home. Let's build the future one line at a time! 💻✨</p>
            </div>
        </div>
    </>
  )
}

export default About