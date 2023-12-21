import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import Layout from "~/react/components/Layout";
import { useLanguage } from "~/react/contexts/Language";

type EmailField = {
  name: string;
  email: string;
  subject: string;
  type: string;
  message: string;
  lang: "en" | "ko";
};

type Props = {
  type: string;
};

export default function Contact({ type }: Props) {
  const router = useRouter();
  const language = useLanguage();
  const [content, setContent] = useState<EmailField>({
    lang: language.selected,
    email: "",
    name: "",
    subject:
      language.selected === "en"
        ? type
          ? `Tutor Request About ${type.toUpperCase()}`
          : "Tutor Request"
        : type
        ? `${type}에 관한 문의 이메일`
        : "이메일 문의",
    type,
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });

    if (!response.ok) {
      alert("Failed to send.");
      setLoading(false);
      return;
    }

    await router.push("/contact/confirm");
  }

  useEffect(() => {
    setLoading(false);
  }, [router]);

  return (
    <Layout
      title={
        language.selected === "en"
          ? `Contact Haneul Choi ${type && `About ${type}`}`
          : `하늘쌤에게 ${type && type} 메일 보내기`
      }
      description={
        "I am a tutor that teaches topics in the field of Mathematics and Computer Science."
      }
      keywords={"Math Tutor, CS Tutor, Haneul Choi Tutor, LA, OC, Tutor"}
    >
      <div>
        <header className="px-8 py-4 md:py-5 md:px-12 lg:px-16 2xl:px-32">
          <Link
            href={"/"}
            className="opacity-75 font-medium uppercase tracking-[0.075rem] text-sm flex items-center gap-x-2 group lg:hover:overflow-hidden lg:hover:underline"
          >
            <HiArrowLeft className="text-base lg:text-lg transition-all duration-[0.275s] ease-in-out lg:group-hover:-translate-x-full -left-full lg:group-hover:-ml-5 lg:group-hover:scale-125 lg:group-hover:-rotate-180" />
            <span>{language.selected === "en" ? "Back" : "돌아가기"}</span>
          </Link>
        </header>
        <section
          id="1"
          className="px-6 md:px-12 lg:px-16 2xl:px-32 py-10 lg:py-16 2xl:py-20 bg-neutral-50 border-b"
        >
          <div className="max-w-[500px] mx-auto flex flex-col">
            {loading ? (
              <p className="text-center text-blue-700 animate-pulse">
                {language.selected === "en"
                  ? "Sending your email..."
                  : "이메일 발신 중..."}
              </p>
            ) : (
              <>
                {language.selected === "ko" && (
                  <p className="font-light text-gray-400 mb-1.5 lg:mb-2.5">
                    &apos;{type}&apos;과 관련하여
                  </p>
                )}
                <h3
                  className={twMerge(
                    "font-medium text-2xl lg:text-3xl",
                    language.selected === "ko" && "mb-2.5 lg:mb-4"
                  )}
                >
                  {language.selected === "en"
                    ? "Contact Teacher Haneul"
                    : "하늘쌤께 메일 넣기"}
                </h3>
                {language.selected === "en" && (
                  <p className="font-light text-gray-400 mt-1.5 lg:mt-2.5 mb-4 lg:mb-5">
                    About &apos;{type}&apos;
                  </p>
                )}
                <form
                  onSubmit={onSubmit}
                  className="flex flex-col gap-y-5 lg:gap-y-6"
                >
                  <section className="flex flex-col gap-y-2.5 lg:gap-y-3">
                    <label
                      htmlFor="Name"
                      className="font-medium text-lg lg:text-xl"
                    >
                      {language.selected === "en"
                        ? "Your Name"
                        : "성함이 어떻게 되세요?"}
                    </label>
                    <input
                      value={content.name}
                      onChange={(e) =>
                        setContent({ ...content, name: e.target.value })
                      }
                      type="text"
                      className="w-full border px-3 py-2 lg:px-4 lg:py-3 focus:text-neutral-800 text-nuetral-600"
                    />
                  </section>
                  <section className="flex flex-col gap-y-2.5 lg:gap-y-3">
                    <label
                      htmlFor="Name"
                      className="font-medium text-lg lg:text-xl"
                    >
                      {language.selected === "en"
                        ? "Your Email"
                        : "이메일이 어떻게 되세요?"}
                    </label>
                    <input
                      value={content.email}
                      onChange={(e) =>
                        setContent({ ...content, email: e.target.value })
                      }
                      type="email"
                      className="w-full border px-3 py-2 lg:px-4 lg:py-3 focus:text-neutral-800 text-nuetral-600"
                    />
                  </section>
                  <section className="flex flex-col gap-y-2.5 lg:gap-y-3">
                    <label
                      htmlFor="Name"
                      className="font-medium text-lg lg:text-xl"
                    >
                      {language.selected === "en"
                        ? "Your Message"
                        : "문의 내용을 작성해주세요."}
                    </label>
                    <textarea
                      value={content.message}
                      onChange={(e) =>
                        setContent({ ...content, message: e.target.value })
                      }
                      rows={6}
                      className="w-full border px-3 py-2 lg:px-4 lg:py-3 focus:text-neutral-800 text-nuetral-600"
                    />
                  </section>
                  <section className="flex flex-col gap-y-2.5 lg:gap-y-3">
                    <input
                      type="submit"
                      className="w-full px-8 py-4 bg-neutral-900 text-white font-medium text-lg"
                      value={
                        language.selected === "en"
                          ? "Send Email"
                          : "이메일 보내기"
                      }
                    />
                  </section>
                </form>
              </>
            )}
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
