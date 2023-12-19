import { Metadata } from "next";
import Head from "next/head";

export default function Layout({
  children,
  title,
  description,
  keywords,
}: React.PropsWithChildren & Metadata) {
  return (
    <>
      <Head>
        <title>{title as string}</title>
        <meta name="description" content={description as string} />
        <meta name="keywords" content={keywords as string} />
      </Head>
      {children}
    </>
  );
}
