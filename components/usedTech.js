import Link from "next/link";

export default function UsedTechnologies() {
  return (
    <strong>
      <Link href="https://nextjs.org/">
        <a target="_blank"> Next.js</a>
      </Link>
      ,
      <Link href="https://tailwindcss.com/">
        <a target="_blank"> Tailwind CSS</a>
      </Link>
      ,
      <Link href="https://auth0.com/">
        <a target="_blank"> Auth0</a>
      </Link>
      ,
      <Link href="https://upstash.com/">
        <a target="_blank"> Upstash</a>
      </Link>
      ,
      <Link href="https://graphcms.com/">
        <a target="_blank"> GraphCMS</a>
      </Link>
      ,
      <Link href="https://www.framer.com/motion/">
        <a target="_blank"> Framer</a>
      </Link>
      ,
      <Link href="https://react-icons.github.io/react-icons">
        <a target="_blank"> React Icons</a>
      </Link>
      ,
      <Link href="https://www.npmjs.com/package/@next/mdx">
        <a target="_blank"> MDX</a>
      </Link>
    </strong>
  );
}
