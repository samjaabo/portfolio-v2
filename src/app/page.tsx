"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      className="relative text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
    >
      {label}
      <span className="absolute left-0 -bottom-px w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
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
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <a
        href={link}
        className="block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="overflow-hidden mb-4 bg-neutral-900">
          <div className="relative aspect-[16/9] transform group-hover:scale-105 transition-transform duration-500">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs text-gray-400 border border-gray-800 px-2 py-1 rounded"
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

  const projects = [
    {
      title: "Dashboard Design System",
      description: "A comprehensive design system for enterprise applications",
      tags: ["UI/UX", "Design System", "Figma"],
      link: "#",
      image: "/project1.webp",
    },
    {
      title: "E-commerce Mobile App",
      description: "Shopping experience focused on simplicity and conversion",
      tags: ["Mobile", "UI/UX", "Prototyping"],
      link: "#",
      image: "/project2.webp",
    },
    {
      title: "Finance Platform Redesign",
      description: "Complete overhaul of legacy financial service platform",
      tags: ["Web App", "UI/UX", "Dashboard"],
      link: "#",
      image: "/project3.webp",
    },
    {
      title: "Health Tracking Application",
      description:
        "Personal health monitoring application with intuitive data visualization",
      tags: ["Mobile", "Data Viz", "UI/UX"],
      link: "#",
      image: "/project1.webp",
    },
  ];

  return (
    <>
      {/* Main container */}
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <a href="#intro" className="text-xl font-medium tracking-tighter">
              Samjaabo.
            </a>

            <nav className="hidden md:flex items-center gap-10">
              <a
                href="#work"
                className={`text-sm ${
                  activeSection === "work" ? "text-white" : "text-gray-400"
                } hover:text-white transition-colors duration-300`}
              >
                Work
              </a>
              <a
                href="#about"
                className={`text-sm ${
                  activeSection === "about" ? "text-white" : "text-gray-400"
                } hover:text-white transition-colors duration-300`}
              >
                About
              </a>
              <a
                href="#contact"
                className={`text-sm ${
                  activeSection === "contact" ? "text-white" : "text-gray-400"
                } hover:text-white transition-colors duration-300`}
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
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </header>

        {/* Mobile menu */}
        <motion.div
          className="fixed inset-0 z-40 bg-black"
          initial={{ x: "100%" }}
          animate={{ x: menuOpen ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col h-full justify-center px-8">
            <nav className="flex flex-col gap-10 items-center">
              <a
                href="#work"
                className="text-3xl hover:text-gray-300"
                onClick={toggleMenu}
              >
                Work
              </a>
              <a
                href="#about"
                className="text-3xl hover:text-gray-300"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-3xl hover:text-gray-300"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </nav>
          </div>
        </motion.div>

        {/* Main content */}
        <main className="pt-32">
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
                    <span className="text-gray-400">& Design Strategist.</span>
                  </h1>
                </TextReveal>

                <TextReveal delay={0.3}>
                  <p className="text-gray-400 mb-10 md:text-lg">
                    With 30 years of experience, I transform complex challenges
                    into elegant, human-centered digital experiences that drive
                    business growth and user satisfaction.
                  </p>
                </TextReveal>

                <TextReveal delay={0.5}>
                  <div className="flex gap-6">
                    <a
                      href="#work"
                      className="relative px-6 py-2 text-white inline-block group"
                    >
                      See my work
                      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </a>

                    <a
                      href="#contact"
                      className="relative px-6 py-2 text-white inline-block group"
                    >
                      Contact me
                      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </a>
                  </div>
                </TextReveal>
              </div>
            </div>
          </section>

          {/* Work section */}
          <section id="work" className="py-20 px-5 md:px-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-medium mb-16">Selected Work</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {projects.map((project, index) => (
                  <ProjectCard key={index} index={index} {...project} />
                ))}
              </div>
            </div>
          </section>

          {/* About section */}
          <section id="about" className="py-20 px-5 md:px-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-medium mb-16">About Me</h2>

              <div className="flex flex-col md:flex-row gap-16">
                <div className="md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative aspect-[4/5]"
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
                    <p className="text-gray-400 mb-8">
                      With three decades of experience in UI/UX design, I've
                      witnessed and contributed to the evolution of digital
                      interfaces from command-line to voice and gesture
                      controls.
                    </p>
                    <p className="text-gray-400 mb-8">
                      I believe that exceptional design is invisible—it doesn't
                      call attention to itself but rather enhances the user's
                      ability to achieve their goals efficiently and
                      delightfully. My approach combines deep user empathy,
                      business acumen, and technical understanding.
                    </p>
                    <p className="text-gray-400 mb-10">
                      Throughout my career, I've had the privilege of working
                      with organizations ranging from Fortune 500 companies to
                      innovative startups, helping them transform their digital
                      products and establish design as a strategic business
                      asset.
                    </p>

                    <div>
                      <h3 className="font-medium mb-6">
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
                            className="text-xs text-gray-400 border border-gray-800 px-2 py-1 rounded"
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
          <section id="contact" className="py-20 px-5 md:px-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-medium mb-16">Let's Connect</h2>

              <div className="flex flex-col md:flex-row gap-16">
                <div className="md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md"
                  >
                    <p className="text-gray-400 mb-10">
                      I'm currently available for freelance work and consulting.
                      If you have a project that needs design expertise, or if
                      you're just looking to chat about design, feel free to
                      reach out.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Email:</p>
                        <a
                          href="mailto:hello@saidamjaabou.com"
                          className="text-lg hover:text-gray-300 transition-colors"
                        >
                          hello@saidamjaabou.com
                        </a>
                      </div>

                      <div>
                        <p className="text-sm text-gray-400 mb-1">Follow me:</p>
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
                        className="text-sm text-gray-400 mb-1 block"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-transparent border-b border-gray-800 py-2 focus:outline-none focus:border-gray-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm text-gray-400 mb-1 block"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-transparent border-b border-gray-800 py-2 focus:outline-none focus:border-gray-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="text-sm text-gray-400 mb-1 block"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full bg-transparent border-b border-gray-800 py-2 focus:outline-none focus:border-gray-500 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-8 py-2 bg-white text-black font-medium hover:bg-gray-200 transition-colors"
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
        <footer className="py-10 px-5 md:px-10 border-t border-gray-900">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
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
