"use client";

import React, { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { useLenis } from "@/contexts/LenisContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const lenis = useLenis();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".about-section",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power1.inOut" }
    );
  }, []);

  const scrollToContact = () => {
    lenis?.scrollTo("#contact");
  };

  return (
    <section className="about-section" id="about">
      <SectionHeader text="ABOUT" />
      <div className="container" ref={containerRef}>
        <div className="image">
          <p className="disclaimer">
            **A COOL UNSPLASH <br />
            PHOTOGRAPH NOT ME LOL
          </p>
          <div className="image-border"></div>
          <Image
            className="light"
            alt="Man Looking Up"
            src="/images/person3.png"
            width={620}
            height={400}
          />
          <Image
            className="dark"
            alt="Man Looking Up"
            src="/images/person.png"
            width={620}
            height={400}
          />
        </div>

        <div className="text">
          <p>
            I&apos;m Ayo. You might also know me as Huncho 🐐. I&apos;m a
            logical, flexible and creative <b> front end developer</b> with a
            passion for finding efficient solutions to complex problems and
            spends a huge chunk of my time down internet rabbit holes in search
            for inspiration or answers. 💯
            <br /> <br /> Experience with code design, development, and
            maintenance. At the heart, I am a problem solver who enjoys creating
            meaningful experiences by focusing on what matters most. I like to
            dive into the details and understand the big picture, while
            simultaneously pushing boundaries to elevate everything I do.
            Nothing lifts my spirits more than to experiment across digital
            platforms, leading with my curiosity. <br /> <br /> I&apos;m
            passionate about accessibility, storytelling and the power of
            creating digital experiences that make emotional connections. The
            ultimate thrill is fixing a bug that has kept me awake or totally
            rocking a recipe I&apos;ve been dying to nail. Also did I mention I
            love music?😂
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              scrollToContact();
            }}
            type="button"
            className="btn btn_about"
          >
            <span>GET IN TOUCH</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
