import Icon from "./Icon";

export default function LinkButton({ textLink, urlLink }) {
  return (
    <a
      className="object-neon-glow flex items-center gap-2 rounded-lg border-2 border-double border-red bg-white px-2 py-3 hover:border-white hover:bg-red hover:text-white"
      href={urlLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon iconName={textLink} />
      {textLink}
    </a>
  );
}
