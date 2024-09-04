import { Press_Start_2P, Fira_Code } from "next/font/google";
import "./globals.css";
import MenuNavBar from "@/components/MenuNavBar";
import Footer from "@/components/Footer";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata = {
  title: "Portfólio de ThesllaDev | Desenvolvedor Front-end",
  description:
    "Sou o Thalles Augusto (ThesllaDev), desenvolvedor front-end com foco nas tecnologias React, Next.js e Tailwind CSS. Explore meu portfólio e veja mais sobre mim, meus projetos web, habilidades e entre em contato para colaboração.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${pressStart2P.className} ${firaCode.variable} bg-blue text-white`}
      >
        <MenuNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
