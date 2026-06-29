import type { Metadata } from "next";
import { resume } from "./resumeData";
import styles from "./resume.module.scss";
import ResumeHeader from "./components/ResumeHeader";
import Section from "./components/Section";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";
import SkillList from "./components/SkillList";
import PrintButton from "./components/PrintButton";

export const metadata: Metadata = {
  title: {
    absolute: `${resume.name} Resume`,
  },
  description: resume.summary,
};

export default function ResumePage() {
  return (
    <div className={styles.page}>
      <PrintButton />

      <main className={styles.paper}>
        <ResumeHeader
          name={resume.name}
          title={resume.title}
          tagline={resume.tagline}
          location={resume.location}
          email={resume.email}
          phone={resume.phone}
          links={resume.links}
        />

        <p className={styles.hero}>{resume.hero}</p>

        <div className={styles.body}>
          <div className={styles.main}>
            <Section label="Summary">
              <p>{resume.summary}</p>
            </Section>

            <Section label="Experience">
              {resume.experience.map((entry) => (
                <ExperienceItem key={entry.company} {...entry} />
              ))}
            </Section>
          </div>

          <aside className={styles.aside}>
            <Section label="Skills">
              <SkillList skills={resume.skills} />
            </Section>

            <Section label="Selected Projects">
              {resume.projects.map((project) => (
                <ProjectItem key={project.name} {...project} />
              ))}
            </Section>

            <Section label="Education">
              {resume.education.map((entry) => (
                <article key={entry.institution} className={styles.eduItem}>
                  <h3 className={styles.eduQual}>{entry.qualification}</h3>
                  <p className={styles.eduField}>{entry.field}</p>
                  <p className={styles.eduMeta}>
                    {entry.institution} · {entry.period}
                  </p>
                </article>
              ))}
            </Section>
          </aside>
        </div>
      </main>
    </div>
  );
}
