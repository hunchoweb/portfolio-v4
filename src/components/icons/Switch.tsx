"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Switch.module.scss";

const Switch = () => {
  const [active, setActive] = useState(true);

  const toggle = () => {
    setActive(!active);
    document.body.classList.toggle("light");
  };

  return (
    <div onClick={toggle} className={styles.switchIcon}>
      <div className={styles.sun}>
        <Image alt="sun-icon" src="/svgs/sun.svg" width={30} height={30} />
      </div>
      <div className={styles.moon}>
        <Image alt="moon-icon" src="/svgs/moon.svg" width={30} height={30} />
      </div>
      <div className={`${styles.ball} ${active ? styles.active : ""}`}></div>
    </div>
  );
};

export default Switch;
