export default function LinkButton({ textLink, urlLink }) {
  return (
    <a
      className="object-neon-glow rounded-lg bg-white px-2 py-3 outline-dashed outline-red hover:bg-red hover:text-white hover:outline hover:outline-white"
      href={urlLink}
			target="_blank"
			rel="noreferrer"
    >
      {textLink}
    </a>
  );
}
