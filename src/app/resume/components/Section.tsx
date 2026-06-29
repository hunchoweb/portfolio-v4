import type { ReactNode } from "react";
import styles from "../resume.module.scss";

interface SectionProps {
  label: string;
  children: ReactNode;
}

/** A titled block with a small uppercase label and a thin trailing rule. */
export default function Section({ label, children }: SectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionLabel}>{label}</h2>
      {children}
    </section>
  );
}
