import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="site-container">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">
            Ben Andaç erdoğmuş, İstanbul&apos;da yaşıyorum, Front-end
            developerim.
          </h1>

          <p>
            Çevre mühendisliği mezunuyum. Hayatıma ilgi duyduğum ve çalışırken
            mutlu olduğum yazılım sektöründe devam ediyorum.
          </p>
          <p>
            Bu sayfayı yaparken kullandığım teknolojiler şöyle;
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
              <Link href="https://www.npmjs.com/package/@next/mdx">
                <a target="_blank"> MDX</a>
              </Link>
            </strong>
          </p>
        </div>
      </div>
      <div className="site-4xl-container mt-20">
        <img src="/3887394.jpg" />
      </div>
    </>
  );
}
