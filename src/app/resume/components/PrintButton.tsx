"use client";

import styles from "../resume.module.scss";

/** Screen-only control that opens the browser print / "Save as PDF" dialog. */
export default function PrintButton() {
  return (
    <div className={styles.toolbar}>
      <button
        type="button"
        className={styles.download}
        onClick={() => window.print()}
      >
        <span aria-hidden="true">↓</span>
        Download PDF
      </button>
    </div>
  );
}
