import Link from "next/link";
import {
  CardBottomContainer,
  FuturisticButton,
  ListIcon,
  NavbarContainer,
  NavbarContainerRounded,
  WebsiteLogo,
} from "../svgs";
import BackgroundMusic from "../audio";
import { HiOutlineQueueList } from "react-icons/hi2";
import { LinkButton } from "../decryptedTextEffect";
import TypingText from "../typingAnimation";

export default function HeaderSection() {
  return (
    <section
      id="explore"
      className=" relative top-0 left-0 flex flex-col items-center justify-start h-fit bg-white px-2 lg:px-8 w-full"
    >
      <div className="relative  top-0 left-0  flex items-center justify-center bg-soft w-full h-fit rounded-t-xl mt-2 lg:mt-8">
        <NavbarContainer />
        <NavbarContainerRounded />
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-9 w-fit h-8 pt-1.5 flex items-center justify-center gap-2 lg:gap-8">
          <LinkButton variant="link" href="#explore">
            explore
          </LinkButton>
          <LinkButton variant="link" href="#work">
            Work
          </LinkButton>
          <LinkButton variant="link" href="#about">
            About
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
          <LinkButton href="#about">login</LinkButton>
          <LinkButton href="#about">get started</LinkButton>

          {/* for smart devices */}
          <button className="lg:hidden inline-block cursor-pointer">
            <HiOutlineQueueList className="w-8 h-8" />
          </button>
        </div>
        <div className="relative z-8 w-full flex lg:flex-row flex-col items-start justify-between p-8 pt-22 lg:p-16 lg:pt-32">
          <div className="lg:max-w-xs z-20">
            <TypingText text="THE ONLY COURSE YOU WILL NEED TO MASTER WEB ANIMATIONS" />
            {/* THE ONLY COURSE YOU WILL NEED TO MASTER WEB ANIMATIONS */}
          </div>
          <div className="z-20 lg:max-w-xs max-lg:ml-auto  flex gap-2 items-baseline">
            {/* <div className="h-2 w-2 aspect-square rounded-0 border border-line-color-soft animate-ping"></div> */}
            <p className="">New-learner Offer 989.00 dh 759.00 dh</p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit">
        <div className="relative z-1 gap-4 lg:gap-8 flex flex-col lg:flex-row lg:items-stretch lg:justify-start items-center justify-center p-4 lg:p-8 bg-soft w-full flex-1 rounded-bl-xl">
          <div className="flex w-full h-full flex-col gap-8 items-start justify-start flex-1 order-1 max-lg:order-2">
            <div className="flex w-full h-full flex-1 flex-col gap-8 lg:max-w-xl">
              <h2 className="text-3xl font-bold">
                New-learner Offer 988.00 dh 758.00 dh Mastering Web Animations
              </h2>
              <p className="">
                Whether you're a beginner or an experienced developer, the
                course will guide you through, principles of motion, timeline
                animation, tools, and techniques used by award-winning
                developers.
              </p>
              <LinkButton href="#about">Get Started</LinkButton>

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
          <div className="flex-1 order-2 max-lg:order-1 max-lg:w-full items-stretch max-h-full">
            <div className=" w-full h-full bg-soft p-8 rounded-xl  border border-line-color-soft flex items-center justify-center">
              <img
                src="/futuristic/ui-ux.png"
                alt=""
                className=" w-full h-full bg-center object-contain"
              />
            </div>
          </div>
        </div>
        <CardBottomContainer></CardBottomContainer>
      </div>
    </section>
  );
}
