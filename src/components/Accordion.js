import technologyIconCode from "@/data/technologyIconCode";
import Icon from "./Icon";

export default function Accordion({ skillDatas }) {
  return (
    <article key={skillDatas.name} className="w-full max-w-xl">
      <h3 className="flex items-center gap-2 border-b bg-white p-2 text-lg font-bold text-red">
        <Icon iconCode={technologyIconCode[skillDatas.name]} />
        {skillDatas.name}
      </h3>
      <details name="skills">
        <summary className="cursor-pointer bg-white p-2 font-firaCode text-sm text-black hover:bg-red hover:text-white">
          <strong>{`Detalhes sobre ${skillDatas.name}`}</strong>
        </summary>
        <dl className="border-4 border-double p-2">
          {skillDatas.skills.map((skillDetail) => (
            <div key={skillDetail.term}>
              <dt className="font-bold">{skillDetail.term}</dt>
              <dd className="mb-2 font-firaCode">{skillDetail.description}</dd>
            </div>
          ))}
        </dl>
      </details>
    </article>
  );
}
