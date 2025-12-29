"use client";

import React from "react";
import Arrow from "./icons/Arrow";
import styles from "./SectionHeader.module.scss";

interface SectionHeaderProps {
  text: string;
  orientation?: "vertical" | "horizontal";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text, orientation }) => {
  const content = (
    <>
      <div>
        <h1>
          <span>{text}</span>
        </h1>
        <Arrow className={styles.arrow} color="#242424" />
      </div>
      <div>
        <h1>{text}</h1>
        <Arrow className={styles.arrow} color="white" />
      </div>
      <div>
        <h1>
          <span>{text}</span>
        </h1>
        <Arrow className={styles.arrow} color="#242424" />
      </div>
      <div>
        <h1>{text}</h1>
        <Arrow className={styles.arrow} color="white" />
      </div>
    </>
  );

  return (
    <div
      className={`${styles.sectionHeader} section-header ${
        orientation === "vertical" ? styles.vertical : ""
      }`}
      id={`section-${text}`}
    >
      <div className={`${styles.content} content`} id={`content-${text}`}>
        {content}
        {content}
      </div>
    </div>
  );
};

export default SectionHeader;
