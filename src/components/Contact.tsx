"use client";

import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  const [email] = useState(["OJOWA", "AYOMIDE@GMAIL.COM"]);
  const [text, setText] = useState("CLICK TO COPY EMAIL");

  const copyEmail = () => {
    const emailString = (email[0] + email[1]).toLowerCase();
    navigator.clipboard.writeText(emailString);
    setText("EMAIL COPIED !");
    setTimeout(() => {
      setText("CLICK TO COPY EMAIL");
    }, 2000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section">
        <div className="container">
          <div className="socials">
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/hunchoweb"
                  rel="noreferrer"
                >
                  TWITTER
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  />
                </svg>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/odunayo-ojowa-66763b192/"
                  rel="noreferrer"
                >
                  LINKEDIN
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  />
                </svg>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/hunchoweb"
                  rel="noreferrer"
                >
                  GITHUB
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  />
                </svg>
              </li>
            </ul>
          </div>

          <div className="footer">
            <div className="email-container">
              <div className="copy-text">
                <p>{text}</p>
              </div>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  copyEmail();
                }}
                className="email"
              >
                <h2>{email[0]}</h2>
                <h2>{email[1]}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionHeader text="CONTACT" />
    </section>
  );
};

export default Contact;
