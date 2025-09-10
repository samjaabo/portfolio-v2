import clsx from "clsx";
import { SmallCardBottomContainer } from "../svgs";

export default function ProjectsSection() {
  return (
    <section className="relative top-0 left-0 flex flex-col mt-40  w-full h-fit px-5 bg-transparent border-line-color-soft">
      <div className="relative left-0 top-0 flex max-sm:flex-col w-full px-4 py-32 lg:px-8 gap-8 ">
        <div className="z-0 absolute h-full top-0 left-1/2 -translate-x-1/2 bg-gray/25 w-px hidden sm:block">
          <span className="hidden">real center line 1</span>
        </div>
        <div className="absolute -top-4 left-0 h-full bg-gray/25 w-px">
          <span className="hidden">left line</span>
        </div>
        <div className="absolute -top-4 right-0 h-full bg-gray/25 w-px">
          <span className="hidden">right line</span>
        </div>
        <div className="absolute top-0 -left-4 h-px bg-gray/25 w-[calc(100%+2rem)]">
          <span className="hidden">top line</span>
        </div>

        <div className="flex-1 flex flex-col gap-4 px-1 sm:px-8 lg:px-16">
          <div className="relative flex">
            <div className="absolute top-2 -left-4 w-1.5 h-1.5 bg-line-color-soft"></div>
            <div className="absolute top-[0.56275rem] -left-2 w-1 h-1 border border-line-color-soft"></div>
            WHY IS IT CONSIDERED
          </div>
          <h1 className="text-3xl font-bold">
            The Web Animation Ultimate Guide?
          </h1>
        </div>
        <div className="relative top-0 -left-8 h-px bg-gray/25 w-[calc(100%+4rem)] hidden max-sm:block">
          <span className="hidden">center vertical line</span>
        </div>
        <div className="flex-1 flex flex-col gap-4 px-1 sm:px-8 lg:px-16">
          <div className="relative flex">
            <div className="absolute top-2 -left-3 w-1.5 h-1.5 bg-line-color-soft"></div>
            {/* <div className="absolute top-[0.56275rem] -left-2 w-1 h-1 border border-line-color-soft"></div> */}
            5+ YEARS OF ANIMATIONS COMPILED IN ONE EXCLUSIVE COURSE
          </div>
          <p>
            You'll start by learning the basics of web animation, including the
            principles of motion, timeline animation, and the tools and
            techniques used by award-winning developers. You'll then move on to
            more advanced topics, such as creating animations with advanced
            timelines, text animations, smooth transitions, parallax animations,
            mouse interactions and much more.
          </p>

          <button className="btn w-fit">Get Started</button>
        </div>
      </div>
      <div className="relative top-0 left-0 w-full px-4 py-32 lg:px-24">
        <div className="z-0 absolute inset-0">
          <div className="z-0 absolute max-md:h-[calc(100%-16rem)] max-md:top-64 top-0 left-1/2 xl:left-2/5 -translate-x-1/2 h-full bg-gray/25 w-px md:hidden lg:block block">
            <span className="hidden">real center line 1</span>
          </div>
          <div className="z-0 absolute top-64 right-2/5 -translate-x-1/2 h-[calc(100%-16rem)] bg-gray/25 w-px hidden xl:block">
            <span className="hidden">real center line 2</span>
          </div>
          <div className="absolute top-64 left-[calc(25%-3rem)] xl:left-[calc(20%-3rem)] -translate-x-1/4 h-[calc(100%-16rem)] bg-gray/25 w-px block max-md:hidden">
            <span className="hidden">left center line</span>
          </div>
          <div className="absolute top-0 right-[calc(25%-3rem)] xl:right-[calc(20%-3rem)] -translate-x-1/4 h-full bg-gray/25 w-px block max-md:hidden">
            <span className="hidden">right center line</span>
          </div>

          <div className="absolute -top-4 left-0 h-[calc(100%+2rem)] bg-gray/25 w-px">
            <span className="hidden">left line</span>
          </div>
          <div className="absolute -top-4 right-0 h-[calc(100%+2rem)] bg-gray/25 w-px">
            <span className="hidden">right line</span>
          </div>
          <div className="absolute top-0 -left-4 h-px bg-gray/25 w-[calc(100%+2rem)]">
            <span className="hidden">top line</span>
          </div>
          <div className="absolute bottom-0 -left-4 h-px bg-gray/25 w-[calc(100%+2rem)]">
            <span className="hidden">bottom line</span>
          </div>
        </div>
        <div className="relative md:left-[calc(25%-3rem)] lg:left-0 top-0 mb-32 w-fit">
          <div className="w-1.5 h-1.5 bg-line-color-soft inline-block mr-1 mb-[calc(0.875rem/2-0.375rem/2)]"></div>
          <div className="w-1 h-1 border border-line-color-soft inline-block mr-4 mb-[calc(0.875rem/2-0.25rem/2)]"></div>
          <div className="inline-block">001</div>
          <h1 className="font-bold text-3xl">CHAPTERS INDEX</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-x-4 gap-y-32">
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
                You'll start by learning the basics of web animation, including
                the principles of motion, timeline animation, and the tools and
                techniques used by award-winning developers. You'll then move on
                to more advanced topics, such as creating animations with
                advanced timelines, text animations, smooth transitions,
                parallax animations, mouse interactions and much more.
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
  );
}
