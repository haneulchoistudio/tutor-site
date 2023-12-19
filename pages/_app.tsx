import { AppProps } from "next/app";
import LanguageContextProvider from "~/react/contexts/Language";
import "~/styles/index.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <LanguageContextProvider>
      <Component {...pageProps} />
    </LanguageContextProvider>
  );
}
