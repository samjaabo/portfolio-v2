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

export default function TestPage() {
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen h-auto bg-white w-full max-w-[120rem] mx-auto">
      <section className=" relative flex flex-col items-center justify-start h-fit bg-white px-2 lg:px-8 w-full">
        <div className="relative flex items-center justify-center bg-soft w-full h-fit rounded-t-xl mt-2 lg:mt-8">
          <NavbarContainer></NavbarContainer>
          <NavbarContainerRounded></NavbarContainerRounded>
          <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-9 w-fit h-8 pt-1.5 flex items-center justify-center text-sm lg:text-lg gap-2 lg:gap-8">
            <button className="hidden lg:inline-block cursor-pointer text-color ">
              Home
            </button>
            <button className="hidden lg:inline-block cursor-pointer text-color">
              About
            </button>
            <button className="hidden lg:inline-block cursor-pointer text-color">
              Contact
            </button>
          </nav>
          <Link className="absolute m-4 h-8 top-0 left-0 z-10" href={"/test"}>
            <WebsiteLogo></WebsiteLogo>
          </Link>
          <div className="absolute m-4 gap-4 lg:gap-8 top-0 right-0 z-10 flex justify-between">
            <Link className="btn hidden lg:inline-block" href={"/test"}>
              signup
            </Link>
            <Link className="btn hidden lg:inline-block" href={"/test"}>
              login
            </Link>
            <button className="lg:hidden inline-block cursor-pointer">
              <ListIcon></ListIcon>
            </button>
          </div>
          <div className="relative z-8 w-full flex lg:flex-row flex-col items-start justify-between p-8 pt-22 lg:p-16 lg:pt-32">
            <div className="lg:max-w-xs z-20">
              THE ONLY COURSE YOU WILL NEED TO MASTER WEB ANIMATIONS
            </div>
            <div className="z-20 lg:max-w-xs max-lg:ml-auto  flex gap-2 items-baseline">
              <div className="h-2 w-2 rounded-full border border-warning  animate-ping"></div>
              <p className="">New-learner Offer 989.00 dh 759.00 dh</p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-fit">
          <div className="relative z-1 gap-4 lg:gap-8 flex flex-col lg:flex-row lg:items-stretch lg:justify-start items-center justify-center p-4 lg:p-8 bg-soft w-full flex-1 rounded-bl-xl">
            <div className="flex w-full h-full flex-col gap-8 items-start justify-start flex-1 order-1 max-lg:order-2">
              <div className="flex w-full h-full flex-1 flex-col gap-8 lg:max-w-xl">
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
                <div className="flex gap-2 lg:gap-8">
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
            <div className="flex-1 order-2 max-lg:order-1 max-lg:w-full ">
              <div className=" w-full min-h-96 h-full bg-color p-8 rounded-xl text-white">
                hello
              </div>
            </div>
          </div>
          <CardBottomContainer></CardBottomContainer>
        </div>
      </section>
      <section className="flex flex-col mt-40  w-full h-fit -px-8 border-y border-line-color">
        <div className="flex w-full px-4 py-32 lg:px-8 ">
          <div className="flex-1 flex flex-col gap-4 px-8 lg:px-16">
            <div className="relative flex">
              <div className="absolute top-2 -left-4 w-1.5 h-1.5 bg-line-color-soft"></div>
              <div className="absolute top-[0.56275rem] -left-2 w-1 h-1 border border-line-color-soft"></div>
              WHY IS IT CONSIDERED§
            </div>
            <h1 className="text-3xl font-bold">
              The Web Animation Ultimate Guide?
            </h1>
          </div>
          <div className="flex-1 flex flex-col gap-4 px-8 lg:px-16">
            <div className="relative flex">
              <div className="absolute top-2 -left-3 w-1.5 h-1.5 bg-line-color-soft"></div>
              {/* <div className="absolute top-[0.56275rem] -left-2 w-1 h-1 border border-line-color-soft"></div> */}
              5+ YEARS OF ANIMATIONS COMPILED IN ONE EXCLUSIVE COURSE
            </div>
            <p>
              You'll start by learning the basics of web animation, including
              the principles of motion, timeline animation, and the tools and
              techniques used by award-winning developers. You'll then move on
              to more advanced topics, such as creating animations with advanced
              timelines, text animations, smooth transitions, parallax
              animations, mouse interactions and much more.
            </p>

            <button className="btn w-fit">Get Started</button>
          </div>
        </div>
        <div className=" w-full px-4 py-32 lg:px-24 border-t">
          <div className="mb-32">
            <div className="w-1.5 h-1.5 bg-line-color-soft inline-block mr-1 mb-[calc(0.875rem/2-0.375rem/2)]"></div>
            <div className="w-1 h-1 border border-line-color-soft inline-block mr-4 mb-[calc(0.875rem/2-0.25rem/2)]"></div>
            <div className="inline-block">001</div>
            <h1 className="font-bold text-3xl">CHAPTERS INDEX</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-x-4 gap-y-12 lg:gap-y-32">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
              <div
                key={i}
                className={clsx(
                  "relative w-full h-fit flex flex-col gap-4 p-8 bg-soft rounded-t-xl rounded-bl-xl max-h-96",
                  i % 2 === 0
                    ? "md:mb-24 lg:mb-28 xl:mb-32 "
                    : "md:mt-24 lg:mt-28 xl:mt-32 "
                )}
              >
                <div className="">
                  <div className="w-1.5 h-1.5 bg-line-color-soft inline-block mr-1 mb-[calc(0.875rem/2-0.375rem/2)]"></div>
                  <div className="w-1 h-1 border border-line-color-soft inline-block mr-4 mb-[calc(0.875rem/2-0.25rem/2)]"></div>
                  <div className="inline-block">
                    {String(i + 1).padStart(3, "0")}
                  </div>
                  <h1 className="font-bold text-3xl">CHAPTERS INDEX</h1>
                </div>
                <p className=" line-clamp-8">
                  You'll start by learning the basics of web animation,
                  including the principles of motion, timeline animation, and
                  the tools and techniques used by award-winning developers.
                  You'll then move on to more advanced topics, such as creating
                  animations with advanced timelines, text animations, smooth
                  transitions, parallax animations, mouse interactions and much
                  more.
                  {i === 1 &&
                    `##### You'll start by learning the basics of web animation,
                  including the principles of motion, timeline animation, and
                  the tools and techniques used by award-winning developers.
                  You'll then move on to more advanced topics, such as creating
                  animations with advanced timelines, text animations, smooth
                  transitions, parallax animations, mouse interactions and much
                  more.`}
                </p>
                <SmallCardBottomContainer></SmallCardBottomContainer>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
