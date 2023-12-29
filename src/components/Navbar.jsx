import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <>
      <div className="w-full h-20 bg-black flex justify-between items-center px-5">
        <div>
          <h1 className="text-white text-4xl font-signature select-none">
            Indrani
          </h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-white hover:scale-105 hover:font-bold capitalize cursor-pointer font-medium px-5 select-none duration-200"
            >
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="text-gray-500 z-50 cursor-pointer md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col absolute justify-center items-center left-0 top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 gap-4">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="text-4xl capitalize cursor-pointer text-white"
              >
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
