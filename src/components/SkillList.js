import { hardSkills } from "@/data/skills";
import technologyIconCode from "@/data/technologyIconCode";
import Icon from "@/components/Icon";

export default function SkillList({ skillDatas }) {
  return (
    <dl className="flex flex-wrap gap-4 py-4 sm:justify-center">
      {skillDatas.map((skill) => (
        <div key={skill.term}>
          <dt className="flex items-center gap-2 text-red">
            {skillDatas === hardSkills && (
              <Icon iconCode={technologyIconCode[skill.term]} />
            )}
            {skill.term}
          </dt>
          <dd className="font-firaCode sm:max-w-prose lg:max-w-[50ch]">
            {skill.description}
          </dd>
        </div>
      ))}
    </dl>
  );
}
