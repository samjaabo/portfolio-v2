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

export default function TestPage() {
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen h-auto bg-white w-full max-w-[120rem] mx-auto">
      <HeaderSection />
      <ProjectsSection />
      <div className="mt-32 h-96 w-full bg-gray"></div>
    </main>
  );
}
