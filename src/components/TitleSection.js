export default function TitleSection({ text, hrWidth }) {
  return (
    <header className="p-4">
      <h2 className="title-section text-center text-2xl">{text}</h2>
      <hr
        className={`mx-auto h-[3px] bg-red text-red blur-[1px] max-w-[${hrWidth}px]`}
      />
    </header>
  );
}
