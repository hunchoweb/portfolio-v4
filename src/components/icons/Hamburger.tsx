"use client";

import React from "react";
import styles from "./Hamburger.module.scss";

interface HamburgerProps {
  active: boolean;
  onClick?: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ active, onClick }) => {
  return (
    <div
      className={`${styles.hamburgerIcon} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
      <div className={styles.line3}></div>
    </div>
  );
};

export default Hamburger;
