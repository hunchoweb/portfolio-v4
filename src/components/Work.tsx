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
      title: "Beemcute",
      link: "https://beemcute.com/",
      image: "/images/beemcute.png",
      alt: "Beemcute platform hero showing a work dashboard",
      skills: ["AI WORK MANAGEMENT", "AI AGENTS", "WHATSAPP AI", "WORKFLOW AUTOMATION"],
    },
    {
      title: "Janus Payroll",
      link: "https://januspayroll.com/",
      image: "/images/janus-payroll.png",
      alt: "Janus Payroll",
      skills: ["ENTERPRISE SAAS", "PAYROLL OPERATIONS", "BUSINESS WORKFLOWS", "PRODUCT ENGINEERING"],
    },
    {
      title: "Double Shore",
      link: "https://double-shore.com/",
      image: "/images/double-shore.png",
      alt: "Double Shore",
      skills: ["PRODUCT ENGINEERING", "NEXT JS", "UMBRACO CMS", "TYPESCRIPT"],
    },
    {
      title: "Faadio",
      link: "https://faadio.com/",
      image: "/images/faadio.png",
      alt: "Faadio",
      skills: ["NEXT JS", "REACT", "TYPESCRIPT"],
    },
    {
      title: "Chat Translator",
      link: "https://chat-translate-app.vercel.app/",
      image: "/images/translatorChat.png",
      alt: "Chat Translator",
      skills: ["NEXT JS", "TAILWIND CSS", "TYPESCRIPT", "FIREBASE"],
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
