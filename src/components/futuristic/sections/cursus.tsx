"use client";

import Dropdown, { DropdownProps } from "../dropdown";
import { CardTopContainer, SmallCardBottomContainer } from "../svgs";

export const dropdownTestData: DropdownProps[] = [
  {
    leftTitle: "Libft",
    rightTitle: "01-2025 (1 Month)",
    children: "Recreate essential C standard library functions.",
  },
  {
    leftTitle: "Get_Next_Line",
    rightTitle: "01-2025 (3 Weeks)",
    children: "Implement a function to read a line from a file descriptor.",
  },
  {
    leftTitle: "Ft_Printf",
    rightTitle: "01-2025 (5 Weeks)",
    children:
      "Develop a custom printf function supporting various format specifiers.",
  },
  {
    leftTitle: "So_Long",
    rightTitle: "01-2025 (2 Month)",
    children: "Develop a simple 2D game using a grid-based map.",
  },
  {
    leftTitle: "Philosophers",
    rightTitle: "01-2025 (2 Month)",
    children: "Implement the dining philosophers problem using threads.",
  },
  {
    leftTitle: "Push_Swap",
    rightTitle: "02-2025 (2 Month)",
    children: "Sort a stack of numbers using a limited set of operations.",
  },
  {
    leftTitle: "Pipex",
    rightTitle: "02-2025 (2 Month)",
    children: "Implement a program that simulates the shell's pipe command.",
  },
  {
    leftTitle: "Minishell",
    rightTitle: "02-2025 (1 Month)",
    children: "Develop a simple Unix shell with basic functionalities.",
  },
  {
    leftTitle: "NetPractice",
    rightTitle: "02-2025 (2 Weeks)",
    children: "Practice networking concepts and commands.",
  },
  {
    leftTitle: "Cub3D",
    rightTitle: "03-2025 (1 Month)",
    children: "Develop a 3D game engine using raycasting.",
  },
  {
    leftTitle: "Webserv",
    rightTitle: "03-2025 (4 Month)",
    children: "Implement a basic HTTP server.",
  },
  {
    leftTitle: "ft_transcendence",
    rightTitle: "04-2025 (6 Month)",
    children:
      "Develop a full-stack web application using Docker, databases, authentication, WebSockets, and game development.",
  },
  {
    leftTitle: "internship",
    rightTitle: "04-2025 (6 Month)",
    children:
      "Apply your skills in a real-world setting through a professional internship.",
  },
];

export default function CursusSection() {
  return (
    <section className="relative top-0 left-0 flex flex-col mt-40  w-full h-fit px-15 bg-transparent border-line-color-soft">
      <div className="relative top-0 left-0 flex-1 bg-soft   cursus-card-corners-rounded">
        <div className="relative p-2 sm:p-4 md:p-8 cursus-card-corners-rounded">
          {/* fix collapsable dropdown animation*/}
          {/* <SmallCardBottomContainer /> */}
          <div className="absolute -translate-y-full top-[2px] left-0 flex items-center w-1/2 text-lg">
            <CardTopContainer />
            <div className="absolute inset-0 p-2 sm:p-4 md:p-8 flex justify-start items-start sm:items-center  text-xs/tight sm:text-md md:text-lg">
              <div className="w-1.5 h-1.5 bg-line-color-soft  sm:mr-1 mb-[calc(0.875rem/2-0.375rem/2)] hidden sm:inline-block"></div>
              <div className="w-1 h-1 border border-line-color-soft inline-block sm:mr-4 mb-[calc(0.875rem/2-0.25rem/2)]"></div>
              <div className="relative top-0 left-0 inline-block max-sm:text-line-color">
                001
              </div>
              <h1 className=" font-bold inline-block sm:pl-4 line-clamp-1 break-words">
                42 Cursus - A project-based learning platform
              </h1>
            </div>
          </div>
          <div className="flex bg-soft h-fit w-full rounded-sm md:rounded-xl lg:rounded-3xl overflow-hidden">
            <img
              src="/cursus.webp"
              alt=""
              className="w-full h-auto object-cover object-center"
            />
          </div>
        </div>
        <div className="p-2 sm:p-4 md:p-8 w-full h-auto text-base">
          <div className="flex justify-between items-center w-full pb-4 text-xl">
            <h2 className="">42 Cursus</h2>
            <span className=" ">Duration</span>
          </div>
          {[...Array(dropdownTestData.length)].map((_, index) => (
            <Dropdown key={index} {...dropdownTestData[index]} />
          ))}
        </div>
      </div>
    </section>
  );
}
