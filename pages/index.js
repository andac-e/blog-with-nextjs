import UsedTechnologies from "../components/usedTech";
import Social from "../components/social";

export default function Home() {
  return (
    <>
      <div className="site-container">
        <div className="space-y-4">
          <h1 className="text-2xl">
            <span role="img" className="mr-3">
              👋🏼
            </span>
            <span className="font-bold">
              Selam, ben Andaç, Front-end developerim.
            </span>
          </h1>

          <p>
            Çevre mühendisliği mezunuyum. Hayatıma ilgi duyduğum ve çalışırken
            mutlu olduğum yazılım sektöründe devam ediyorum.
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
