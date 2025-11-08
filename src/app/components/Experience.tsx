import React from "react";
import type { ExperienceItem } from "@/types/resume";
import Link from "next/link";

type ExperienceProps = {
  experience: ExperienceItem[];
};

export default function Experience({ experience }: ExperienceProps) {
  return (
    <dl>
      {experience.map((item, index) => (
        <React.Fragment key={index}>
          <dt>
            {item.link ? (
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                {item.position}
              </Link>
            ) : (
              item.position
            )}
          </dt>
          <dd>{item.date}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}