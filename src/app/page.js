import Image from "next/image";
import TitleSection from "@/components/TitleSection";
import LinkButton from "@/components/LinkButton";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SkillTabContent from "@/components/SkillTabContent";

export default function Home() {
  return (
    <main className="p-4">
      <header className="break-all py-8 text-center">
        <h1 className="main-title-logo text-[2rem]">ThesllaDev</h1>
        <h2 className="secondary-title-logo mt-2 text-[2rem]">
          Desenvolvedor Front-end
        </h2>
        <hr className="mx-auto h-[3px] max-w-3xl bg-red text-red blur-[1px]" />
      </header>
      <section className="flex flex-col items-center" id="about">
        <header className="flex flex-col items-center p-4">
          <Image
            src="/img/me-profile-photo.png"
            className="object-neon-glow border-2 border-dashed border-red"
            alt="theslla profile photo"
            width={100}
            height={100}
          />
          <h2 className="mb-4 mt-8 text-center text-2xl">
            Olá! Meu nome é Thalles Augusto
          </h2>
          <TitleSection text="Sobre mim" />
        </header>
        <article className="mb-4">
          <p className="max-w-prose text-center font-sans">
            Desenvolvedor com foco em Front-End, com conhecimentos de Back-End e
            fundamentos de cyber segurança, em constante evolução, apaixonado
            por tecnologia e transformar designs em websites funcionais. Focado
            na resolução de problemas, inclusão, acessibilidade, usabilidade e
            responsividade. Entusiasta de gamificação e open source, sempre
            buscando aprender e contribuir para projetos inovadores
          </p>
        </article>
        <footer className="m-4 flex gap-4 text-black">
          <LinkButton
            textLink="LinkedIn"
            urlLink="https://linkedin.com/in/thalles-augusto/"
          />
          <LinkButton
            textLink="GitHub"
            urlLink="https://github.com/ThesllaDev"
          />
        </footer>
      </section>
      <section id="projects" className="flex flex-wrap justify-center gap-4">
        <header className="flex w-full flex-col items-center p-4">
          <TitleSection text="Projetos" />
        </header>
        <ProjectCard projectsDatas={projects} />
      </section>
      <section id="skills">
        <header className="flex w-full flex-col items-center p-4">
          <TitleSection text="Habilidades" />
        </header>
        <SkillTabContent />
      </section>
      <section id="contacts">
        <header className="flex w-full flex-col items-center p-4">
          <TitleSection text="Contato" />
        </header>
        <ul className="flex w-full flex-col items-center justify-center gap-6 text-black">
          <li>
            <LinkButton
              textLink="LinkedIn"
              urlLink="https://linkedin.com/in/thalles-augusto/"
            />
          </li>
          <li>
            <LinkButton
              textLink="Gmail"
              urlLink="https://github.com/ThesllaDev"
            />
          </li>
        </ul>
        <h3 className="p-4 text-center text-xl">Conecte-se comigo</h3>
        <ul className="flex w-full flex-col items-center justify-center gap-6 text-black">
          <li>
            <LinkButton
              textLink="GitHub"
              urlLink="https://linkedin.com/in/thalles-augusto/"
            />
          </li>
          <li>
            <LinkButton
              textLink="Codepen"
              urlLink="https://github.com/ThesllaDev"
            />
          </li>
          <li>
            <LinkButton
              textLink="Dev.to"
              urlLink="https://github.com/ThesllaDev"
            />
          </li>
        </ul>
      </section>
    </main>
  );
}
