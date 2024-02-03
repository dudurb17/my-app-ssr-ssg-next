import Link from "@/src/components/Link";

export default function Ssg({ msg }) {
  return (
    <>
      <h1>SSG</h1>
      <div>{msg}</div>
      <Link href="/">Voltar para home</Link>
    </>
  );
}
