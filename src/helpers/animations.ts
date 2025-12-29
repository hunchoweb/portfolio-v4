
import { gsap } from "gsap";

// Call this function early to set initial states before animations
export function initAnimationStates() {
  gsap.set(".hero-section .text-content *", {
    y: "70%",
    opacity: 0,
  });
  
  gsap.set(".scroller", { x: "150%" });

  gsap.set(".about-section .section-header", {
    x: "-100%",
  });
}

export function loadComplete() {
  const loadCompleteTl = gsap.timeline();
  loadCompleteTl
    .to(".preloader-section", {
      y: "-100%",
      delay: 0.5,
    })
    .to(
      ".curtain-1",
      {
        y: "-100%",
        delay: 0.6,
      },
      0
    )
    .to(
      ".curtain-2",
      {
        y: "-100%",
        delay: 0.7,
      },
      0
    )
    .to(
      ".hero-section .text-content *",
      {
        y: "0%",
        opacity: 1,
        duration: 1.5,
        delay: 0.8,
        ease: "power3.out",
      },
      0
    )
    .to(
      ".scroller",
      {
        x: 0,
        delay: 1,
        duration: 1,
        ease: "power3.out",
      },
      0
    )
    .to(
      ".about-section .section-header",
      {
        x: 0,
        delay: 1,
        duration: 1.5,
        ease: "power3.out",
      },
      0
    );
}
