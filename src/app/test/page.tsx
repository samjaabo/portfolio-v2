import {
  CardBottomContainer,
  FullCard,
  ListIcon,
  NavbarContainer,
  NavbarContainerRounded,
  ProfileImageContainer,
  SmallCardBottomContainer,
  WebsiteLogo,
} from "@/components/futuristic/svgs";
import Link from "next/link";
import clsx from "clsx";
import HeaderSection from "@/components/futuristic/sections/header";
import ProjectsSection from "@/components/futuristic/sections/projects";
import CursusSection from "@/components/futuristic/sections/cursus";
import Drag from "@/components/futuristic/followPointer";
import BlogSection from "@/components/futuristic/sections/blog";

export default function TestPage() {
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen h-auto bg-white w-full max-w-[120rem] mx-auto">
      {/* <Drag />
      <HeaderSection />
      <ProjectsSection /> */}
      <CursusSection />
      <BlogSection />
      {/* <div className="md:block hidden fixed bottom-[calc(10px_+_theme(space.8))] right-[calc(10px_+_theme(space.8))] w-8 h-8 rounded-full bg-bg/50 border border-bg"></div> */}
      <div className="mt-32 h-96 w-full bg-gray"></div>
    </main>
  );
}
