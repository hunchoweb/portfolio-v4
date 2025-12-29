"use client";

import React, { useEffect } from "react";
import SectionHeader from "../components/SectionHeader";
import styles from "./Preloader.module.scss";
import { loadComplete, initAnimationStates } from "@/helpers/animations";
import { gsap } from "gsap";
import imagesLoaded from "imagesloaded";

const Preloader: React.FC = () => {
  useEffect(() => {
    initAnimationStates();

    const imageLoad = imagesLoaded(document.querySelectorAll("img"));
    const count = document.querySelector("#counter");
    const progressBar = document.querySelector("#loading-bar");
    const images = document.querySelectorAll("img").length;
    let loadedCount = 0;

    const loadingTl = gsap.timeline({
      paused: false,
      onUpdate: countPercent,
      onComplete: loadComplete,
    });

    if (images === 0) {
      loadingTl.to(progressBar, {
        width: "100%",
        duration: 2,
        ease: "easeInOut",
      });
    } else {
      loadingTl.to(progressBar, {
        width: "100%",
        duration: 2,
        ease: "easeInOut",
      });
    }

    imageLoad.on("progress", () => {
      loadedCount++;
      const loadingProgress = loadedCount / images;
      gsap.to(loadingTl, {
        progress: loadingProgress,
        duration: 2,
        overwrite: true,
      });
    });

    function countPercent() {
      if (count) {
        const newPercent = (loadingTl.progress() * 100).toFixed();
        count.innerHTML = newPercent + "%";
      }
    }
  }, []);

  return (
    <>
      <section className={`${styles.preloaderSection} preloader-section`}>
        <SectionHeader text="Loading" />
        <div className={styles.container}>
          <div className={styles.loaderContainer}>
            <div className={styles.text}>
              <p>Cooking...</p>
            </div>
            <div className={styles.loader}>
              <div id="loading-bar" className={styles.loadingBar}></div>
            </div>
            <span id="counter">0%</span>
          </div>
        </div>
      </section>
      <section className={`${styles.curtain} curtain-1`}></section>
      <section className={`${styles.curtain2} curtain-2`}></section>
    </>
  );
};

export default Preloader;
