"use client";
import { useState } from "react";
import { hardSkills, softSkills } from "@/data/skills";
import SkillList from "./SkillList";

export default function SkillTabContent() {
  const [skillsActive, setskillsActive] = useState(true);

  return (
    <article>
      <header>
        <nav className="text-black">
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
              <button
                className={`object-neon-glow rounded-lg px-2 py-3 ${skillsActive === true ? "bg-red text-white outline outline-white" : "bg-white outline-dotted outline-red hover:bg-red hover:text-white hover:outline hover:outline-white"}`}
                onClick={() => setskillsActive(true)}
              >
                Hard-Skills
              </button>
            </li>
            <li>
              <button
                className={`object-neon-glow rounded-lg px-2 py-3 ${skillsActive === false ? "bg-red text-white outline outline-white" : "bg-white outline-dotted outline-red hover:bg-red hover:text-white hover:outline hover:outline-white"}`}
                onClick={() => setskillsActive(false)}
              >
                Soft-Skills
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {skillsActive ? (
        <SkillList skillDatas={hardSkills} />
      ) : (
        <SkillList skillDatas={softSkills} />
      )}
    </article>
  );
}
