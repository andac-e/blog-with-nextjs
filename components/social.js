import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Social() {
  return (
    <div className="flex items-center space-x-3 mt-10">
      <a
        href="mailto:andacerdogmus26@gmail.com"
        target={"_blank"}
        rel="noopener noreferrer"
        className="social"
      >
        <span className="mx-2 font-semibold">E-Posta</span>
      </a>

      <a
        href="https://github.com/andac-e"
        target={"_blank"}
        rel="noopener noreferrer"
        className="social"
      >
        <AiFillGithub className={"w-6 h-6 fill-current"} />
      </a>

      <a
        href="https://www.linkedin.com/in/anda%C3%A7-erdo%C4%9Fmu%C5%9F-155053156/"
        target={"_blank"}
        rel="noopener noreferrer"
        className="social"
      >
        <AiFillLinkedin className={"w-6 h-6 fill-current"} />
      </a>

      <a
        href="https://www.instagram.com/andacerdogmus/"
        target={"_blank"}
        rel="noopener noreferrer"
        className="social"
      >
        <AiOutlineInstagram className={"w-6 h-6 fill-current"} />
      </a>
    </div>
  );
}
