"use client";

import React, { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillsData = {
  row1: "Javascript . ReactJS . Typescript . VueJS . NextJS .",
  row2: "Thirdweb . Gsap . Sanity . Git . Metamask .",
  row3: "HTML . CSS . SCSS . Bootstrap . TailwindCSS .",
  row4: "MaterialUI . Firebase . Solidity . NodeJS . MongoDB . PostgreSQL .",
};

const Skills = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".skills",
          start: "top bottom",
          end: "bottom+=200 top",
          scrub: 1,
        },
      });

      tl.fromTo(
        ".skillset--1 .skillset-track",
        { x: "0%" },
        { x: "-25%" },
        0
      ).fromTo(".skillset--2 .skillset-track", { x: "-25%" }, { x: "0%" }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderSkillRow = (skills: string, count: number = 10) => {
    // Split the string into individual parts (words and dots)
    const parts = skills.trim().split(" ");

    // Create a repeatable array of these parts
    return Array(count)
      .fill(parts)
      .flat()
      .map((text, i) => (
        <span
          key={i}
          className={text === "." ? "skill-separator" : "skill-item"}
        >
          {text}&nbsp;
        </span>
      ));
  };

  return (
    <section className="skills-section" id="skills" ref={containerRef}>
      <SectionHeader text="SKILLS" />
      <div className="skills">
        <div className="skillset--1">
          <div className="skillset-track">
            {renderSkillRow(skillsData.row1)}
          </div>
        </div>
        <div className="skillset--2">
          <div className="skillset-track">
            {renderSkillRow(skillsData.row2)}
          </div>
        </div>
        <div className="skillset--1">
          <div className="skillset-track">
            {renderSkillRow(skillsData.row3)}
          </div>
        </div>
        <div className="skillset--2">
          <div className="skillset-track">
            {renderSkillRow(skillsData.row4)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
