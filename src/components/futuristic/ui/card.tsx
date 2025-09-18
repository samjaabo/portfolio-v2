import clsx from "clsx";
import { SmallCardBottomContainer } from "../svgs";
const projects = [
  {
    title: "Interactive Dashboard",
    description:
      "Built a real-time analytics dashboard using Next.js and Supabase. Includes dynamic charts, responsive layouts, and optimized performance for enterprise data.",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Developed a full-featured online store with TailwindCSS and chadcn UI. Integrated payment gateway, product catalog, and smooth user interactions.",
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and implemented a personal portfolio with Next.js. Focused on animations, responsive design, and fast load times.",
  },
  {
    title: "Collaboration Tool",
    description:
      "Created a project management tool for teams with real-time updates, notifications, and secure authentication using Supabase.",
  },
  {
    title: "Landing Page Animations",
    description:
      "Crafted multiple interactive landing pages with advanced animations, parallax effects, and modern UI patterns.",
  },
  {
    title: "Blog Platform",
    description:
      "Built a fast, SEO-friendly blogging platform with Markdown support, dynamic routing, and intuitive content management.",
  },
  {
    title: "Internal Admin Panel",
    description:
      "Developed a scalable admin panel for internal use with dashboards, charts, and user management tools.",
  },
  {
    title: "Custom UI Component Library",
    description:
      "Created reusable, accessible UI components using TailwindCSS and chadcn UI for faster project development.",
  },
];
export function FuturisticCard({ id }: { id: number }) {
  const project = projects[id % projects.length];
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
        <h1 className="font-bold text-3xl">{project.title}</h1>
      </div>
      <p className=" line-clamp-8">{project.description}</p>
      <SmallCardBottomContainer />
    </div>
  );
}
