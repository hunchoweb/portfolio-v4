"use client";

import Preloader from "@/components/Preloader";
import Topbar from "@/components/Topbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Spotify from "@/components/Spotify";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Preloader />
      <Topbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Spotify />
    </main>
  );
}
