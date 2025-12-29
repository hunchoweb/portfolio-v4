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
        {/* Project 1: Translator Chat */}
        <div
          onClick={() => openTab("https://translator-chat-app.vercel.app")}
          className="project"
        >
          <div className="container">
            <div className="dot"></div>
            <h3>Translator Chat</h3>
          </div>
          <div className="container">
            <div className="skills">
              <span style={{ "--i": 0 } as any}>NEXT JS</span>
              <span style={{ "--i": 1 } as any}>TAILWIND CSS</span>
              <span style={{ "--i": 3 } as any}>GSAP</span>
              <span style={{ "--i": 3 } as any}>TYPESCRIPT</span>
            </div>
          </div>
          <div style={{ backgroundColor: "#111119" }} className="image">
            <a
              target="_blank"
              href="https://translator-chat-app.vercel.app"
              rel="noreferrer"
            >
              <Image
                alt="translatorChat"
                src="/images/translatorChat.png"
                width={500}
                height={300}
                style={{ width: "100%", height: "auto" }}
              />
            </a>
          </div>
        </div>

        {/* Project 2: Raft */}
        <div
          onClick={() => openTab("https://raceiorr.vercel.app")}
          className="project"
        >
          <div className="container">
            <div className="dot"></div>
            <h3>Raft</h3>
          </div>
          <div className="container">
            <div className="skills">
              <span style={{ "--i": 0 } as any}>NEXT JS</span>
              <span style={{ "--i": 1 } as any}>TAILWIND CSS</span>
              <span style={{ "--i": 3 } as any}>GSAP</span>
              <span style={{ "--i": 3 } as any}>TYPESCRIPT</span>
              <span style={{ "--i": 3 } as any}>FRAMER</span>
            </div>
          </div>
          <div style={{ backgroundColor: "#111119" }} className="image">
            <a target="_blank" href="raceiorr.vercel.app" rel="noreferrer">
              <Image
                alt="Raft"
                src="/images/Raft.png"
                width={500}
                height={300}
                style={{ width: "100%", height: "auto" }}
              />
            </a>
          </div>
        </div>

        {/* Project 3: Linear */}
        <div
          onClick={() => openTab("https://linear-clone-omega.vercel.app")}
          className="project"
        >
          <div className="container">
            <div className="dot"></div>
            <h3>Linear</h3>
          </div>
          <div className="container">
            <div className="skills">
              <span style={{ "--i": 0 } as any}>HTML</span>
              <span style={{ "--i": 1 } as any}>CSS</span>
              <span style={{ "--i": 2 } as any}>TYPESCRIPT</span>
            </div>
          </div>
          <div style={{ backgroundColor: "#111119" }} className="image">
            <a
              target="_blank"
              href="https://linear-clone-omega.vercel.app"
              rel="noreferrer"
            >
              <Image
                alt="Linear"
                src="/images/linear.png"
                width={500}
                height={300}
                style={{ width: "100%", height: "auto" }}
              />
            </a>
            <div className="cursor">
              <p>View Site</p>
            </div>
          </div>
        </div>

        {/* Project 4: Lightship */}
        <div
          onClick={() => openTab("https://lightship-snowy.vercel.app/")}
          className="project"
        >
          <div className="container">
            <div className="dot"></div>
            <h3>Lightship</h3>
          </div>
          <div className="container">
            <div className="skills">
              <span style={{ "--i": 0 } as any}>HTML</span>
              <span style={{ "--i": 1 } as any}>CSS</span>
              <span style={{ "--i": 2 } as any}>JAVASCRIPT</span>
              <span style={{ "--i": 2 } as any}>GSAP</span>
            </div>
          </div>
          <div style={{ backgroundColor: "#111119" }} className="image">
            <a
              target="_blank"
              href="https://lightship-snowy.vercel.app/"
              rel="noreferrer"
            >
              <Image
                alt="Lightship"
                src="/images/Lightship.png"
                width={500}
                height={300}
                style={{ width: "100%", height: "auto" }}
              />
            </a>
            <div className="cursor">
              <p>View Site</p>
            </div>
          </div>
        </div>

        {/* Project 5: Magma DeFi */}
        <div
          onClick={() => openTab("https://magma-nine.vercel.app")}
          className="project"
        >
          <div className="container">
            <div className="dot"></div>
            <h3>Magma DeFi</h3>
          </div>
          <div className="container">
            <div className="skills">
              <span style={{ "--i": 0 } as any}>HTML</span>
              <span style={{ "--i": 1 } as any}>CSS</span>
              <span style={{ "--i": 2 } as any}>JAVASCRIPT</span>
              <span style={{ "--i": 2 } as any}>GSAP</span>
            </div>
          </div>
          <div style={{ backgroundColor: "#111119" }} className="image">
            <a
              target="_blank"
              href="https://magma-nine.vercel.app"
              rel="noreferrer"
            >
              <Image
                alt="Magma"
                src="/images/magma.png"
                width={500}
                height={300}
                style={{ width: "100%", height: "auto" }}
              />
            </a>
            <div className="cursor">
              <p>View Site</p>
            </div>
          </div>
        </div>

        {/* Project 6: Tala Clone */}
        <div
          onClick={() => openTab("https://get-tala.vercel.app")}
          className="project"
        >
          <div className="container">
            <div className="dot"></div>
            <h3>Tala Clone</h3>
          </div>
          <div className="container">
            <div className="skills">
              <span style={{ "--i": 0 } as any}>HTML</span>
              <span style={{ "--i": 1 } as any}>CSS</span>
              <span style={{ "--i": 3 } as any}>JAVASCRIPT</span>
              <span style={{ "--i": 4 } as any}>GSAP</span>
            </div>
          </div>
          <div style={{ backgroundColor: "#131313" }} className="image">
            <a
              target="_blank"
              href="https://get-tala.vercel.app"
              rel="noreferrer"
            >
              <Image
                alt="Project Tala"
                src="/images/tala.png"
                width={500}
                height={300}
                style={{ width: "100%", height: "auto" }}
              />
            </a>
          </div>
        </div>

        {/* Project 7: Huncho Apes */}
        <div
          onClick={() => openTab("https://huncho-drop.vercel.app")}
          className="project"
        >
          <div className="container">
            <div className="dot"></div>
            <h3>Huncho Apes</h3>
          </div>
          <div className="container">
            <div className="skills">
              <span style={{ "--i": 0 } as any}>HTML</span>
              <span style={{ "--i": 1 } as any}>CSS</span>
              <span style={{ "--i": 2 } as any}>TYPESCRIPT</span>
              <span style={{ "--i": 3 } as any}>THIRDWEB</span>
            </div>
          </div>
          <div className="image">
            <a
              target="_blank"
              href="https://huncho-drop.vercel.app"
              rel="noreferrer"
            >
              <Image
                alt="Project Huncho Apes"
                src="/images/hunchoApes.png"
                width={500}
                height={300}
                style={{ width: "100%", height: "auto" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
