import { Metadata } from "next";
import Head from "next/head";
import Link from "next/link";
import { useLanguage } from "../contexts/Language";

export default function Layout({
  children,
  title,
  description,
  keywords,
}: React.PropsWithChildren & Metadata) {
  const language = useLanguage();
  return (
    <>
      <Head>
        <title>{title as string}</title>
        <meta name="description" content={description as string} />
        <meta name="keywords" content={keywords as string} />
      </Head>
      {children}
      <footer className="bg-white text-neutral-900 border-t px-8 md:px-12 lg:px-16 2xl:px-32 py-8 lg:py-16">
        <div className="flex items-end gap-x-2 lg:gap-x-3 mb-0.5 lg:mb-1">
          <h1 className="border-2 w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] border-neutral-800 text-neutral-800 lg:hover:bg-neutral-800 lg:hover:text-white flex justify-center items-center cursor-pointer transform lg:hover:rotate-6">
            <span className="hidden">Tutor With Haneul Choi</span>
            <span className="font-bold text-lg lg:text-xl">T</span>
            <span className="font-medium text-sm lg:text-base rotate-180">
              t
            </span>
          </h1>
          <p className="font-medium">Tutor with Haneul Choi</p>
        </div>
        <div className="mb-3.5 lg:mb-5">
          <p className="text-neutral-500 font-light">
            haneulchoistudio @ all rights reserved
          </p>
        </div>
        <div className="flex items-center gap-x-2.5 lg:gap-x-3.5">
          <Link
            href={"/"}
            className="text-sm lg:text-base font-medium text-blue-500 lg:text-blue-500/75 lg:hover:text-blue-500 underline lg:no-underline lg:hover:underline"
          >
            {language.selected === "en" ? "Math Tutor" : "수학과외"}
          </Link>
          <Link
            href={"/"}
            className="text-sm lg:text-base font-medium text-blue-500 lg:text-blue-500/75 lg:hover:text-blue-500 underline lg:no-underline lg:hover:underline"
          >
            {language.selected === "en" ? "CS Tutor" : "컴퓨터과외"}
          </Link>
          <Link
            href={"/"}
            className="text-sm lg:text-base font-medium text-blue-500 lg:text-blue-500/75 lg:hover:text-blue-500 underline lg:no-underline lg:hover:underline"
          >
            {language.selected === "en" ? "Newsletter" : "뉴스레터"}
          </Link>
        </div>
      </footer>
    </>
  );
}
