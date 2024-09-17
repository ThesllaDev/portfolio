"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function MenuNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleClick = (hash) => {
    setActiveHash(hash);
  };

  const basedStyleLinks =
    "block px-4 py-2 delay-75 duration-75 ease-in-out hover:bg-red hover:text-white hover:underline";

  return (
    <header className="flex flex-col p-4 lg:flex-row lg:justify-between">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          onClick={() => handleClick("")}
          className={`text-stroke-white text-red ${activeHash === "" ? "underline" : ""}`}
          aria-current={activeHash === "" ? "page" : undefined}
        >
          ThesllaDev
        </Link>
        <button
          aria-label="Toggle navbar menu"
          className="object-neon-glow rounded-lg border-2 border-solid border-red bg-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-9 w-12 hover:bg-red hover:stroke-white"
            fill="none"
            stroke="red"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } bg-white py-4 text-black lg:flex lg:bg-blue lg:text-white`}
      >
        <ul className="flex w-full flex-col gap-2 text-end lg:flex-row">
          <li>
            <Link
              href="/"
              onClick={() => handleClick("")}
              className={`${basedStyleLinks} ${activeHash === "" ? "underline" : ""}`}
              aria-current={activeHash === "" ? "page" : undefined}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              onClick={() => handleClick("#about")}
              className={`${basedStyleLinks} ${activeHash === "#about" ? "underline" : ""}`}
              aria-current={activeHash === "#about" ? "page" : undefined}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              onClick={() => handleClick("#projects")}
              className={`${basedStyleLinks} ${activeHash === "#projects" ? "underline" : ""}`}
              aria-current={activeHash === "#projects" ? "page" : undefined}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              onClick={() => handleClick("#skills")}
              className={`${basedStyleLinks} ${activeHash === "#skills" ? "underline" : ""}`}
              aria-current={activeHash === "#skills" ? "page" : undefined}
            >
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              href="#contacts"
              onClick={() => handleClick("#contacts")}
              className={`${basedStyleLinks} ${activeHash === "#contacts" ? "underline" : ""}`}
              aria-current={activeHash === "#contacts" ? "page" : undefined}
            >
              Contatos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
