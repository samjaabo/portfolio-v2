"use client";

import Link from "next/link";
import {
  CardBottomContainer,
  NavbarContainer,
  NavbarContainerRounded,
  WebsiteLogo,
} from "../svgs";
import BackgroundMusic from "../audio";
import { LinkButton } from "../decryptedTextEffect";
import { TbMenu4 } from "react-icons/tb";
import Bg360 from "../ui/photoSphereViewer";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";

import { SiFramer } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { useEffect, useState } from "react";

export default function HeaderSection() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const rotate = useTransform(
    scrollYProgress,
    (v) => ((v % 0.1) / 0.1) * 360.0
  );

  const HandleMobileMenuClick = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };

  useEffect(() => {
    document.body.classList.toggle("max-lg:overflow-hidden", mobileMenuIsOpen);
  }, [mobileMenuIsOpen]);

  return (
    <section
      id="explore"
      className="relative top-0 left-0 flex flex-col items-center justify-start h-fit bg-white px-1  sm:px-5 w-full"
    >
      <div
        className={clsx(
          "z-90 fixed top-0 left-1/2 -translate-x-1/2 h-1 w-full max-w-[120rem] xl:px-5 bg-transparent pointer-events-none"
        )}
      >
        <motion.div
          className={clsx("relative top-0 left-0 h-full bg-bg/50 rounded-full")}
          style={{ width }}
        />
      </div>
      {/* <Bg360 /> */}
      <div className="overflow-hidden relative  top-0 left-0  flex items-center justify-center  bg-soft w-full h-fit rounded-t-xl mt-2 lg:mt-8">
        <NavbarContainer />
        <NavbarContainerRounded />
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-9 w-fit h-8 pt-1.5 flex items-center justify-center gap-2 lg:gap-8">
          <LinkButton variant="link" href="#explore">
            Home
          </LinkButton>
          <LinkButton variant="link" href="#work">
            Projects
          </LinkButton>
          <LinkButton variant="link" href="#about">
            About Me
          </LinkButton>
        </nav>
        <Link
          className="absolute m-4 h-8 top-0 left-0 z-10 flex gap-6"
          href={"/test"}
        >
          <WebsiteLogo></WebsiteLogo>
          <BackgroundMusic />
        </Link>
        <div className="absolute m-4 gap-4 top-0 right-0 z-10 flex justify-between">
          <Link
            className="btn-secondary lg:inline-block hidden"
            href="#contact"
          >
            Contact
          </Link>
          <Link className="btn  lg:inline-block hidden" href="#work">
            View Work
          </Link>

          {/* for smart devices */}
          {!mobileMenuIsOpen && (
            <button
              onClick={HandleMobileMenuClick}
              className="lg:hidden inline-block cursor-pointer  h-8 w-auto my-auto"
            >
              [/ Menu]
            </button>
          )}
          {mobileMenuIsOpen && (
            <div className="z-999 fixed blcok lg:hidden inset-0 w-full h-full p-1 sm:px-5 py-2  bg-white ">
              <div className="w-full h-full flex items-start justify-between rounded-xl p-4 bg-soft">
                <div className="h-full w-fit">
                  <Link className="" href={"/test"}>
                    <WebsiteLogo></WebsiteLogo>
                  </Link>
                </div>
                <div className="h-full w-fit">
                  <button
                    onClick={HandleMobileMenuClick}
                    className="lg:hidden inline-block cursor-pointer h-8 w-auto my-auto "
                  >
                    [/ Close]
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative z-8 w-full flex lg:flex-row flex-col items-start justify-between p-8 pt-22 lg:p-16 lg:pt-32 max-lg:pb-0">
          <div className="z-20 lg:max-w-xs max-lg:ml-auto  flex gap-2 items-baseline">
            {/* <div className="h-2 w-2 aspect-square rounded-0 border border-line-color-soft animate-ping"></div> */}
            <p className="">
              Full-Stack Developer & UI/UX Designer building modern web apps
              where clean code meets elegant interfaces.
            </p>
          </div>
          <div className="z-20 lg:max-w-xs max-lg:ml-auto  flex gap-2 items-baseline">
            {/* <div className="h-2 w-2 aspect-square rounded-0 border border-line-color-soft animate-ping"></div> */}
            <p className="">
              Specialized in Next.js, React, Tailwind, and Supabase creating
              scalable, fast, and seamless digital experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit">
        <div className="relative z-1 gap-4 lg:gap-8 flex flex-col lg:flex-row lg:items-stretch lg:justify-start items-center justify-center p-4 lg:p-8 bg-soft w-full flex-1 rounded-bl-xl">
          <div className="flex w-full h-full flex-col gap-8 items-start justify-start flex-1 order-1 max-lg:order-2">
            <div className="flex w-full h-full flex-1 flex-col gap-8 lg:max-w-xl">
              <h2 className="text-3xl font-bold">
                Crafting Modern Web Experiences That Engage & Perform
              </h2>
              <p className="">
                I turn ideas into functional, visually compelling applications.
                From design to deployment, I focus on user-centered UI/UX, clean
                architecture, and scalable full-stack development ensuring every
                project looks great and runs smoothly.
              </p>

              <Link className="btn-secondary" href="#about">
                Explore My Projects
              </Link>
            </div>
          </div>
          <div className="flex-1 order-2 max-lg:order-1 max-lg:w-full items-stretch ">
            <div className="relative top-0 left-0 bg-bg text-soft max-h-full overflow-hidden w-full h-full rounded-xl  flex items-start justify-start">
              {/* <img
                src="/futuristic/3d-imgs/Scifi_Concept_Art.jpg"
                alt="Scifi_Concept_Art"
                className="object-cover rounded-xl w-full h-full"
              /> */}
              {/* <div className="absolute w-16 h-16 bottom-0 left-0 rotate-45 -translate-x-1/2 translate-y-1/2 bg-soft"></div> */}
              <div className="grid lg:grid-cols-1 grid-cols-2 gap-4 p-4 pb-14">
                <div>
                  <h3 className="text-inherit">Frontend</h3>
                  <p>React, Next.js, TypeScript, TailwindCSS, Supabase</p>
                </div>
                <div>
                  <h3 className="text-inherit">UI/UX</h3>
                  <p>Figma, Wireframing, Prototyping, Accessibility</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 w-full grid lg:grid-cols-7 grid-cols-7 gap-4">
                {/* <h3 className="text-inherit">UI/UX</h3> */}
                <SiTypescript className="w-5 h-5 mx-auto" />
                <SiReact className="w-5 h-5 mx-auto" />
                <SiNextdotjs className="w-5 h-5 mx-auto" />
                <SiTailwindcss className="w-5 h-5 mx-auto" />
                <RiSupabaseFill className="w-5 h-5 mx-auto" />
                <SiFramer className="w-5 h-5 mx-auto" />
                <SiFigma className="w-5 h-5 mx-auto" />
              </div>

              {/* <Bg360 /> */}
            </div>
          </div>
        </div>
        <CardBottomContainer></CardBottomContainer>
      </div>
    </section>
  );
}
