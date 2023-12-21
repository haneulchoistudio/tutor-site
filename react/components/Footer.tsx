import Link from "next/link";
import { useLanguage } from "../contexts/Language";

export default function Footer() {
  const language = useLanguage();

  return (
    <footer className="bg-white text-neutral-900 border-t px-8 md:px-12 lg:px-16 2xl:px-32 py-8 lg:py-16">
      <div className="flex items-end gap-x-2 lg:gap-x-3 mb-0.5 lg:mb-1">
        <h1 className="border-2 w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] border-neutral-800 text-neutral-800 lg:hover:bg-neutral-800 lg:hover:text-white flex justify-center items-center cursor-pointer transform lg:hover:rotate-6">
          <span className="hidden">
            {language.selected === "en"
              ? "Tutor With Haneul Choi"
              : "하늘쌤과 과외하기"}
          </span>
          <span className="font-bold text-lg lg:text-xl">T</span>
          <span className="font-medium text-sm lg:text-base rotate-180">t</span>
        </h1>
        <p className="font-medium">
          {language.selected === "en"
            ? "Tutor With Haneul Choi"
            : "하늘쌤과 과외하기"}
        </p>
      </div>
      <div className="mb-3.5 lg:mb-5">
        <p className="text-neutral-500 font-light">
          haneulchoistudio @ all rights reserved
        </p>
      </div>
      <div className="flex items-center gap-x-2.5 lg:gap-x-3.5">
        <Link
          prefetch={false}
          href={{
            pathname: "/contact",
            query: {
              type: language.selected === "en" ? "mathematics" : "수학",
            },
          }}
          as={`/contact`}
          className="text-sm lg:text-base font-medium text-blue-500 lg:text-blue-500/75 lg:hover:text-blue-500 underline lg:no-underline lg:hover:underline"
        >
          {language.selected === "en" ? "Math Tutor" : "수학과외"}
        </Link>
        <Link
          prefetch={false}
          href={{
            pathname: "/contact",
            query: {
              type:
                language.selected === "en" ? "computer science" : "컴퓨터 과학",
            },
          }}
          as={`/contact`}
          className="text-sm lg:text-base font-medium text-blue-500 lg:text-blue-500/75 lg:hover:text-blue-500 underline lg:no-underline lg:hover:underline"
        >
          {language.selected === "en" ? "CS Tutor" : "컴퓨터과외"}
        </Link>
        <button
          onClick={() =>
            alert(
              language.selected === "en"
                ? "This feature is currently not available. If you have any question, please contact me at haneulchoi.business@gmail.com"
                : "이 기능은 현재 개발 중 입니다. 질문이 있으시면 haneulchoi.business@gmail.com로 연락주시기 바랍니다."
            )
          }
          type="button"
          className="text-sm lg:text-base font-medium text-blue-500 lg:text-blue-500/75 lg:hover:text-blue-500 underline lg:no-underline lg:hover:underline"
        >
          {language.selected === "en" ? "Newsletter" : "뉴스레터"}
        </button>
      </div>
    </footer>
  );
}
