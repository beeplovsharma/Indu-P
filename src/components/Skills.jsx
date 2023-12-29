import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import express from "../assets/express.png";
import cpp from "../assets/cpp.png";
import github from "../assets/github.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "HTML",
      style: "shadow-orange-500",
      src: html,
    },
    {
      id: 2,
      title: "CSS",
      style: "shadow-blue-500",
      src: css,
    },
    {
      id: 3,
      title: "Javascript",
      style: "shadow-yellow-500",
      src: js,
    },
    {
      id: 4,
      title: "Tailwind",
      style: "shadow-[#44a8b3]",
      src: tailwind,
    },
    {
      id: 5,
      title: "ReactJS",
      style: "shadow-[#00d7ff]",
      src: react,
    },
    {
      id: 6,
      title: "NodeJS",
      style: "shadow-[#8cc84b]",
      src: node,
    },
    {
      id: 7,
      title: "ExpressJS",
      style: "shadow-[#828282]",
      src: express,
    },
    {
      id: 8,
      title: "MongoDB",
      style: "shadow-[#4faa41]",
      src: mongo,
    },
    {
      id: 9,
      title: "CPP",
      style: "shadow-[#007fcc]",
      src: cpp,
    },
    {
      id: 10,
      title: "GitHub",
      style: "shadow-[#eeeeee]",
      src: github,
    },
  ];
  return (
    <>
      <div id="skills" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black p-20">
        <h1 className="text-white text-4xl font-bold rounded-md bg-gradient-to-l to-gray-700 from-zinc-900 text-center md:text-start p-2 mb-10">
          Skills
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {skills.map(({ id, title, src, style }) => (
            <div
              className={
                "flex flex-col justify-center items-center gap-4 w-[200px] h-[200px] shadow-md hover:scale-105 duration-300" +
                " " +
                style
              }
            >
              <img src={src} alt="" className="w-[100px]" />
              <p className="text-xl text-white font-bold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
