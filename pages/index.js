import UsedTechnologies from "../components/usedTech";
import Social from "../components/social";

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
            <UsedTechnologies />
          </p>
        </div>
        <Social />
      </div>
      <div className="site-4xl-container mt-20">
        <img src="/3887394.jpg" />
      </div>
    </>
  );
}
