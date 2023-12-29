import React from "react";

const Test = () => {
  const names = [
    {
      id: 1,
      user: "Beep",
    },
    {
      id: 2,
      user: "Indu",
    },
    {
      id: 3,
      user: "Chhoti",
    },
    {
      id: 4,
      user: "Monu",
    },
  ];
  return (
    <>
      <div className="w-full h-screen bg-zinc-600 flex justify-center items-center">
        <ul className="flex flex-col gap-5 fixed left-0 top-[20%]">
          {names.map(({ id, user }) => (
            <li key={id} className="bg-white w-80 h-20 p-5 rounded-full flex justify-end items-center ml-[-100px] hover:ml-10 duration-300">
              {user}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Test;
