import technologyIconCode from "@/data/technologyIconCode";
import Icon from "./Icon";

export default function LinkButton({ textLink, urlLink, withIcons = true }) {
  return (
    <a
      className={` ${withIcons ? "flex items-center gap-2" : ""} object-neon-glow rounded-lg bg-white px-2 py-3 outline-dotted outline-red hover:bg-red hover:text-white hover:outline hover:outline-white`}
      href={urlLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {withIcons && <Icon iconCode={technologyIconCode[textLink]} />}
      {textLink}
    </a>
  );
}
