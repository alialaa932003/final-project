import { supportedLanguages } from "@/constants";
import { useEffect, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
   const { i18n } = useTranslation();

   const lang = localStorage.getItem("lang") || "en";
   useEffect(() => {
      i18n.changeLanguage(lang);
      document.documentElement.lang = lang;
   }, [lang, i18n]);
   return <>{children}</>;
};
export default LanguageWrapper;
