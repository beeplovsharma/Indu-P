import React from "react";
import project1 from "../assets/portfolio/project1.png";
import project2 from "../assets/portfolio/project2.png";
import project3 from "../assets/portfolio/project3.png";
import project4 from "../assets/portfolio/project4.png";
import project5 from "../assets/portfolio/project5.png";
import project6 from "../assets/portfolio/project6.png";
import { Link } from "react-scroll";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
    },
    {
      id: 2,
      src: project2,
    },
    {
      id: 3,
      src: project3,
    },
    {
      id: 4,
      src: project4,
    },
    {
      id: 5,
      src: project5,
    },
    {
      id: 6,
      src: project6,
    },
  ];
  return (
    <>
      <div id="portfolio" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-20">
        <h1 className="text-white text-4xl font-bold rounded-md bg-gradient-to-l to-gray-700 from-zinc-900 text-center md:text-start p-2 mb-10">
          <Link to="portfolio" smooth duration={500}>Portfolio</Link>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="h-[250px] w-[300px]  rounded-md shadow-lg shadow-slate-600 flex flex-col justify-center items-center gap-2">
              <img src={src} alt="" className="h-[150px] rounded-lg" />
              <div className="flex justify-center items-center gap-2">
                <button className="text-white bg-gradient-to-r from-gray-700 t-black px-3 py-2 rounded-md hover:font-bold duration-300">
                  Demo
                </button>
                <button className="text-white bg-gradient-to-l from-gray-700 t-black px-3 py-2 rounded-md hover:font-bold duration-300">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
