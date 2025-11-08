import Image from "next/image";

type HeaderProps = {
  name: string;
  tagline: string;
  headshot: string;
};

export default function Header({ name, tagline, headshot }: HeaderProps) {
  return (
    <header>
      <Image src={headshot} alt={name} width={150} height={150} />
      <h1>{name}</h1>
      <p>{tagline}</p>
    </header>
  );
}