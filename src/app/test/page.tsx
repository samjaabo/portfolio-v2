import {
  FullCard,
  ListIcon,
  NavbarContainer,
  NavbarContainerRounded,
  ProfileImageContainer,
  WebsiteLogo,
} from "@/components/futuristic/svgs";
import Link from "next/link";

export default function TestPage() {
  return (
    <main className="relative flex items-start justify-center min-h-screen h-full bg-white px-2 md:px-8">
      <div className="relative flex items-center justify-center bg-soft w-full flex-1 rounded-xl mt-2 md:mt-8">
        <NavbarContainer></NavbarContainer>
        <nav className="absolute inset-0 z-20 w-fit h-8 mx-auto pt-1.5 flex items-center justify-center text-sm md:text-lg gap-2 md:gap-8">
          <button className="hidden md:inline-block cursor-pointer text-color ">
            Home
          </button>
          <button className="hidden md:inline-block cursor-pointer text-color">
            About
          </button>
          <button className="hidden md:inline-block cursor-pointer text-color">
            Contact
          </button>
        </nav>
        <Link className="absolute m-4 h-8 top-0 left-0 z-1" href={"/test"}>
          <WebsiteLogo></WebsiteLogo>
        </Link>
        <div className="absolute m-4 gap-4 top-0 right-0 z-10 flex justify-between">
          <Link className="btn hidden md:inline-block" href={"/test"}>
            signup
          </Link>
          <Link className="btn hidden md:inline-block" href={"/test"}>
            login
          </Link>
          <button className="md:hidden inline-block cursor-pointer">
            <ListIcon></ListIcon>
          </button>
        </div>
        <div className="w-full flex md:flex-row flex-col items-start justify-between p-4 pt-22 lg:p-16  ">
          <div className="md:max-w-xs">
            THE ONLY COURSE YOU WILL NEED TO MASTER WEB ANIMATIONS.
          </div>
          <div className="md:max-w-xs">
            New-learner Offer 💎⚡ 989.00 dh 759.00 dh
          </div>
        </div>
      </div>
    </main>
  );
}
