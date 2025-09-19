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

export default function HeaderSection() {
  return (
    <section
      id="explore"
      className=" relative top-0 left-0 flex flex-col items-center justify-start h-fit bg-white px-2 lg:px-8 w-full"
    >
      {/* <Bg360 /> */}
      <div className="overflow-hidden relative  top-0 left-0  flex items-center justify-center bg-soft w-full h-fit rounded-t-xl mt-2 lg:mt-8">
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
        <div className="absolute m-4 gap-4 lg:gap-8 top-0 right-0 z-10 flex justify-between">
          <LinkButton href="#about">Contact</LinkButton>
          <LinkButton href="#about">View Work</LinkButton>

          {/* for smart devices */}
          <button className="lg:hidden inline-block cursor-pointer">
            <TbMenu4 className="w-8 h-8 border rounded-full" />
          </button>
        </div>
        <div className="relative z-8 w-full flex lg:flex-row flex-col items-start justify-between p-8 pt-22 lg:p-16 lg:pt-32">
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

              <LinkButton href="#about">Explore My Projects</LinkButton>

              {/* <div className="flex gap-2 lg:gap-8">
                <ol>
                  <li>
                    <h2 className="text-xl font-bold">New-learner</h2>
                  </li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  <li>Feature 4</li>
                  <li>Feature 5</li>
                </ol>
                <ol>
                  <li>
                    <h2 className="text-xl font-bold">Mastering Web</h2>
                  </li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  <li>Feature 4</li>
                  <li>Feature 5</li>
                </ol>
              </div> */}
            </div>
          </div>
          <div className="flex-1 order-2 max-lg:order-1 max-lg:w-full items-stretch ">
            <div className="max-h-full overflow-hidden w-full h-full bg-soft/0 rounded-xl  flex items-center justify-center">
              {/* <img
                src="/futuristic/ui-ux-2.png"
                alt=""
                className="object-cover rounded-xl w-full h-full"
              /> */}

              <Bg360 />
            </div>
          </div>
        </div>
        <CardBottomContainer></CardBottomContainer>
      </div>
    </section>
  );
}
