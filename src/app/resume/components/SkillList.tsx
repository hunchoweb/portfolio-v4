import styles from "../resume.module.scss";

interface SkillListProps {
  skills: string[];
}

export default function SkillList({ skills }: SkillListProps) {
  return (
    <ul className={styles.skillList}>
      {skills.map((skill) => (
        <li key={skill} className={styles.skill}>
          {skill}
        </li>
      ))}
    </ul>
  );
}
