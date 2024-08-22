export default function TitleSection({ text }) {
  return (
    <div className="p-4">
      <h2 className="title-section text-2xl">{text}</h2>
      <hr
        className="h-[3px] bg-red text-red blur-[1px]"
      />
    </div>
  );
}
