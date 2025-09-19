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
import Footer from "@/components/futuristic/sections/footer";
import { LiaCodeSolid } from "react-icons/lia";
import Bg360 from "@/components/futuristic/ui/photoSphereViewer";

export default function TestPage() {
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen h-auto bg-white w-full max-w-[120rem] mx-auto">
      {/* <div className="bg-warning w-full text-center text-soft px-2 lg:px-8 ">
        <LiaCodeSolid className="inline-block" /> sorry this website is under
        development
      </div> */}
      <Drag />
      <HeaderSection />
      <ProjectsSection />
      {/* <CursusSection /> */}
      <BlogSection />
      <Footer />
      {/* <div className="md:block hidden fixed bottom-[calc(10px_+_theme(space.8))] right-[calc(10px_+_theme(space.8))] w-8 h-8 rounded-full bg-bg/50 border border-bg"></div> */}
    </main>
  );
}
