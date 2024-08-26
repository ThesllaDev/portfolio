"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function MenuNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setActiveHash(window.location.hash);
  }, []);

  const handleClick = (hash) => {
    setActiveHash(hash);
  };

  return (
    <header className="flex flex-col p-4 lg:flex-row lg:justify-between">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          onClick={() => handleClick("")}
          className={`text-stroke-white text-red ${activeHash === "" ? "underline" : ""}`}
        >
          ThesllaDev
        </Link>
        <button
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
              className={`block px-4 py-2 hover:bg-red hover:text-white ${activeHash === "" ? "underline" : ""}`}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              onClick={() => handleClick("#about")}
              className={`block px-4 py-2 hover:bg-red hover:text-white ${activeHash === "#about" ? "underline" : ""}`}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              onClick={() => handleClick("#projects")}
              className={`block px-4 py-2 hover:bg-red hover:text-white ${activeHash === "#projects" ? "underline" : ""}`}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              onClick={() => handleClick("#skills")}
              className={`block px-4 py-2 hover:bg-red hover:text-white ${activeHash === "#skills" ? "underline" : ""}`}
            >
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              href="#contacts"
              onClick={() => handleClick("#contacts")}
              className={`block px-4 py-2 hover:bg-red hover:text-white ${activeHash === "#contacts" ? "underline" : ""}`}
            >
              Contatos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
