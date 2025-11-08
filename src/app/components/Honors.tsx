import type { Honor } from "@/types/resume";
import React from "react";

type HonorsProps = {
  honors: Honor[];
};

export default function Honors({ honors }: HonorsProps) {
  if (!honors || honors.length === 0) {
    return null;
  }

  return (
    <dl>
      {honors.map((item, index) => (
        <React.Fragment key={index}>
          <dt>{item.honor}</dt>
          <dd>{item.date}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}