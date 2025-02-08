import React from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguageBtn = () => {
   const { i18n } = useTranslation();
   return (
      <button
         className="w-8"
         aria-label="Change language"
         onClick={() => {
            const newLang = i18n.language === "en" ? "ar" : "en";
            i18n.changeLanguage(newLang);
            localStorage.setItem("lang", newLang);
         }}
      >
         <img
            className="object-cover"
            src={`/images/${i18n.language}.webp`}
            alt={`Switch to ${i18n.language} language`}
         />
      </button>
   );
};

export default ChangeLanguageBtn;
