import {
  SiCodepen,
  SiCss3,
  SiDevdotto,
  SiGithub,
  SiGmail,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
import { FaGlobe } from "react-icons/fa6";

const iconMap = {
  FaGlobe,
  SiCodepen,
  SiCss3,
  SiDevdotto,
  SiGithub,
  SiGmail,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
};

export default function Icon({ iconCode }) {
  const SelectedIcon = iconMap[iconCode];

  return <SelectedIcon />;
}
