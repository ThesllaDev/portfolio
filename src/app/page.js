"use client";
import Image from "next/image";
import { useState } from "react";
import TitleSection from "@/components/TitleSection";
import LinkButton from "@/components/LinkButton";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SkillTabContent from "@/components/SkillTabContent";

export default function Home() {
  const [imageHovered, setImageHovered] = useState(false);

  const imageSrc = imageHovered
    ? "/img/my-octocat.png"
    : "/img/me-profile-photo.png";
  const neonGlowStyle = imageHovered
    ? "object-neon-glow"
    : "object-neon-glow-white";

  return (
    <main className="p-4">
      <header className="break-all py-8 text-center text-[2rem]">
        <h1 className="main-title-logo">
          Theslla<span>Dev</span>
        </h1>
        <h2 className="secondary-title-logo mt-2">
          Desenvolvedor Front<span>-end</span>
        </h2>
        <hr className="h-[3px] bg-red text-red blur-[1px] md:mx-auto md:max-w-3xl" />
      </header>
      <section className="flex flex-col items-center" id="about">
        <header className="flex flex-col items-center py-4">
          <Image
            src={imageSrc}
            className={`border-4 border-double border-white duration-300 hover:border-red ${neonGlowStyle}`}
            alt="theslla profile photo"
            width={100}
            height={100}
            onMouseEnter={() => setImageHovered(true)}
            onMouseLeave={() => setImageHovered(false)}
          />
          <h2 className="mb-4 mt-8 text-center text-2xl">
            Olá! Meu nome é Thalles Augusto
          </h2>
          <TitleSection text="Sobre mim" />
        </header>
        <article className="mb-4">
          <p className="text-center font-firaCode sm:max-w-prose">
            Fascinado por tecnologia e jogos desde criança, comecei a aprofundar
            meus conhecimentos em desenvolvimento web com foco em front-end na
            vida adulta. Adquiri experiência estudando conteúdos de diversas
            formas, através de documentações técnicas, artigos, tutoriais e
            vídeos, aplicando os conhecimentos de forma prática desenvolvendo
            vários projetos no processo. Com uma base sólida em HTML5, CSS3, e
            JavaScript, tanto na forma vanilla quanto em bibliotecas e
            frameworks como Tailwind CSS, React, e Next.js, busco criar
            interfaces que seguem padrões, metodologias, e boas práticas,
            combinando design moderno com alta performance, usabilidade,
            responsividade e acessibilidade.
          </p>
          <p className="text-center font-firaCode sm:max-w-prose">
            Também possuo conhecimentos em UI/UX, back-end e fundamentos de
            cibersegurança. Sou entusiasta de gamificação e open source, sempre
            buscando evoluir e colaborar ativamente em projetos open source para
            aprimorar minhas habilidades e contribuir com melhorias.
          </p>
        </article>
        <footer className="m-4 flex gap-4 text-black">
          <LinkButton
            textLink="LinkedIn"
            urlLink="https://linkedin.com/in/thalles-augusto/"
          />
          <LinkButton
            textLink="Resume"
            urlLink="https://drive.google.com/file/d/1sIJ2pqV7iGGgcU8DLHeCy6eNZ1QCTv_D/view"
          />
        </footer>
      </section>
      <section id="projects" className="flex flex-wrap justify-center gap-4">
        <header className="flex w-full flex-col items-center p-4">
          <TitleSection text="Projetos" />
          <p className="max-w-prose text-center font-firaCode">
            Explore meus projetos de desenvolvimento web com código aberto e
            demonstração ao vivo, criando soluções funcionais conforme os
            estudos das tecnologias
          </p>
        </header>
        <ProjectCard projectsDatas={projects} />
      </section>
      <section id="skills">
        <header className="flex flex-col items-center p-4">
          <TitleSection text="Habilidades" />
          <p className="max-w-prose text-center font-firaCode">
            Descubra minhas competências técnicas e interpessoais, incluindo
            boas práticas, acessibilidade, optimização, desempenho, usabilidade
            e práticas ágeis desde a prototipagem e design até o desenvolvimento
            front-end
          </p>
        </header>
        <SkillTabContent />
      </section>
      <section id="contacts">
        <header className="flex flex-col items-center p-4">
          <TitleSection text="Contato" />
          <p className="max-w-prose text-center font-firaCode">
            Entre em contato para networking, troca de idéias, discussão de
            oportunidades ou esclarecimento de dúvidas. Ficarei feliz em
            colaborar!
          </p>
        </header>
        <ul className="flex flex-col items-center gap-6 text-black">
          <li>
            <LinkButton
              textLink="LinkedIn"
              urlLink="https://linkedin.com/in/thalles-augusto/"
            />
          </li>
          <li>
            <LinkButton
              textLink="Gmail"
              urlLink="mailto:ThesllaDev@gmail.com"
            />
          </li>
        </ul>
        <h3 className="p-4 text-center text-xl">Conecte-se comigo</h3>
        <ul className="flex flex-col items-center gap-6 text-black">
          <li>
            <LinkButton
              textLink="GitHub"
              urlLink="https://github.com/ThesllaDev"
            />
          </li>
          <li>
            <LinkButton
              textLink="Codepen"
              urlLink="https://codepen.io/theslladev"
            />
          </li>
          <li>
            <LinkButton textLink="Dev.to" urlLink="https://dev.to/theslladev" />
          </li>
        </ul>
      </section>
    </main>
  );
}
