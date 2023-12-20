import { GetServerSideProps } from "next";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import Layout from "~/react/components/Layout";
import { useLanguage } from "~/react/contexts/Language";

export default function ContactConfirm() {
  const language = useLanguage();

  return (
    <Layout
      title={
        language.selected === "en" ? `Contact Confirmation` : `이메일 발신 완료`
      }
      description={
        "I am a tutor that teaches topics in the field of Mathematics and Computer Science."
      }
      keywords={"Math Tutor, CS Tutor, Haneul Choi Tutor, LA, OC, Tutor"}
    >
      <div className="h-screen">
        <section
          id="1"
          className="px-6 md:px-12 lg:px-16 2xl:px-32 py-10 lg:py-16 2xl:py-20 bg-neutral-50 border-b"
        >
          <div className="max-w-[500px] mx-auto flex flex-col">
            <p className="text-center mb-5 lg:mb-8 text-lg lg:text-xl">
              {language.selected === "en"
                ? "You have successfully sent the email."
                : "성공정으로 이메일을 발신하였습니다."}
            </p>
            <Link
              href={"/"}
              className="w-full sm:w-max mx-auto px-8 py-3 font-medium lg:text-lg bg-neutral-800 text-white text-center"
            >
              {language.selected === "en" ? "Go back" : "돌아가기"}
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const query = ctx.query;
  const type = ctx.query.type || "";

  return {
    props: { type },
  };
};
