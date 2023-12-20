import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import Layout from "~/react/components/Layout";
import { useLanguage } from "~/react/contexts/Language";
import { HiArrowRight } from "react-icons/hi";
import { FiCalendar, FiYoutube } from "react-icons/fi";
import Image from "next/image";
import Me from "public/me.png";
import Link from "next/link";

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
        className="px-6 md:px-12 lg:px-16 2xl:px-32 py-4 md:py-5 flex justify-between items-center sticky top-0 z-40 bg-white/5 backdrop-blur-md"
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
              "text-sm font-medium px-2.5 lg:px-3.5 py-0.5 lg:py-1 border border-neutral-800 w-auto h-[35px] block bg-neutral-900 text-white lg:hover:bg-white lg:hover:text-neutral-900"
            )}
          >
            {language.selected === "en" ? "한국어 보기" : "View in English"}
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
              : "주에 한번씩 하는 과외를 통해 수학의 기초를 마스터해보세요."}
          </p>
          <ul className="px-0 lg:px-0 w-full lg:w-max lg:mx-auto flex flex-col items-center gap-y-3.5 lg:gap-y-5">
            <Link
              prefetch={false}
              href={{
                pathname: "/contact",
                query: {
                  type: language.selected === "en" ? "mathematics" : "수학",
                },
              }}
              as={`/contact`}
              className="w-full inline-flex justify-between items-center gap-x-5 px-5 py-3 lg:px-8 lg:py-3.5 bg-blue-700/5 border-2 border-blue-700/25 text-blue-700 lg:hover:bg-blue-700 lg:hover:text-white lg:hover:border-blue-700 font-medium lg:text-lg"
            >
              <span>
                {language.selected === "en"
                  ? "Math Sessions"
                  : "수학과외 신청하기"}
              </span>

              <HiArrowRight className="text-lg lg:text-xl" />
            </Link>
            <Link
              prefetch={false}
              href={{
                pathname: "/contact",
                query: {
                  type:
                    language.selected === "en"
                      ? "computer science"
                      : "컴퓨터 과학",
                },
              }}
              as={`/contact`}
              className="w-full inline-flex justify-between items-center gap-x-5 px-5 py-3 lg:px-8 lg:py-3.5 bg-teal-700/5 border-2 border-teal-700/25 text-teal-700 lg:hover:bg-teal-700 lg:hover:text-white lg:hover:border-teal-700 font-medium lg:text-lg"
            >
              <span>
                {language.selected === "en"
                  ? "CS Sessions"
                  : "컴퓨터 과외 신청하기"}
              </span>

              <HiArrowRight className="text-lg lg:text-xl" />
            </Link>
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
          <a
            href="#courses"
            className="w-full inline-flex justify-between items-center gap-x-5 px-5 py-3 lg:px-8 lg:py-3.5 border-2 border-neutral-500 text-netural-500 lg:hover:bg-neutral-800 lg:hover:border-neutral-800 lg:hover:text-white font-medium lg:text-lg uppercase tracking-[0.075rem]"
          >
            <span>
              {language.selected === "en"
                ? "Available Tutor Topics"
                : "수업가능한 토픽 리스트"}
            </span>

            <HiArrowRight className="text-lg lg:text-xl" />
          </a>
        </article>
        <article className="lg:col-span-7 lg:py-16 2xl:py-20 lg:px-16 2xl:px-32 flex flex-col items-start gap-y-5 px-8 md:px-12">
          <p className="text-lg lg:text-xl font-light text-neutral-500 leading-[1.67] lg:leading-[1.67] px-8">
            {language.selected === "en"
              ? "I am Haneul Choi. I love math & coding and I have been tutoring for the past 7 years. I once had a dream to become a professional soccer player, but due to an unexpected injury, I had to quit it. Since then, I got into math and computer related classes where I fall in love with them."
              : "수학과 코딩을 좋아하고 지난 7년여에 걸쳐서 과외활동을 해온 최하늘 이라고 합니다. 한국에서는 축구선수를 꿈꾸는 학생이였지만 부상으로 인해 어린 꿈을 접어야 했고 그 뒤에 수학과 컴퓨터 관련 수업들을 들으며 관심을 가지게 되어 여기까지 오게 되었습니다."}
          </p>
          <p className="text-lg lg:text-xl font-light text-neutral-500 leading-[1.67] lg:leading-[1.67] px-8">
            {language.selected === "en"
              ? "In 'mathematics', I teach various topics such as Exam preparations, algebra, calculus, linear algebra, differential equations, discrete mathematics."
              : "'수학' 과목에서는 SAT (or ACT), 대수학, 미적분, 선형대수학, 미분방정식, 그리고 이산수학과 같은 다양한 수업들을 제공해드리고 있습니다."}
          </p>
          <p className="text-lg lg:text-xl font-light text-neutral-500 leading-[1.67] lg:leading-[1.67] px-8">
            {language.selected === "en"
              ? "In 'computer science', I teach programming in various languages such as Python, JavaScript, C, Linux OS."
              : "'컴퓨터 과학' 과목에서는 다양항 프로그래밍 언어 (파이썬, 자바스크립트, C, 리눅스 OS, 등) 및 언어들을 응용한 프로그램 개발 관련 수업들이 있습니다."}
          </p>
        </article>
      </section>
      <section id="courses" className="grid grid-cols-1 md:grid-cols-2 mt-12">
        <article className="p-8 md:px-12 lg:px-16 2xl:px-32 lg:py-16 bg-blue-700/5 text-blue-700 border-b lg:border-none flex flex-col justify-between">
          <div>
            <h4 className="font-medium text-2xl lg:text-3xl mb-6 lg:mb-10">
              {language.selected === "en"
                ? "Mathematics Courses"
                : "수학과목 리스트"}
            </h4>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-3.5">
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-blue-700 mr-2.5 lg:mr-4" />{" "}
                Algebra
              </p>
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-blue-700 mr-2.5 lg:mr-4" />{" "}
                College Algebra
              </p>
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-blue-700 mr-2.5 lg:mr-4" />{" "}
                Linear Algebra
              </p>
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-blue-700 mr-2.5 lg:mr-4" />{" "}
                SAT
              </p>
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-blue-700 mr-2.5 lg:mr-4" />{" "}
                ACT
              </p>
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-blue-700 mr-2.5 lg:mr-4" />{" "}
                GRE
              </p>
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-blue-700 mr-2.5 lg:mr-4" />{" "}
                Trigonometry
              </p>
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-blue-700 mr-2.5 lg:mr-4" />{" "}
                Precalculus
              </p>
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-blue-700 mr-2.5 lg:mr-4" />{" "}
                Calculus I
              </p>
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-blue-700 mr-2.5 lg:mr-4" />{" "}
                Calculus II
              </p>
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-blue-700 mr-2.5 lg:mr-4" />{" "}
                Calculus III
              </p>
            </ul>
          </div>
          <div className="mt-6 lg:mt-10">
            <Link
              href={"/"}
              className="flex items-center gap-x-2.5 lg:gap-x-3.5 lg:text-lg font-medium px-8 py-3.5 bg-blue-700 lg:hover:bg-blue-500 text-white w-full sm:w-max mx-auto lg:mx-0 justify-between "
            >
              <FiYoutube className="text-lg lg:text-xl" />
              <span>
                {language.selected === "en"
                  ? "Watch a Free Session"
                  : "수학과외 맛보기 영상"}
              </span>
            </Link>
          </div>
        </article>
        <article className="p-8 md:px-12 lg:px-16 2xl:px-32 lg:py-16 bg-teal-700/5 text-teal-700 border-t lg:border-none flex flex-col justify-between">
          <div>
            <h4 className="font-medium text-2xl lg:text-3xl mb-6 lg:mb-10">
              {language.selected === "en"
                ? "Computer Science Courses"
                : "컴퓨터 과학 과목 리스트"}
            </h4>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-3.5">
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-teal-700 mr-2.5 lg:mr-4" />{" "}
                Python
              </p>
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-teal-700 mr-2.5 lg:mr-4" />{" "}
                JavaScript
              </p>
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-teal-700 mr-2.5 lg:mr-4" />{" "}
                C
              </p>
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-teal-700 mr-2.5 lg:mr-4" />{" "}
                Linux OS
              </p>
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-teal-700 mr-2.5 lg:mr-4" />{" "}
                Data Structure
              </p>
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-teal-700 mr-2.5 lg:mr-4" />{" "}
                HTML, CSS, and JS
              </p>
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-teal-700 mr-2.5 lg:mr-4" />{" "}
                Coding Tests
              </p>
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-teal-700 mr-2.5 lg:mr-4" />{" "}
                React & NextJs
              </p>
              <p className="text-neutral-500 font-light lg:text-lg leading-[1.67] lg:leading-[1.67] flex items-center">
                <span className="inline-block w-1 h-1 bg-blue-700 mr-2.5 lg:mr-4" />{" "}
                Github
              </p>
            </ul>
          </div>
          <div className="mt-6 lg:mt-10">
            <Link
              href={"/"}
              className="flex items-center gap-x-2.5 lg:gap-x-3.5 lg:text-lg font-medium px-8 py-3.5 bg-teal-700 lg:hover:bg-teal-500 text-white w-full sm:w-max mx-auto lg:mx-0 justify-between "
            >
              <FiYoutube className="text-lg lg:text-xl" />
              <span>
                {language.selected === "en"
                  ? "Watch a Free Session"
                  : "컴퓨터 과외 맛보기 영상"}
              </span>
            </Link>
          </div>
        </article>
      </section>
    </Layout>
  );
}
