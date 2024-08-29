"use client";
import { useState } from "react";
import { hardSkills, softSkills } from "@/data/skills";
import SkillList from "./SkillList";

export default function SkillTabContent() {
  const [skillsActive, setSkillsActive] = useState(true);

  return (
    <article>
      <header>
        <nav className="text-black">
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
              <button
                className={`object-press-btn rounded-lg border-4 border-double px-2 py-3 delay-75 duration-75 ease-in-out ${skillsActive === true ? "object-neon-glow-white border-white bg-red text-white" : "border-red bg-white hover:border-white hover:bg-red hover:text-white"}`}
                onClick={() => setSkillsActive(true)}
              >
                Hard-Skills
              </button>
            </li>
            <li>
              <button
                className={`object-press-btn rounded-lg border-4 border-double px-2 py-3 delay-75 duration-75 ease-in-out ${skillsActive === false ? "object-neon-glow-white border-white bg-red text-white" : "border-red bg-white hover:border-white hover:bg-red hover:text-white"}`}
                onClick={() => setSkillsActive(false)}
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
