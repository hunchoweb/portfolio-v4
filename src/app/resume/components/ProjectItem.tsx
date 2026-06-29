import type { ProjectEntry } from "../resumeData";
import styles from "../resume.module.scss";

export default function ProjectItem({ name, description, stack }: ProjectEntry) {
  return (
    <article className={styles.projectItem}>
      <h3 className={styles.projectName}>{name}</h3>
      <p className={styles.projectDesc}>{description}</p>
      <p className={styles.projectStack}>{stack}</p>
    </article>
  );
}
