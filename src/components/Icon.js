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

const technologyIconCode = {
	"ASP.NET Core": "SiDotnet",
	Axios: "SiAxios",
	"BEM CSS": "SiBem",
	Bootstrap: "SiBootstrap",
	Codepen: "SiCodepen",
	CSS3: "SiCss3",
	"C#": "SiCsharp",
	"Dev.to": "SiDevdotto",
	Figma: "SiFigma",
	Git: "SiGit",
	GitHub: "SiGithub",
	Gmail: "SiGmail",
	HTML5: "SiHtml5",
	JavaScript: "SiJavascript",
	jQuery: "SiJquery",
	LinkedIn: "SiLinkedin",
	"Next.js": "SiNextdotjs",
	Preview: "FaGlobe",
	React: "SiReact",
	"React Router": "SiReactrouter",
	SASS: "SiSass",
	SQL: "SiMicrosoftsqlserver",
	"Tailwind CSS": "SiTailwindcss",
};

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

export default function Icon({ iconName }) {
  const iconCode = technologyIconCode[iconName];
  const SelectedIcon = iconMap[iconCode];

  return <SelectedIcon />;
}
