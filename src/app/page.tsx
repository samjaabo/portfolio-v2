import {
  CardBottomContainer,
  FullCard,
  ListIcon,
  NavbarContainer,
  NavbarContainerRounded,
  ProfileImageContainer,
  WebsiteLogo,
} from "@/components/futuristic/svgs";
import clsx from "clsx";
import Link from "next/link";

export default function TestPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen h-screen bg-white px-2 md:px-8 w-full max-w-[120rem] mx-auto">
      <div className="bg-warning w-full text-center ">
        sorry we are in development
      </div>
      <div
        className={clsx(
          "relative flex h-1/2 w-1/2 bg-soft",
          "before:w-1/2 before:aspect-square before:content['*'] before:absolute before:-top-1/2 before:translate-y-1/2 before:left-0 before:rotate-0",
          " before:bg-bg"
        )}
      ></div>
    </main>
  );
}
