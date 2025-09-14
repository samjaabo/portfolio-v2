import clsx from "clsx";
import { SmallCardBottomContainer } from "../svgs";

export function FuturisticCard({ id }: { id: number }) {
  return (
    <div
      className={clsx(
        "relative w-full h-fit flex flex-col gap-4 p-8 bg-soft rounded-t-xl rounded-bl-xl max-h-96",
        id % 2 === 0
          ? "md:mb-24 lg:mb-28 xl:mb-32 "
          : "md:mt-24 lg:mt-28 xl:mt-32 "
      )}
    >
      <div className="">
        <div className="w-1.5 h-1.5 bg-line-color-soft inline-block mr-1 mb-[calc(0.875rem/2-0.375rem/2)]"></div>
        <div className="w-1 h-1 border border-line-color-soft inline-block mr-4 mb-[calc(0.875rem/2-0.25rem/2)]"></div>
        <div className="inline-block">{String(id + 1).padStart(3, "0")}</div>
        <h1 className="font-bold text-3xl">CHAPTERS INDEX</h1>
      </div>
      <p className=" line-clamp-8">
        You'll start by learning the basics of web animation, including the
        principles of motion, timeline animation, and the tools and techniques
        used by award-winning developers. You'll then move on to more advanced
        topics, such as creating animations with advanced timelines, text
        animations, smooth transitions, parallax animations, mouse interactions
        and much more.
      </p>
      <SmallCardBottomContainer />
    </div>
  );
}
