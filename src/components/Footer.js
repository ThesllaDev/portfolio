import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 text-center">
      <p>
        Designer e desenvolvimento por{" "}
        <Link href="/" className="text-stroke-white text-red hover:underline">
          Thalles Augusto
        </Link>
      </p>
    </footer>
  );
}
