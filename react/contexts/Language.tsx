import { createContext, useContext, useEffect, useState } from "react";

export type LanguageOptions<
  LanguageOptionExtension extends string = "en" | "ko"
> = LanguageOptionExtension;

export interface LanguageContextProps<LanguageOptions> {
  selected: LanguageOptions;
  select: (_lang: LanguageOptions) => void;
}

const LanguageContext = createContext<{
  selected: LanguageOptions;
  select: (_lang: LanguageOptions) => void;
}>({
  selected: "en",
  select: () => {},
});

const LanguageContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [lang, setLang] = useState<LanguageOptions>("en");

  function select(_lang: LanguageOptions) {
    localStorage.setItem("lang", _lang);
    setLang(_lang);
  }

  function _initialLoader() {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en");
    } else {
      setLang(localStorage.getItem("lang") as LanguageOptions);
    }
  }

  useEffect(() => {
    _initialLoader();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LanguageContext.Provider value={{ selected: lang, select }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;

function useLanguage() {
  return useContext(LanguageContext);
}

export { useLanguage };
