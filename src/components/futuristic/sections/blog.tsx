import { ProfileImageContainer } from "../svgs";

export default function BlogSection() {
  return (
    <section className="relative top-0 left-0 flex flex-col mt-40  w-full h-fit px-5 bg-transparent border-line-color-soft">
      <div className="relative left-0 top-0 flex max-sm:flex-col w-full px-4 py-32 lg:px-8 gap-8 ">
        <div className="flex-1 flex flex-col items-center justify-center gap-4 px-1 sm:px-8 lg:px-16">
          <div className="absolute -top-4 left-0 h-full bg-gray/25 w-px">
            <span className="hidden">left line</span>
          </div>
          <div className="absolute -top-4 right-0 h-full bg-gray/25 w-px">
            <span className="hidden">right line</span>
          </div>
          <div className="absolute top-0 -left-4 h-px bg-gray/25 w-[calc(100%+2rem)]">
            <span className="hidden">top line</span>
          </div>
          <div className="relative top-0 left-0 flex">
            <div className="absolute top-2 -left-4 w-1.5 h-1.5 bg-line-color-soft"></div>
            <div className="absolute top-[0.56275rem] -left-2 w-1 h-1 border border-line-color-soft"></div>
            WHY IS IT CONSIDERED
          </div>
          <h1 className="text-3xl font-bold">
            The Web Animation Ultimate Guide?
          </h1>
          <p className="max-w-lg text-center">
            You'll start by learning the basics of web animation, including the
            principles of motion, timeline animation, and the tools and
            techniques used by award-winning developers. You'll then move on to
            more advanced topics, such as creating animations with advanced
            timelines, text animations, smooth transitions, parallax animations,
            mouse interactions and much more.
          </p>
        </div>
      </div>
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
        <div className="absolute bottom-4 -left-4 h-px bg-gray/25 w-[calc(100%+2rem)]">
          <span className="hidden">bottom line</span>
        </div>

        <div className="flex-1 h-fit flex flex-col sm:gap-4 px-1 sm:px-8 lg:px-16">
          <div className="relative flex">
            <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-line-color-soft"></div>
            <div className="absolute top-[0.56275rem] left-4 w-1 h-1 border border-line-color-soft"></div>
            <div className="pl-8"> WHY IS IT CONSIDERED</div>
          </div>
          <h1 className="text-3xl font-bold">
            The Web Animation Ultimate Guide?
          </h1>
          <p>
            You'll start by learning the basics of web animation, including the
            principles of motion, timeline animation, and the tools and
            techniques used by award-winning developers.
          </p>
          <p>
            You'll then move on to more advanced topics, such as creating
            animations with advanced timelines, text animations, smooth
            transitions, parallax animations, mouse interactions and much more.
          </p>
        </div>
        <div className="relative top-0 -left-8 h-px bg-gray/25 w-[calc(100%+4rem)] hidden max-sm:block max-sm:my-32">
          <span className="hidden">center vertical line</span>
        </div>
        <div className="overflow-visible flex-1 items-stretch justify-center flex flex-col gap-4 px-1 sm:px-8 lg:px-16  h-fit">
          <ProfileImageContainer />
        </div>
      </div>
    </section>
  );
}
