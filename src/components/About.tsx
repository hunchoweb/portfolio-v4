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
            I&apos;m Odunayo Ojowa, an <b>AI Product Engineer</b> building
            intelligent software for real business workflows. I build AI agents,
            business software and automation systems that help teams spend less
            time on repetitive work.
            <br /> <br /> My background is in frontend and product engineering,
            building SaaS products, enterprise platforms and complex interfaces.
            That work led me to software that can understand context, use tools
            and take action. Beemcute&apos;s WhatsApp AI assistant turns
            conversations into task actions, while an AI-powered CRM helps
            business development teams manage opportunities and follow-ups.
            <br /> <br /> I still care deeply about clear interfaces and good
            product experiences. They&apos;re part of making intelligent systems
            useful every day.
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
