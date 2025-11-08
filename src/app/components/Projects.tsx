import type { Project } from "@/types/resume";
import ProjectItem from "./ProjectItem";

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </div>
  );
}