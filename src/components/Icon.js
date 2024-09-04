import {
  SiAxios,
  SiBem,
  SiBootstrap,
  SiCodepen,
  SiCsharp,
  SiCss3,
  SiDevdotto,
  SiDotnet,
  SiFigma,
  SiGit,
  SiGithub,
  SiGmail,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLinkedin,
  SiMicrosoftsqlserver,
  SiNextdotjs,
  SiReact,
  SiReactrouter,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
import { FaGlobe } from "react-icons/fa6";

const iconMap = {
  FaGlobe,
  SiAxios,
  SiBem,
  SiBootstrap,
  SiCodepen,
  SiCss3,
  SiCsharp,
  SiDevdotto,
  SiDotnet,
  SiFigma,
  SiGit,
  SiGithub,
  SiGmail,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLinkedin,
  SiMicrosoftsqlserver,
  SiNextdotjs,
  SiReact,
  SiReactrouter,
  SiSass,
  SiTailwindcss,
};

export default function Icon({ iconCode }) {
  const SelectedIcon = iconMap[iconCode];

  return <SelectedIcon />;
}
