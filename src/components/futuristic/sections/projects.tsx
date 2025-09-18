import clsx from "clsx";
import { NetLines, SmallCardBottomContainer } from "../svgs";
import { FuturisticCard } from "../ui/card";
import { FuturisticCardLines } from "../ui/card-lines";

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative top-0 left-0 flex flex-col mt-40  w-full h-fit px-5 bg-transparent border-line-color-soft"
    >
      <div className="relative left-0 top-0 flex max-sm:flex-col w-full px-4 py-32 lg:px-8 gap-8 max-sm:gap-32 ">
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
            <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-line-color-soft"></div>
            <div className="absolute top-[0.56275rem] left-4 w-1 h-1 border border-line-color-soft"></div>
            <div className="pl-8">SHOWCASING</div>
          </div>
          <h1 className="text-3xl font-bold">
            Cutting-Edge Web Development Projects
          </h1>
        </div>
        <div className="relative top-0 -left-8 h-px bg-gray/25 w-[calc(100%+4rem)] hidden max-sm:block">
          <span className="hidden">center vertical line</span>
        </div>
        <div className="flex-1 flex flex-col gap-4 px-1 sm:px-8 lg:px-16">
          <div className="relative flex">
            <div className="absolute top-2 -left-3 w-1.5 h-1.5 bg-line-color-soft"></div>
            {/* <div className="absolute top-[0.56275rem] -left-2 w-1 h-1 border border-line-color-soft"></div> */}
            1+ YEAR CRAFTING MODERN, RESPONSIVE, AND SCALABLE WEBSITES
          </div>
          <p>
            I specialize in building high-performance web applications using
            Next.js, Supabase, TailwindCSS, and chadcn UI. Each project is
            crafted with attention to detail, clean code, and seamless user
            experiences. From dynamic dashboards to interactive landing pages, I
            bring designs to life with precision and creativity.
          </p>

          <button className="btn w-fit">View My Work</button>
        </div>
      </div>
      <div className="relative top-0 left-0 w-full px-4 py-32 lg:px-24">
        <FuturisticCardLines />
        <div className="relative md:left-[calc(25%-3rem)] lg:left-0 top-0 mb-32 w-fit">
          <div className="w-1.5 h-1.5 bg-line-color-soft inline-block mr-1 mb-[calc(0.875rem/2-0.375rem/2)]"></div>
          <div className="w-1 h-1 border border-line-color-soft inline-block mr-4 mb-[calc(0.875rem/2-0.25rem/2)]"></div>
          <div className="inline-block">000</div>
          <h1 className="font-bold text-3xl">Projects Showcase</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-x-4 gap-y-32">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((_, i) => (
            <FuturisticCard key={i} id={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
