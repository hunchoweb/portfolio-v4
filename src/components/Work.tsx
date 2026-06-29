"use client";

import React, { useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    gsap.set(".projects .project", {
      y: "50%",
      zIndex: 1,
      opacity: 0,
    });

    gsap.to(".projects .project", {
      y: "0%",
      stagger: {
        amount: 1,
      },
      opacity: 1,
      scrollTrigger: {
        trigger: ".projects .project",
        start: "top bottom-=100",
        end: "bottom top+=300",
        scrub: true,
      },
    });
  }, []);

  const openTab = (link: string) => {
    window.open(link, "_blank");
  };

  const projects = [
    {
      title: "Double Shore",
      link: "https://double-shore.com/",
      image: "/images/double-shore.png",
      alt: "Double Shore",
      skills: ["NEXT JS", "GSAP", "UMBRACO CMS", "TYPESCRIPT"],
    },
    {
      title: "Janus Payroll",
      link: "https://dev.januspayroll.com/",
      image: "/images/janus-payroll.png",
      alt: "Janus Payroll",
      skills: ["REACT", "TYPESCRIPT", "REDUX TOOLKIT", "TANSTACK QUERY"],
    },
    {
      title: "Faadio",
      link: "https://faadio.com/",
      image: "/images/faadio.png",
      alt: "Faadio",
      skills: ["NEXT JS", "REACT", "TYPESCRIPT"],
    },
    {
      title: "Linear",
      link: "https://linear-clone-omega.vercel.app",
      image: "/images/linear.png",
      alt: "Linear",
      skills: ["HTML", "CSS", "TYPESCRIPT"],
    },
    {
      title: "Lightship",
      link: "https://lightship-snowy.vercel.app/",
      image: "/images/Lightship.png",
      alt: "Lightship",
      skills: ["HTML", "CSS", "JAVASCRIPT", "GSAP"],
    },
    {
      title: "Magma DeFi",
      link: "https://magma-nine.vercel.app",
      image: "/images/magma.png",
      alt: "Magma",
      skills: ["HTML", "CSS", "JAVASCRIPT", "GSAP"],
    },
    {
      title: "Tala Clone",
      link: "https://get-tala.vercel.app",
      image: "/images/tala.png",
      alt: "Project Tala",
      skills: ["HTML", "CSS", "JAVASCRIPT", "GSAP"],
    },
    {
      title: "Huncho Apes",
      link: "https://huncho-drop.vercel.app",
      image: "/images/hunchoApes.png",
      alt: "Project Huncho Apes",
      skills: ["HTML", "CSS", "TYPESCRIPT", "THIRDWEB"],
    },
    {
      title: "Chat Translator",
      link: "https://chat-translate-app.vercel.app/",
      image: "/images/translatorChat.png",
      alt: "Chat Translator",
      skills: ["NEXT JS", "TAILWIND CSS", "TYPESCRIPT", "FIREBASE"],
    },
    {
      title: "MOQO",
      link: "https://moqo-clone.vercel.app/",
      image: "/images/Moqo.png",
      alt: "MOQO",
      skills: ["NEXT JS", "TAILWIND CSS", "TYPESCRIPT", "GSAP"],
    },
    {
      title: "OBYS",
      link: "https://obys-eta.vercel.app/",
      image: "/images/Obys.png",
      alt: "OBYS",
      skills: ["REACT", "TAILWIND CSS", "THREE JS", "GSAP", "FRAMER", "SHERY JS"],
    },
  ];

  return (
    <section className="work-section" id="work">
      <SectionHeader text="WORK" />
      <div className="projects">
        {projects.map((project, index) => (
          <div
            key={project.title}
            onClick={() => openTab(project.link)}
            className={`project${index === 0 ? " first" : ""}`}
          >
            <div className="left-content">
              <div className="title-container">
                <div className="dot"></div>
                <h3>{project.title}</h3>
              </div>
              <div className="skills-container">
                <div className="skills">
                  {project.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="image">
              <Image
                alt={project.alt}
                src={project.image}
                width={500}
                height={300}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
