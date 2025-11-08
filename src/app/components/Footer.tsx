import Link from "next/link";
import type { Contact } from "@/types/resume";

type FooterProps = {
  contact: Contact;
  name: string;
};

export default function Footer({ contact, name }: FooterProps) {
  return (
    <footer>
      <p>
        <Link href="/contact">{name}</Link>
      </p>
      <p>{contact.address}</p>
      <p>{contact.phone}</p>
      <p>
        <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
      </p>
      <p>
        <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </Link>
      </p>
    </footer>
  );
}