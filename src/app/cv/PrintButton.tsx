"use client";

import styles from "./cv.module.scss";

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
