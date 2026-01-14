"use client";

import React from "react";
import Link from "next/link"; 
import resumeData from "../resume.json";
import type { Resume } from "@/types/resume";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const resume = resumeData as Resume;

export default function ContactPage() {
  const { contact, name } = resume;

  return (
    <>
      <Nav context="contact" name={name} />
      <main>
        <section>
          <h2>Contact</h2>

          <p>
            Email: <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
          </p>
          <p>Phone: {contact.phone}</p>
          <p>
            LinkedIn:{" "}
            <Link
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.linkedin}
            </Link>
          </p>

          <form
            method="POST"
            action={`https://formsubmit.co/${contact.email}`}
          >
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <Footer contact={contact} name={resume.name} />
    </>
  );
}