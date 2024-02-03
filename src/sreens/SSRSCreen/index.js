import Link from "@/src/components/Link";

export default function Ssr({ msg }) {
  return (
    <>
      <h1>SSR</h1>
      <div>{msg}</div>
      <Link href="/">Voltar para home</Link>
    </>
  );
}
