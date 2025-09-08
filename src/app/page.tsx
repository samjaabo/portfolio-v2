"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Card, { CardProps } from "@/components/ui/card";

// Component for animated text reveal
const TextReveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

// Social link component
const SocialLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative text-sm text-text-secondary hover:text-primary transition-colors duration-300 group hover-underline"
    >
      {label}
    </a>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  index: number;
}

// Project card component
const ProjectCard = ({
  title,
  description,
  tags,
  link,
  image,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group project-card"
    >
      <a
        href={link}
        className="block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="overflow-hidden mb-4 bg-dark">
          <div className="relative aspect-[16/9] transform group-hover:scale-105 transition-transform duration-500">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-text-secondary text-sm mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs text-text-secondary border border-border px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </a>
    </motion.div>
  );
};

// Main component
export default function Home() {
  const [activeSection, setActiveSection] = useState("intro");
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle intersection observer for sections
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const projects: CardProps[] = [
    {
      title: "Dashboard Design System",
      subtitle: "UI/UX / Design System / Figma",
      imgSrc: "/project1.webp",
      href: "#",
    },
    {
      title: "E-commerce Mobile App",
      subtitle: "Mobile / UI/UX / Prototyping",
      imgSrc: "/project2.webp",
      href: "#",
    },
    {
      title: "Finance Platform Redesign",
      subtitle: "Web App / UI/UX / Dashboard",
      imgSrc: "/project3.webp",
      href: "#",
    },
    {
      title: "Health Tracking Application",
      subtitle: "Mobile / Data Viz / UI/UX",
      imgSrc: "/project1.webp",
      href: "#",
    },
  ];

  return (
    <>
      {/* Main container */}
      <div className="relative min-h-screen bg-bg text-text">
        <svg
          preserveAspectRatio="none"
          className="absolute inset-0  w-full h-full pointer-events-none bg-cover bg-center"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          // xmlnsSvgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 700 700"
          width="700"
          height="700"
        >
          <defs>
            <linearGradient
              gradientTransform="rotate(-150, 0.5, 0.5)"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="gggrain-gradient2"
            >
              <stop stopColor="#B0235F" stopOpacity="1" offset="-0%"></stop>
              <stop
                stopColor="rgba(255,255,255,0)"
                stopOpacity="0"
                offset="100%"
              ></stop>
            </linearGradient>
            <linearGradient
              gradientTransform="rotate(150, 0.5, 0.5)"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="gggrain-gradient3"
            >
              <stop stop-color="#fa7268" stop-opacity="1"></stop>
              <stop
                stop-color="rgba(255,255,255,0)"
                stop-opacity="0"
                offset="100%"
              ></stop>
            </linearGradient>
            <filter
              id="gggrain-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.55"
                numOctaves="2"
                seed="2"
                stitchTiles="stitch"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="turbulence"
              ></feTurbulence>
              <feColorMatrix
                type="saturate"
                values="0"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="turbulence"
                result="colormatrix"
              ></feColorMatrix>
              <feComponentTransfer
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="colormatrix"
                result="componentTransfer"
              >
                <feFuncR type="linear" slope="3"></feFuncR>
                <feFuncG type="linear" slope="3"></feFuncG>
                <feFuncB type="linear" slope="3"></feFuncB>
              </feComponentTransfer>
              <feColorMatrix
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="componentTransfer"
                result="colormatrix2"
                type="matrix"
                values="1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 19 -11"
              ></feColorMatrix>
            </filter>
          </defs>
          <g>
            <rect width="100%" height="100%" fill="#b0235f"></rect>
            <rect
              width="100%"
              height="100%"
              fill="url(#gggrain-gradient3)"
            ></rect>
            <rect
              width="100%"
              height="100%"
              fill="url(#gggrain-gradient2)"
            ></rect>
            <rect
              width="100%"
              height="100%"
              fill="transparent"
              filter="url(#gggrain-filter)"
              opacity="1"
              className="mix-blend-soft-light"
            ></rect>
          </g>
        </svg>
        {/* Header */}
        <svg
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-fit pointer-events-none"
          id="visual"
          viewBox="0 0 2000 190"
          width="2000"
          height="190"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <path
            d="M0 56L87 56L87 45L174 45L174 47L261 47L261 66L348 66L348 68L435 68L435 31L522 31L522 49L609 49L609 41L696 41L696 41L783 41L783 68L870 68L870 50L957 50L957 47L1043 47L1043 69L1130 69L1130 45L1217 45L1217 64L1304 64L1304 58L1391 58L1391 58L1478 58L1478 69L1565 69L1565 73L1652 73L1652 31L1739 31L1739 66L1826 66L1826 79L1913 79L1913 68L2000 68L2000 37L2000 0L2000 0L1913 0L1913 0L1826 0L1826 0L1739 0L1739 0L1652 0L1652 0L1565 0L1565 0L1478 0L1478 0L1391 0L1391 0L1304 0L1304 0L1217 0L1217 0L1130 0L1130 0L1043 0L1043 0L957 0L957 0L870 0L870 0L783 0L783 0L696 0L696 0L609 0L609 0L522 0L522 0L435 0L435 0L348 0L348 0L261 0L261 0L174 0L174 0L87 0L87 0L0 0Z"
            fill="#fa7268"
          ></path>
          <path
            d="M0 92L87 92L87 83L174 83L174 81L261 81L261 96L348 96L348 111L435 111L435 68L522 68L522 92L609 92L609 62L696 62L696 81L783 81L783 96L870 96L870 87L957 87L957 77L1043 77L1043 94L1130 94L1130 71L1217 71L1217 85L1304 85L1304 85L1391 85L1391 90L1478 90L1478 106L1565 106L1565 98L1652 98L1652 75L1739 75L1739 102L1826 102L1826 100L1913 100L1913 96L2000 96L2000 83L2000 35L2000 66L1913 66L1913 77L1826 77L1826 64L1739 64L1739 29L1652 29L1652 71L1565 71L1565 67L1478 67L1478 56L1391 56L1391 56L1304 56L1304 62L1217 62L1217 43L1130 43L1130 67L1043 67L1043 45L957 45L957 48L870 48L870 66L783 66L783 39L696 39L696 39L609 39L609 47L522 47L522 29L435 29L435 66L348 66L348 64L261 64L261 45L174 45L174 43L87 43L87 54L0 54Z"
            fill="#ea5e66"
          ></path>
          <path
            d="M0 115L87 115L87 106L174 106L174 111L261 111L261 123L348 123L348 138L435 138L435 87L522 87L522 115L609 115L609 90L696 90L696 96L783 96L783 126L870 126L870 102L957 102L957 102L1043 102L1043 119L1130 119L1130 96L1217 96L1217 104L1304 104L1304 115L1391 115L1391 111L1478 111L1478 119L1565 119L1565 128L1652 128L1652 104L1739 104L1739 130L1826 130L1826 115L1913 115L1913 115L2000 115L2000 96L2000 81L2000 94L1913 94L1913 98L1826 98L1826 100L1739 100L1739 73L1652 73L1652 96L1565 96L1565 104L1478 104L1478 88L1391 88L1391 83L1304 83L1304 83L1217 83L1217 69L1130 69L1130 92L1043 92L1043 75L957 75L957 85L870 85L870 94L783 94L783 79L696 79L696 60L609 60L609 90L522 90L522 66L435 66L435 109L348 109L348 94L261 94L261 79L174 79L174 81L87 81L87 90L0 90Z"
            fill="#d84a64"
          ></path>
          <path
            d="M0 157L87 157L87 174L174 174L174 163L261 163L261 170L348 170L348 176L435 176L435 153L522 153L522 164L609 164L609 161L696 161L696 159L783 159L783 164L870 164L870 168L957 168L957 172L1043 172L1043 176L1130 176L1130 168L1217 168L1217 168L1304 168L1304 166L1391 166L1391 166L1478 166L1478 174L1565 174L1565 164L1652 164L1652 168L1739 168L1739 164L1826 164L1826 157L1913 157L1913 155L2000 155L2000 157L2000 94L2000 113L1913 113L1913 113L1826 113L1826 128L1739 128L1739 102L1652 102L1652 126L1565 126L1565 117L1478 117L1478 109L1391 109L1391 113L1304 113L1304 102L1217 102L1217 94L1130 94L1130 117L1043 117L1043 100L957 100L957 100L870 100L870 124L783 124L783 94L696 94L696 88L609 88L609 113L522 113L522 85L435 85L435 136L348 136L348 121L261 121L261 109L174 109L174 104L87 104L87 113L0 113Z"
            fill="#c53762"
          ></path>
          <path
            d="M0 191L87 191L87 191L174 191L174 191L261 191L261 191L348 191L348 191L435 191L435 191L522 191L522 191L609 191L609 191L696 191L696 191L783 191L783 191L870 191L870 191L957 191L957 191L1043 191L1043 191L1130 191L1130 191L1217 191L1217 191L1304 191L1304 191L1391 191L1391 191L1478 191L1478 191L1565 191L1565 191L1652 191L1652 191L1739 191L1739 191L1826 191L1826 191L1913 191L1913 191L2000 191L2000 191L2000 155L2000 153L1913 153L1913 155L1826 155L1826 162L1739 162L1739 166L1652 166L1652 162L1565 162L1565 172L1478 172L1478 164L1391 164L1391 164L1304 164L1304 166L1217 166L1217 166L1130 166L1130 174L1043 174L1043 170L957 170L957 166L870 166L870 162L783 162L783 157L696 157L696 159L609 159L609 162L522 162L522 151L435 151L435 174L348 174L348 168L261 168L261 161L174 161L174 172L87 172L87 155L0 155Z"
            fill="#b0235f"
          ></path>
        </svg>
        <svg
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-fit pointer-events-none"
          id="visual"
          viewBox="0 0 2000 540"
          width="2000"
          height="540"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <rect x="0" y="0" width="2000" height="540" fill="#B0235F"></rect>
          <path
            d="M0 274L41.7 287C83.3 300 166.7 326 250 334.2C333.3 342.3 416.7 332.7 500 324.5C583.3 316.3 666.7 309.7 750 306.5C833.3 303.3 916.7 303.7 1000 313.5C1083.3 323.3 1166.7 342.7 1250 351.5C1333.3 360.3 1416.7 358.7 1500 358.3C1583.3 358 1666.7 359 1750 365.3C1833.3 371.7 1916.7 383.3 1958.3 389.2L2000 395L2000 0L1958.3 0C1916.7 0 1833.3 0 1750 0C1666.7 0 1583.3 0 1500 0C1416.7 0 1333.3 0 1250 0C1166.7 0 1083.3 0 1000 0C916.7 0 833.3 0 750 0C666.7 0 583.3 0 500 0C416.7 0 333.3 0 250 0C166.7 0 83.3 0 41.7 0L0 0Z"
            fill="#b0235f"
          ></path>
          <path
            d="M0 233L41.7 254.2C83.3 275.3 166.7 317.7 250 328.7C333.3 339.7 416.7 319.3 500 303.7C583.3 288 666.7 277 750 288.2C833.3 299.3 916.7 332.7 1000 326.2C1083.3 319.7 1166.7 273.3 1250 272C1333.3 270.7 1416.7 314.3 1500 318.8C1583.3 323.3 1666.7 288.7 1750 266C1833.3 243.3 1916.7 232.7 1958.3 227.3L2000 222L2000 0L1958.3 0C1916.7 0 1833.3 0 1750 0C1666.7 0 1583.3 0 1500 0C1416.7 0 1333.3 0 1250 0C1166.7 0 1083.3 0 1000 0C916.7 0 833.3 0 750 0C666.7 0 583.3 0 500 0C416.7 0 333.3 0 250 0C166.7 0 83.3 0 41.7 0L0 0Z"
            fill="#be3061"
          ></path>
          <path
            d="M0 253L41.7 255.3C83.3 257.7 166.7 262.3 250 268.3C333.3 274.3 416.7 281.7 500 276.3C583.3 271 666.7 253 750 259.2C833.3 265.3 916.7 295.7 1000 291.3C1083.3 287 1166.7 248 1250 231.7C1333.3 215.3 1416.7 221.7 1500 238.5C1583.3 255.3 1666.7 282.7 1750 298.3C1833.3 314 1916.7 318 1958.3 320L2000 322L2000 0L1958.3 0C1916.7 0 1833.3 0 1750 0C1666.7 0 1583.3 0 1500 0C1416.7 0 1333.3 0 1250 0C1166.7 0 1083.3 0 1000 0C916.7 0 833.3 0 750 0C666.7 0 583.3 0 500 0C416.7 0 333.3 0 250 0C166.7 0 83.3 0 41.7 0L0 0Z"
            fill="#cb3d62"
          ></path>
          <path
            d="M0 204L41.7 210.5C83.3 217 166.7 230 250 236.7C333.3 243.3 416.7 243.7 500 237.5C583.3 231.3 666.7 218.7 750 210.8C833.3 203 916.7 200 1000 206.3C1083.3 212.7 1166.7 228.3 1250 223.8C1333.3 219.3 1416.7 194.7 1500 198.5C1583.3 202.3 1666.7 234.7 1750 249.8C1833.3 265 1916.7 263 1958.3 262L2000 261L2000 0L1958.3 0C1916.7 0 1833.3 0 1750 0C1666.7 0 1583.3 0 1500 0C1416.7 0 1333.3 0 1250 0C1166.7 0 1083.3 0 1000 0C916.7 0 833.3 0 750 0C666.7 0 583.3 0 500 0C416.7 0 333.3 0 250 0C166.7 0 83.3 0 41.7 0L0 0Z"
            fill="#d84a64"
          ></path>
          <path
            d="M0 169L41.7 166.5C83.3 164 166.7 159 250 157.7C333.3 156.3 416.7 158.7 500 160.7C583.3 162.7 666.7 164.3 750 155.7C833.3 147 916.7 128 1000 128.5C1083.3 129 1166.7 149 1250 153C1333.3 157 1416.7 145 1500 147C1583.3 149 1666.7 165 1750 166C1833.3 167 1916.7 153 1958.3 146L2000 139L2000 0L1958.3 0C1916.7 0 1833.3 0 1750 0C1666.7 0 1583.3 0 1500 0C1416.7 0 1333.3 0 1250 0C1166.7 0 1083.3 0 1000 0C916.7 0 833.3 0 750 0C666.7 0 583.3 0 500 0C416.7 0 333.3 0 250 0C166.7 0 83.3 0 41.7 0L0 0Z"
            fill="#e45765"
          ></path>
          <path
            d="M0 120L41.7 125.5C83.3 131 166.7 142 250 139.3C333.3 136.7 416.7 120.3 500 109.3C583.3 98.3 666.7 92.7 750 94.7C833.3 96.7 916.7 106.3 1000 106.2C1083.3 106 1166.7 96 1250 96C1333.3 96 1416.7 106 1500 105.3C1583.3 104.7 1666.7 93.3 1750 93.3C1833.3 93.3 1916.7 104.7 1958.3 110.3L2000 116L2000 0L1958.3 0C1916.7 0 1833.3 0 1750 0C1666.7 0 1583.3 0 1500 0C1416.7 0 1333.3 0 1250 0C1166.7 0 1083.3 0 1000 0C916.7 0 833.3 0 750 0C666.7 0 583.3 0 500 0C416.7 0 333.3 0 250 0C166.7 0 83.3 0 41.7 0L0 0Z"
            fill="#ef6467"
          ></path>
          <path
            d="M0 54L41.7 52.5C83.3 51 166.7 48 250 47.3C333.3 46.7 416.7 48.3 500 47C583.3 45.7 666.7 41.3 750 40.5C833.3 39.7 916.7 42.3 1000 47C1083.3 51.7 1166.7 58.3 1250 60.7C1333.3 63 1416.7 61 1500 61.3C1583.3 61.7 1666.7 64.3 1750 62.8C1833.3 61.3 1916.7 55.7 1958.3 52.8L2000 50L2000 0L1958.3 0C1916.7 0 1833.3 0 1750 0C1666.7 0 1583.3 0 1500 0C1416.7 0 1333.3 0 1250 0C1166.7 0 1083.3 0 1000 0C916.7 0 833.3 0 750 0C666.7 0 583.3 0 500 0C416.7 0 333.3 0 250 0C166.7 0 83.3 0 41.7 0L0 0Z"
            fill="#fa7268"
          ></path>
        </svg>
        <header className="relative w-full z-50 px-5 md:px-10 py-6  max-w-3xl mx-auto">
          <div className=" max-w-6xl mx-auto flex items-center justify-between">
            <a
              href="#intro"
              className="text-xl font-medium tracking-tighter text-white"
            >
              <span className="text-primary">S</span>amjaabo
              <span className="text-primary">.</span>
            </a>

            <nav className="hidden md:flex items-center gap-10">
              <a
                href="#work"
                className={`text-sm ${
                  activeSection === "work"
                    ? "text-primary"
                    : "text-text-secondary"
                } hover:text-primary transition-colors duration-300`}
              >
                Work
              </a>
              <a
                href="#about"
                className={`text-sm ${
                  activeSection === "about"
                    ? "text-primary"
                    : "text-text-secondary"
                } hover:text-primary transition-colors duration-300`}
              >
                About
              </a>
              <a
                href="#contact"
                className={`text-sm ${
                  activeSection === "contact"
                    ? "text-primary"
                    : "text-text-secondary"
                } hover:text-primary transition-colors duration-300`}
              >
                Contact
              </a>
            </nav>

            <button
              className="flex md:hidden flex-col gap-1.5"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-text transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-text transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-text transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </header>

        {/* Mobile menu */}
        <motion.div
          className="fixed inset-0 z-40 bg-bg"
          initial={{ x: "100%" }}
          animate={{ x: menuOpen ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col h-full justify-center px-8">
            <nav className="flex flex-col gap-10 items-center">
              <a
                href="#work"
                className="text-3xl hover:text-primary"
                onClick={toggleMenu}
              >
                Work
              </a>
              <a
                href="#about"
                className="text-3xl hover:text-primary"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-3xl hover:text-primary"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </nav>
          </div>
        </motion.div>

        {/* Main content */}
        <main className="pt-32 max-w-3xl mx-auto">
          {/* Intro section */}
          <section
            id="intro"
            className="min-h-[80vh] flex items-center px-5 md:px-10"
          >
            <div className="max-w-6xl mx-auto w-full">
              <div className="max-w-3xl">
                <TextReveal delay={0.1}>
                  <h1 className="text-4xl md:text-6xl font-medium mb-6">
                    UI/UX Designer
                    <br />
                    <span className="text-text-secondary">
                      & Design Strategist.
                    </span>
                  </h1>
                </TextReveal>

                <TextReveal delay={0.3}>
                  <p className="text-text-secondary mb-10 md:text-lg">
                    With 30 years of experience, I transform complex challenges
                    into elegant, human-centered digital experiences that drive
                    business growth and user satisfaction.
                  </p>
                </TextReveal>

                <TextReveal delay={0.5}>
                  <div className="flex gap-6">
                    <a
                      href="#work"
                      className="relative px-6 py-2 text-primary inline-block group hover-underline"
                    >
                      See my work
                    </a>

                    <a
                      href="#contact"
                      className="btn-primary px-6 py-2 inline-block rounded"
                    >
                      Contact me
                    </a>
                  </div>
                </TextReveal>
              </div>
            </div>
          </section>

          {/* Work section */}
          <section id="work" className="py-20 px-5 md:px-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-medium mb-16 text-text">
                Selected Work
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {projects.map((project, index) => (
                  <Card key={index} {...project} />
                ))}
              </div>
            </div>
          </section>

          {/* About section */}
          <section id="about" className="py-20 px-5 md:px-10 bg-bg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-medium mb-16 text-text">About Me</h2>

              <div className="flex flex-col md:flex-row gap-16">
                <div className="md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative aspect-[4/5] animate-float"
                  >
                    <Image
                      src="/profile.jpg"
                      alt="Said Amjaabou"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                <div className="md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <p className="text-text-secondary mb-8">
                      With three decades of experience in UI/UX design, I've
                      witnessed and contributed to the evolution of digital
                      interfaces from command-line to voice and gesture
                      controls.
                    </p>
                    <p className="text-text-secondary mb-8">
                      I believe that exceptional design is invisible—it doesn't
                      call attention to itself but rather enhances the user's
                      ability to achieve their goals efficiently and
                      delightfully. My approach combines deep user empathy,
                      business acumen, and technical understanding.
                    </p>
                    <p className="text-text-secondary mb-10">
                      Throughout my career, I've had the privilege of working
                      with organizations ranging from Fortune 500 companies to
                      innovative startups, helping them transform their digital
                      products and establish design as a strategic business
                      asset.
                    </p>

                    <div>
                      <h3 className="font-medium mb-6 text-text">
                        Skills & Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "UI Design",
                          "UX Research",
                          "Design Systems",
                          "Figma",
                          "Prototyping",
                          "User Testing",
                          "Frontend Development",
                          "Motion Design",
                          "Accessibility",
                          "Design Thinking",
                        ].map((skill, index) => (
                          <span
                            key={index}
                            className="text-xs text-text-secondary border border-border px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact section */}
          <section
            id="contact"
            className="py-20 px-5 md:px-10 glass-card my-10 mx-5 md:mx-10"
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-medium mb-16 text-text">
                Let's Connect
              </h2>

              <div className="flex flex-col md:flex-row gap-16">
                <div className="md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md"
                  >
                    <p className="text-text-secondary mb-10">
                      I'm currently available for freelance work and consulting.
                      If you have a project that needs design expertise, or if
                      you're just looking to chat about design, feel free to
                      reach out.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <p className="text-sm text-text-secondary mb-1">
                          Email:
                        </p>
                        <a
                          href="mailto:hello@saidamjaabou.com"
                          className="text-lg hover:text-primary transition-colors"
                        >
                          hello@saidamjaabou.com
                        </a>
                      </div>

                      <div>
                        <p className="text-sm text-text-secondary mb-1">
                          Follow me:
                        </p>
                        <div className="flex gap-6">
                          <SocialLink
                            href="https://linkedin.com"
                            label="LinkedIn"
                          />
                          <SocialLink
                            href="https://twitter.com"
                            label="Twitter"
                          />
                          <SocialLink
                            href="https://dribbble.com"
                            label="Dribbble"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="md:w-1/2">
                  <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm text-text-secondary mb-1 block"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm text-text-secondary mb-1 block"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="text-sm text-text-secondary mb-1 block"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary px-8 py-2 rounded font-medium"
                    >
                      Send Message
                    </button>
                  </motion.form>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-42 py-10 px-5 md:px-10 border-t border-border">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm">
              © {new Date().getFullYear()} Said Amjaabou. All rights reserved.
            </p>

            <div className="flex gap-6">
              <SocialLink href="https://linkedin.com" label="LinkedIn" />
              <SocialLink href="https://twitter.com" label="Twitter" />
              <SocialLink href="https://dribbble.com" label="Dribbble" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
