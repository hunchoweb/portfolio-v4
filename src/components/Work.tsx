"use client";

import React, { useEffect, useRef, useState } from "react";
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

  return (
    <section className="work-section" id="work">
      <SectionHeader text="WORK" />
      <div className="projects">
        {/* Project 1: Chat Translator */}
        <div
          onClick={() => openTab("https://chat-translate-app.vercel.app/")}
          className="project first"
        >
          <div className="left-content">
            <div className="title-container">
              <div className="dot"></div>
              <h3>Chat Translator</h3>
            </div>
            <div className="skills-container">
              <div className="skills">
                <span>NEXT JS</span>
                <span>TAILWIND CSS</span>
                <span>TYPESCRIPT</span>
                <span>FIREBASE</span>
              </div>
            </div>
          </div>
          <div className="image">
            <Image
              alt="Chat Translator"
              src="/images/translatorChat.png"
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* Project 2: MOQO */}
        <div
          onClick={() => openTab("https://moqo-clone.vercel.app/")}
          className="project"
        >
          <div className="left-content">
            <div className="title-container">
              <div className="dot"></div>
              <h3>MOQO</h3>
            </div>
            <div className="skills-container">
              <div className="skills">
                <span>NEXT JS</span>
                <span>TAILWIND CSS</span>
                <span>TYPESCRIPT</span>
                <span>GSAP</span>
              </div>
            </div>
          </div>
          <div className="image">
            <Image alt="MOQO" src="/images/Moqo.png" width={500} height={300} />
          </div>
        </div>

        {/* Project 3: OBYS */}
        <div
          onClick={() => openTab("https://obys-eta.vercel.app/")}
          className="project"
        >
          <div className="left-content">
            <div className="title-container">
              <div className="dot"></div>
              <h3>OBYS</h3>
            </div>
            <div className="skills-container">
              <div className="skills">
                <span>REACT</span>
                <span>TAILWIND CSS</span>
                <span>THREE JS</span>
                <span>GSAP</span>
                <span>FRAMER</span>
                <span>SHERY JS</span>
              </div>
            </div>
          </div>
          <div className="image">
            <Image alt="OBYS" src="/images/Obys.png" width={500} height={300} />
          </div>
        </div>

        {/* Project 4: RAFT */}
        <div
          onClick={() => openTab("https://raceiorr.vercel.app/")}
          className="project"
        >
          <div className="left-content">
            <div className="title-container">
              <div className="dot"></div>
              <h3>RAFT</h3>
            </div>
            <div className="skills-container">
              <div className="skills">
                <span>NEXT JS</span>
                <span>TAILWIND CSS</span>
                <span>GSAP</span>
                <span>TYPESCRIPT</span>
                <span>FRAMER</span>
              </div>
            </div>
          </div>
          <div className="image">
            <Image alt="RAFT" src="/images/Raft.png" width={500} height={300} />
          </div>
        </div>

        {/* Project 5: Linear */}
        <div
          onClick={() => openTab("https://linear-clone-omega.vercel.app")}
          className="project"
        >
          <div className="left-content">
            <div className="title-container">
              <div className="dot"></div>
              <h3>Linear</h3>
            </div>
            <div className="skills-container">
              <div className="skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>TYPESCRIPT</span>
              </div>
            </div>
          </div>
          <div className="image">
            <Image
              alt="Linear"
              src="/images/linear.png"
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* Project 6: Lightship */}
        <div
          onClick={() => openTab("https://lightship-snowy.vercel.app/")}
          className="project"
        >
          <div className="left-content">
            <div className="title-container">
              <div className="dot"></div>
              <h3>Lightship</h3>
            </div>
            <div className="skills-container">
              <div className="skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JAVASCRIPT</span>
                <span>GSAP</span>
              </div>
            </div>
          </div>
          <div className="image">
            <Image
              alt="Lightship"
              src="/images/Lightship.png"
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* Project 7: Magma DeFi */}
        <div
          onClick={() => openTab("https://magma-nine.vercel.app")}
          className="project"
        >
          <div className="left-content">
            <div className="title-container">
              <div className="dot"></div>
              <h3>Magma DeFi</h3>
            </div>
            <div className="skills-container">
              <div className="skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JAVASCRIPT</span>
                <span>GSAP</span>
              </div>
            </div>
          </div>
          <div className="image">
            <Image
              alt="Magma"
              src="/images/magma.png"
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* Project 8: Tala Clone */}
        <div
          onClick={() => openTab("https://get-tala.vercel.app")}
          className="project"
        >
          <div className="left-content">
            <div className="title-container">
              <div className="dot"></div>
              <h3>Tala Clone</h3>
            </div>
            <div className="skills-container">
              <div className="skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JAVASCRIPT</span>
                <span>GSAP</span>
              </div>
            </div>
          </div>
          <div className="image">
            <Image
              alt="Project Tala"
              src="/images/tala.png"
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* Project 9: Huncho Apes */}
        <div
          onClick={() => openTab("https://huncho-drop.vercel.app")}
          className="project"
        >
          <div className="left-content">
            <div className="title-container">
              <div className="dot"></div>
              <h3>Huncho Apes</h3>
            </div>
            <div className="skills-container">
              <div className="skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>TYPESCRIPT</span>
                <span>THIRDWEB</span>
              </div>
            </div>
          </div>
          <div className="image">
            <Image
              alt="Project Huncho Apes"
              src="/images/hunchoApes.png"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
