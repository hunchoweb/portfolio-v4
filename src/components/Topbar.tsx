"use client";

import React, { useState, useEffect } from "react";
import Switch from "./icons/Switch";
import Hamburger from "./icons/Hamburger";
import MobileNav from "./MobileNav";
import { useLenis } from "@/contexts/LenisContext";
import styles from "./Topbar.module.scss";

const Topbar = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const lenis = useLenis();

  const toggleNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  const toggleLight = () => {
    document.body.classList.toggle("light");
  };

  const handleScrollTo = (target: string) => {
    lenis?.scrollTo(target);
  };

  return (
    <>
      <header className={`${mobileNavActive ? "fixed" : ""}`}>
        <div className="header container">
          <div className="logo" style={{ flexGrow: 1 }}>
            <p>ODUNAYOMIDE.</p>
          </div>

          <div className="controls">
            <div className="nav-links">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("#work");
                }}
                className="nav-link"
              >
                WORK
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("#skills");
                }}
                className="nav-link"
              >
                SKILLS
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("#contact");
                }}
                className="nav-link"
              >
                CONTACT
              </a>
            </div>

            <div className="header-buttons">
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

            <div className="switch" style={{ marginRight: "2rem" }}>
              {" "}
              <Switch />
            </div>

            <div onClick={toggleNav} className="hamburger">
              <Hamburger active={mobileNavActive} />
            </div>
          </div>
        </div>
      </header>
      <MobileNav active={mobileNavActive} toggleActive={toggleNav} />
    </>
  );
};

export default Topbar;
