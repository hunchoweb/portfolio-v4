"use client";

import React, { useState, useEffect } from "react";
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
                ODUNAYO
                <br />
                OJOWA
              </span>
            </h2>
            <div className="images">
              <Image
                alt={images[imageIndex]}
                src={currentImage}
                width={250}
                height={250}
                priority
              />
            </div>
          </div>
          <h2>
            FRONT-END ENGINEER
            <br />
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
              <Image
                alt="arrow down"
                className="arrowDown"
                src="/svgs/arrowDown.svg"
                width={16}
                height={16}
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
