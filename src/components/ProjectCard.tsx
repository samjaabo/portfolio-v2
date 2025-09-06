import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <div className="project-card bg-white dark:bg-dark-content/5 border border-gray-200 dark:border-gray-800">
      <div className="relative h-48 sm:h-60 w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={projectUrl}
          className="inline-flex items-center text-primary font-medium"
        >
          View Project
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
