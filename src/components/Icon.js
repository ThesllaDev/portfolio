import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaSass,
	FaReact
} from "react-icons/fa6";

const iconMap = {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaSass,
	FaReact,
	RiNextjsFill,
	RiTailwindCssFill
};

export default function Icon({ iconCode }) {
	const SelectedIcon = iconMap[iconCode];

	return <SelectedIcon />;
}
