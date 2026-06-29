import type { ContactLink } from "../resumeData";
import styles from "../resume.module.scss";

interface ResumeHeaderProps {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  links: ContactLink[];
}

export default function ResumeHeader({
  name,
  title,
  tagline,
  location,
  email,
  phone,
  links,
}: ResumeHeaderProps) {
  const portfolio = links.find((link) => link.label === "Portfolio");
  const github = links.find((link) => link.label === "GitHub");
  const linkedin = links.find((link) => link.label === "LinkedIn");
  const orderedLinks = [portfolio, github, linkedin].filter(
    (link): link is ContactLink => Boolean(link)
  );

  return (
    <div className={styles.header}>
      <div className={styles.identity}>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.titleBlock}>
          <p className={styles.role}>{title}</p>
          <p className={styles.tagline}>{tagline}</p>
        </div>
      </div>

      <div className={styles.contact}>
        <div className={styles.contactRow}>
          <span className={styles.contactItem}>{location}</span>
          <a
            className={styles.contactItem}
            href={`tel:${phone.replace(/\s+/g, "")}`}
          >
            {phone}
          </a>
          <a className={styles.contactItem} href={`mailto:${email}`}>
            {email}
          </a>
        </div>

        <div className={styles.contactRow}>
          {orderedLinks.map((link) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
