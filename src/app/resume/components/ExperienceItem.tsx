import type { ExperienceEntry } from "../resumeData";
import styles from "../resume.module.scss";

const highlightedTech = [
  "TanStack Query",
  "Redux Toolkit",
  "Umbraco CMS",
  "TypeScript",
  "Next.js",
  "React",
  "GSAP",
  "Vitest",
];

function emphasizeTechnology(text: string) {
  const match = highlightedTech.find((tech) => text.includes(tech));

  if (!match) {
    return text;
  }

  const [before, after] = text.split(match, 2);

  return (
    <>
      {before}
      <strong>{match}</strong>
      {after}
    </>
  );
}

export default function ExperienceItem({
  company,
  role,
  location,
  period,
  bullets,
}: ExperienceEntry) {
  return (
    <article className={styles.experienceItem}>
      <div className={styles.expHead}>
        <h3 className={styles.expRole}>{role}</h3>
        <span className={styles.expPeriod}>{period}</span>
      </div>
      <p className={styles.expMeta}>
        <span className={styles.expCompany}>{company}</span>
        <span className={styles.expLocation}>{location}</span>
      </p>
      <ul className={styles.bullets}>
        {bullets.map((bullet, i) => (
          <li key={i}>{emphasizeTechnology(bullet)}</li>
        ))}
      </ul>
    </article>
  );
}
