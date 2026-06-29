"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ["linear.png", "tala.png", "magma.png", "translatorChat.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev < 3 ? prev + 1 : 0));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const roundTextP = document.querySelector(".roundText p");
    if (roundTextP && roundTextP instanceof HTMLElement) {
      const text = roundTextP.innerText;
      const chars = text.split("");
      roundTextP.innerHTML = chars
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
        )
        .join("");
    }

    const arrowTl = gsap.timeline({
      yoyo: true,
      repeat: -1,
    });

    arrowTl.fromTo(
      ".arrowDown",
      { y: -10 },
      { y: 10, duration: 1, ease: "power1.inOut" }
    );

    return () => {
      arrowTl.kill();
    };
  }, []);

  const currentImage = `/images/${images[imageIndex]}`;

  return (
    <section className="hero-section">
      <div className="container">
        <div className="text-content">
          <div className="t1">
            <h2>
              <span>
                FRONT-END
                <br />
                DEVELOPER
              </span>
            </h2>
            <div className="images">
              <img alt={images[imageIndex]} src={currentImage} />
            </div>
          </div>
          <h2>
            PASSIONATE ABOUT
            <br />
            CRAFTING<span> SUPERB</span>
            <br />
            WEB EXPERIENCES
          </h2>
        </div>
        <div className="scroller">
          <div className="bg">
            <div className="circle">
              <img
                alt="arrow down"
                className="arrowDown"
                src="/svgs/arrowDown.svg"
                style={{ width: "auto" }}
              />
              <div className="roundText" id="text">
                <p>SCROLL DOWN FOR MORE . SCROLL DOWN FOR MORE .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
