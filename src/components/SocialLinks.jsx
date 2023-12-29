import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/indrani-pal-ba0607238/",
      style: "rounded-tr-2xl",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/MacroAndMicro",
      style: "hover:rounded-tr-2xl hover:rounded-br-2xl",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto://tyrannosaurusrex37@gmail.com",
      style: "hover:rounded-tr-2xl hover:rounded-br-2xl",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsPersonLinesFill size={25} />
        </>
      ),
      href: "/resume.pdf",
      download:true,
      style: "rounded-br-2xl",
    },
  ];
  return (
    <>
      <ul className="fixed top-[30%] left-0">
        {links.map(({id,href,style,child,download})=>(
            <li key={id} className={"w-32 h-12 bg-gray-600 ml-[-80px] hover:ml-0 duration-300 hidden md:flex text-white justify-end px-3" + " " + style}>
            <a href={href} download={download} target="_blank" rel="noreferrer" className="flex justify-center items-center gap-3">
                {child}
            </a>
        </li>
        ))}
      </ul>
    </>
  );
};

export default SocialLinks;
