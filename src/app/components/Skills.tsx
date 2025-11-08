type SkillsProps = {
  skills: string[];
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}