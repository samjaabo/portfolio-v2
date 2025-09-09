import {
  CardBottomContainer,
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
    <main className="relative flex flex-col items-center justify-start min-h-screen h-auto bg-white px-2 md:px-8 w-full max-w-[120rem] mx-auto">
      <div className="relative flex items-center justify-center bg-soft w-full h-fit rounded-t-xl mt-2 md:mt-8">
        <NavbarContainer></NavbarContainer>
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-9 w-fit h-8 pt-1.5 flex items-center justify-center text-sm md:text-lg gap-2 md:gap-8">
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
        <Link className="absolute m-4 h-8 top-0 left-0 z-10" href={"/test"}>
          <WebsiteLogo></WebsiteLogo>
        </Link>
        <div className="absolute m-4 gap-4 lg:gap-8 top-0 right-0 z-10 flex justify-between">
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
        <div className="relative z-8 w-full flex md:flex-row flex-col items-start justify-between p-8 pt-22 lg:p-16 lg:pt-32">
          <div className="md:max-w-xs z-20">
            THE ONLY COURSE YOU WILL NEED TO MASTER WEB ANIMATIONS
          </div>
          <div className="z-20 md:max-w-xs max-md:ml-auto  flex gap-2 items-baseline">
            <div className="h-2 w-2 rounded-full bg-warning  animate-pulse"></div>
            <p className="">New-learner Offer 989.00 dh 759.00 dh</p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit">
        <div className="relative z-1 gap-8 flex flex-col md:flex-row md:items-stretch md:justify-start items-center justify-center p-8 bg-soft w-full flex-1 rounded-bl-xl">
          <div className="flex w-full h-full flex-col gap-8 items-start justify-start flex-1 order-1 max-md:order-2">
            <div className="flex w-full h-full flex-1 flex-col gap-8 md:max-w-xl">
              <h2 className="text-2xl font-bold">
                New-learner Offer 988.00 dh 758.00 dh Mastering Web Animations
              </h2>
              <p className="">
                Whether you're a beginner or an experienced developer, the
                course will guide you through, principles of motion, timeline
                animation, tools, and techniques used by award-winning
                developers.
              </p>
              <button className="btn text-xl">Enroll Now</button>
              <div className="flex gap-8">
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
              </div>
            </div>
          </div>
          <div className="flex-1 order-2 max-md:order-1 max-md:w-full ">
            <div className=" w-full min-h-96 h-full bg-color p-8 rounded-xl text-white">
              hello
            </div>
          </div>
        </div>
        <CardBottomContainer></CardBottomContainer>
      </div>
      <section></section>
      <div className="w-full h-96"></div>
    </main>
  );
}
