import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "../../components/Link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>Bem vindo ao meu primeiro mão a massa do Alura</h1>
      <p>
        Nesse projeto usarei as tecnologias SSG - Static Site Generation e SSR -
        Server Site Redering
      </p>
      <Link href="/ssr">SSR</Link>
      <article>
        <Link href="/ssg">SSG</Link>
      </article>
    </>
  );
}
