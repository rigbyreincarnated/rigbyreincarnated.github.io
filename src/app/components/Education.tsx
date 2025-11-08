import type { Education } from "@/types/resume";

type EducationProps = {
  education: Education;
};

export default function EducationList({ education }: EducationProps) {
  return (
    <dl>
      <dt>{education.school}</dt>
      <dd>{education.degree}</dd>
      <dd>{education.graduation_date}</dd>
    </dl>
  );
}