"use client";

import React, { useEffect, useRef } from "react";
import Switch from "./icons/Switch";
import { gsap } from "gsap";
import styles from "./MobileNav.module.scss";
import { useLenis } from "@/contexts/LenisContext";

interface MobileNavProps {
  active: boolean;
  toggleActive: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ active, toggleActive }) => {
  const lenis = useLenis();
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    gsap.set(`.${styles.mobileNavSection}`, { left: "100%" });

    timeline.current = gsap.timeline({ paused: true });

    timeline.current
      .to(`.${styles.mobileNavSection}`, {
        left: "0%",
        duration: 0.5,
        ease: "power2.inOut",
      })
      .from(
        `.${styles.mobileNav} .${styles.controls} .${styles.navLinks} .${styles.navLink}`,
        {
          x: "70%",
          opacity: 0,
          stagger: { amount: 0.2 },
        }
      )
      .from(
        `.${styles.mobileNav} .${styles.footer}, .${styles.mobileNav} .${styles.headerButtons}`,
        {
          y: "70%",
          opacity: 0,
          stagger: {
            amount: 0.2,
          },
        },
        0.8
      );
  }, []);

  useEffect(() => {
    if (timeline.current) {
      if (active) {
        timeline.current.play();
      } else {
        timeline.current.reverse();
      }
    }
  }, [active]);

  const handleScrollTo = (target: string) => {
    toggleActive();
    lenis?.scrollTo(target);
  };

  return (
    <section className={styles.mobileNavSection}>
      <div className={styles.mobileNav}>
        <div className={styles.controls}>
          <div className={styles.navLinks}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("#work");
              }}
              className={styles.navLink}
            >
              WORK
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("#skills");
              }}
              className={styles.navLink}
            >
              SKILLS
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("#contact");
              }}
              className={styles.navLink}
            >
              CONTACT
            </a>
          </div>
          <div className={styles.headerButtons}>
            <a
              target="_blank"
              href="/OjowaResume.pdf"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn btn_download">
                <span>DOWNLOAD RESUME</span>
              </button>
            </a>
          </div>
        </div>

        <div className={styles.footer}>
          <p>THEME</p>
          <div className={styles.switchWrapper}>
            <Switch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileNav;
