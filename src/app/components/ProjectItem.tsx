import Image from "next/image";
import type { Project } from "@/types/resume";

type ProjectItemProps = {
  project: Project;
};

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <article>
      <Image src={project.image} alt={project.title} width={100} height={100} />
      <div>
        <h3>{project.title}</h3>
        <ul>
          {project.descr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}