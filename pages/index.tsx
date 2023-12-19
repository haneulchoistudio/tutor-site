import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import Layout from "~/react/components/Layout";
import { useLanguage } from "~/react/contexts/Language";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import Me from "public/me.png";

export default function Home() {
  const router = useRouter();
  const language = useLanguage();

  return (
    <Layout
      title={
        language.selected === "en"
          ? "Tutor with Haneul Choi"
          : "하늘쌤과 함께하는 과외"
      }
      description={
        "I am a tutor that teaches topics in the field of Mathematics and Computer Science."
      }
      keywords={"Math Tutor, CS Tutor, Haneul Choi Tutor, LA, OC, Tutor"}
    >
      <section
        id="1"
        className="px-6 md:px-12 lg:px-16 2xl:px-32 py-5 md:py-6 lg:py-8 flex justify-between items-center"
      >
        <h1 className="border-2 w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] border-neutral-800 text-neutral-800 lg:hover:bg-neutral-800 lg:hover:text-white flex justify-center items-center cursor-pointer transform lg:hover:rotate-6">
          <span className="hidden">Tutor With Haneul Choi</span>
          <span className="font-bold text-lg lg:text-xl">T</span>
          <span className="font-medium text-sm lg:text-base rotate-180">t</span>
        </h1>
        <div className={twMerge(" rounded flex items-center")}>
          <button
            onClick={() =>
              language.select(language.selected === "en" ? "ko" : "en")
            }
            type="button"
            className={twMerge(
              "text-sm font-medium px-2 py-0.5 border border-neutral-800 w-auto h-[35px] block bg-neutral-900 text-white lg:hover:bg-white lg:hover:text-neutral-900"
            )}
          >
            {language.selected === "en" ? "한국어" : "English"}
          </button>
        </div>
      </section>
      <section
        id="2"
        className="px-6 md:px-12 lg:px-16 2xl:px-32 py-10 lg:py-16 2xl:py-20 bg-neutral-50 border-b"
      >
        <article>
          <h2 className="text-center font-medium text-2xl lg:text-3xl 2xl:text-4xl mb-3.5 lg:mb-5">
            {language.selected === "en"
              ? "Tutor with Teacher Sky,"
              : "하늘쌤이 도와주는 효과적인 공부,"}
          </h2>
          <p className="px-8 text-center font-light leading-[1.67] lg:leading-[1.67] text-lg lg:text-xl text-neutral-500 mb-6 lg:mb-10">
            {language.selected === "en"
              ? "Try a weekly session to master your basis on mathematics."
              : "주에 한번씩 하는 과외를 통해 수학으 기초를 마스터해보세요."}
          </p>
          <ul className="px-0 lg:px-0 w-full lg:w-max lg:mx-auto flex flex-col items-center gap-y-3.5 lg:gap-y-5">
            <button
              type="button"
              className="w-full inline-flex justify-between items-center gap-x-5 px-5 py-3 lg:px-8 lg:py-3.5 bg-neutral-800 border-2 border-neutral-900 lg:hover:bg-white lg:hover:text-neutral-800 text-white font-medium lg:text-lg"
            >
              <span>
                {language.selected === "en"
                  ? "Math Sessions"
                  : "수학과외 신청하기"}
              </span>

              <HiArrowRight className="text-lg lg:text-xl" />
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-between items-center gap-x-5 px-5 py-3 lg:px-8 lg:py-3.5 bg-neutral-500 border-2 border-neutral-500 lg:hover:border-neutral-300 text-white lg:hover:bg-neutral-400 lg:hover:text-white font-medium lg:text-lg"
            >
              <span>
                {language.selected === "en"
                  ? "CS Sessions"
                  : "컴공과외 신청하기"}
              </span>

              <HiArrowRight className="text-lg lg:text-xl" />
            </button>
          </ul>
        </article>
      </section>
      <section
        id="3"
        className="bg-white grid grid-cols-1 lg:grid-cols-12 lg:gap-12"
      >
        <article className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start py-10 lg:py-16 2xl:py-20 px-6 md:px-12 lg:px-16 2xl:px-32 bg-white text-neutral-900">
          <picture className="block mb-3.5 lg:mb-5 max-w-[125px] rounded-full overflow-hidden">
            <Image
              src={Me}
              alt="Profile - Haneul Choi Studio"
              width={500}
              height={500}
            />
          </picture>
          <h3 className="font-bold text-3xl lg:text-5xl 2xl:text-6xl mb-6 lg:mb-10 2xl:leading-[1.22]">
            {language.selected === "en"
              ? "Introducing Myself."
              : "저를 소개할께요."}
          </h3>
          <button
            type="button"
            className="w-full inline-flex justify-between items-center gap-x-5 px-5 py-3 lg:px-8 lg:py-3.5 border-2 border-neutral-500 text-netural-500 lg:hover:bg-neutral-800 lg:hover:border-neutral-800 lg:hover:text-white font-medium lg:text-lg uppercase tracking-[0.075rem]"
          >
            <span>
              {language.selected === "en"
                ? "Available Tutor Topics"
                : "수업가능한 토픽 리스트"}
            </span>

            <HiArrowRight className="text-lg lg:text-xl" />
          </button>
        </article>
        <article className="lg:col-span-7 lg:py-16 2xl:py-20 lg:px-16 2xl:px-32 flex flex-col items-center gap-y-5 px-8 md:px-12">
          <p className="text-lg lg:text-xl font-light text-neutral-500 leading-[1.67] lg:leading-[1.67] px-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            iusto, voluptates impedit rem maiores illum culpa suscipit vel
            reiciendis fugit incidunt tenetur numquam, iste ut dolores
            asperiores ullam nostrum reprehenderit!
          </p>
          <p className="text-lg lg:text-xl font-light text-neutral-500 leading-[1.67] lg:leading-[1.67] px-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            iusto, voluptates impedit rem maiores illum culpa suscipit vel
            reiciendis fugit incidunt tenetur numquam, iste ut dolores
            asperiores ullam nostrum reprehenderit!
          </p>
          <p className="text-lg lg:text-xl font-light text-neutral-500 leading-[1.67] lg:leading-[1.67] px-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            iusto, voluptates impedit rem maiores illum culpa suscipit vel
            reiciendis fugit incidunt tenetur numquam, iste ut dolores
            asperiores ullam nostrum reprehenderit!
          </p>
        </article>
      </section>
    </Layout>
  );
}
