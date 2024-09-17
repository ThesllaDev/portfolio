import { hardSkills } from "@/data/skills";
import Accordion from "./Accordion";
import SubTitleSection from "./SubTitleSection";

export default function SkillList({ skillDatas }) {
  return (
    <section className="flex flex-wrap gap-4 py-4 sm:justify-center">
      {skillDatas === hardSkills ? (
        <>
          <header className="w-full py-4 text-center">
            <h3 className="text-2xl">Principais conhecimentos</h3>
            <h4 className="text-xl">Desenvolvimento Front-end:</h4>
          </header>
          {skillDatas.mainSkills[0].frontDevelopment.map((skill) => (
            <Accordion key={skill.name} skillDatas={skill} />
          ))}

          <SubTitleSection title="Design e Prototipação:" />
          {skillDatas.mainSkills[0].designPrototypes.map((skill) => (
            <Accordion key={skill.name} skillDatas={skill} />
          ))}

          <SubTitleSection title="Ferramentas de desenvolvimento:" />
          {skillDatas.mainSkills[0].devTools.map((skill) => (
            <Accordion key={skill.name} skillDatas={skill} />
          ))}

          <div className="w-full py-4 text-center">
            <h3 className="text-2xl">Outros conhecimentos</h3>
            <h4 className="text-xl">Desenvolvimento Front-end:</h4>
          </div>
          {skillDatas.otherSkills[0].frontDevelopment.map((skill) => (
            <Accordion key={skill.name} skillDatas={skill} />
          ))}

          <SubTitleSection title="Ferramentas de desenvolvimento:" />
          {skillDatas.otherSkills[0].devTools.map((skill) => (
            <Accordion key={skill.name} skillDatas={skill} />
          ))}

          <SubTitleSection title="Desenvolvimento Back-end:" />
          {skillDatas.otherSkills[0].backDevelopment.map((skill) => (
            <Accordion key={skill.name} skillDatas={skill} />
          ))}
        </>
      ) : (
        skillDatas.map((skill) => (
          <article key={skill.term} className="w-full max-w-xl">
            <h3 className="flex items-center gap-2 border-b bg-white p-2 text-lg font-bold text-red">
              {skill.term}
            </h3>
            <details name="skills">
              <summary className="cursor-pointer bg-white p-2 font-firaCode text-sm text-black delay-75 duration-75 hover:bg-red hover:text-white">
                <strong>Mais detalhes</strong>
              </summary>
              <dl className="border-4 border-double p-2">
                <dt className="font-bold">{skill.term}</dt>
                <dd className="mb-2 font-firaCode">{skill.description}</dd>
              </dl>
            </details>
          </article>
        ))
      )}
    </section>
  );
}
