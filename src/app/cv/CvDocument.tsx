import type { CvData, ExperienceEntry } from "./cvData";
import styles from "./cv.module.scss";
import PrintButton from "./PrintButton";

const highlightedTerms = [
  "Application Support",
  "Production Support",
  "Incident Management",
  "Root Cause Analysis",
  "Application Monitoring",
  "User Support",
  "SQL",
  "REST APIs",
  "Postman",
  "TanStack Query",
  "Redux Toolkit",
  "TypeScript",
  "Umbraco CMS",
  "ScrollTrigger",
  "OpenAPI",
  "Next.js",
  "React",
  "GSAP",
  "Vitest",
  "Web3.js",
  "Node.js",
  "WordPress",
  "Gatsby",
];

function emphasizeTechnology(text: string, keyPrefix = "text") {
  const match = highlightedTerms.find((term) => text.includes(term));

  if (!match) {
    return text;
  }

  const [before, after] = text.split(match, 2);

  return (
    <>
      {before}
      <strong key={`${keyPrefix}-${match}`}>{match}</strong>
      {after}
    </>
  );
}

function renderFormattedText(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return (
      <span key={`${part}-${index}`}>
        {emphasizeTechnology(part, `${index}`)}
      </span>
    );
  });
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionLabel}>{label}</h2>
      {children}
    </section>
  );
}

function ExperienceItem({
  company,
  context,
  location,
  website,
  websiteUrl,
  role,
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
        {context ? <span className={styles.expContext}>{context}</span> : null}
        <span className={styles.expLocation}>{location}</span>
        {website ? (
          <a
            className={styles.expWebsite}
            href={websiteUrl ?? `https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </a>
        ) : null}
      </p>
      <ul className={styles.bullets}>
        {bullets.map((bullet) => (
          <li key={bullet}>{renderFormattedText(bullet)}</li>
        ))}
      </ul>
    </article>
  );
}

function Header({ cv }: { cv: CvData }) {
  const portfolio = cv.links.find((link) => link.label === "Portfolio");
  const github = cv.links.find((link) => link.label === "GitHub");
  const linkedin = cv.links.find((link) => link.label === "LinkedIn");
  const orderedLinks = [portfolio, github, linkedin].filter(Boolean);

  return (
    <div className={styles.header}>
      <div className={styles.identity}>
        <h1 className={styles.name}>{cv.name}</h1>
        <div className={styles.titleBlock}>
          <p className={styles.role}>{cv.title}</p>
          <p className={styles.tagline}>{cv.tagline}</p>
        </div>
      </div>

      <div className={styles.contact}>
        <div className={styles.contactRow}>
          <span className={styles.contactItem}>{cv.location}</span>
          <a
            className={styles.contactItem}
            href={`tel:${cv.phone.replace(/\s+/g, "")}`}
          >
            {cv.phone}
          </a>
          <a className={styles.contactItem} href={`mailto:${cv.email}`}>
            {cv.email}
          </a>
        </div>

        <div className={styles.contactRow}>
          {orderedLinks.map((link) =>
            link ? (
              <a
                key={link.label}
                className={styles.contactItem}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.contactLabel}>{link.label}</span>
                {link.display}
              </a>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default function CvDocument({ cv }: { cv: CvData }) {
  const pageOneExperience = cv.experience.slice(0, 2);
  const pageTwoExperience = cv.experience.slice(2);

  return (
    <div className={styles.page}>
      <PrintButton />

      <main className={styles.sheetStack}>
        <section className={styles.paper}>
          <Header cv={cv} />

          <div className={styles.cvGrid}>
            <div className={styles.main}>
              <Section label="Professional Summary">
                <div className={styles.summary}>
                  {cv.summary.map((paragraph) => (
                    <p key={paragraph}>{renderFormattedText(paragraph)}</p>
                  ))}
                </div>
              </Section>

              <Section label="Work Experience">
                {pageOneExperience.map((entry) => (
                  <ExperienceItem key={entry.company} {...entry} />
                ))}
              </Section>
            </div>

            <aside className={styles.aside}>
              <Section label="Core Expertise">
                <p className={styles.expertise}>{cv.expertise}</p>
              </Section>

              <Section label="Technical Skills">
                <div className={styles.skillGroups}>
                  {cv.skills.map((group) => (
                    <p key={group.label} className={styles.skillGroup}>
                      <strong>{group.label}</strong>
                      {group.items}
                    </p>
                  ))}
                </div>
              </Section>
            </aside>
          </div>
        </section>

        <section className={`${styles.paper} ${styles.paperContinued}`}>
          <div className={styles.continuedHeader}>
            <span>{cv.name}</span>
            <span>Curriculum Vitae</span>
          </div>

          <div className={styles.cvGrid}>
            <div className={styles.main}>
              <div className={styles.experienceContinuation}>
                {pageTwoExperience.map((entry) => (
                  <ExperienceItem key={entry.company} {...entry} />
                ))}
              </div>
            </div>

            <aside className={styles.aside}>
              <Section label="Career Highlights">
                <ul className={styles.compactBullets}>
                  {cv.highlights.map((highlight) => (
                    <li key={highlight}>{renderFormattedText(highlight)}</li>
                  ))}
                </ul>
              </Section>

              <Section label="Education">
                <article className={styles.eduItem}>
                  <h3 className={styles.eduQual}>
                    {cv.education.qualification}
                  </h3>
                  <p className={styles.eduMeta}>
                    {cv.education.institution} | {cv.education.period}
                  </p>
                </article>
              </Section>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
