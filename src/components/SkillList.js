import { hardSkills } from "@/data/skills";
import technologyIconCode from "@/data/technologyIconCode";
import Icon from "@/components/Icon";

export default function SkillList({ skillDatas }) {
  return (
    <section className="flex flex-wrap gap-4 py-4 sm:justify-center">
      {skillDatas.map((skill) => (
        <article key={skill.name} className="w-full max-w-xl">
          <h3 className="flex items-center gap-2 border-b bg-white p-2 text-lg font-bold text-red">
            {skillDatas === hardSkills && (
              <Icon iconCode={technologyIconCode[skill.name]} />
            )}
            {skill.name}
          </h3>
          <details name="skills">
            <summary className="cursor-pointer bg-white p-2 text-sm text-black hover:bg-red hover:text-white">
              <strong>
                {skillDatas === hardSkills
                  ? `Detalhes sobre ${skill.name}`
                  : "Mais detalhes"}
              </strong>
            </summary>
            <dl className="border-4 border-double p-2">
              {skill.skills.map((skillName) => (
                <div key={skillName.term}>
                  <dt className="font-bold">{skillName.term}</dt>
                  <dd className="mb-2 font-firaCode">
                    {skillName.description}
                  </dd>
                </div>
              ))}
            </dl>
          </details>
        </article>
      ))}
    </section>
  );
}
