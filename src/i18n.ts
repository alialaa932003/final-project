import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import arGlobal from "./translations/ar/global.json";
import enGlobal from "./translations/en/global.json";

import { supportedLanguages } from "./constants";
i18n.use(initReactI18next).init({
   supportedLngs: supportedLanguages,
   resources: {
      en: {
         global: enGlobal,
      },
      ar: {
         global: arGlobal,
      },
   },
   lng: "en",
   fallbackLng: "en",

   interpolation: {
      escapeValue: false,
   },
});

export default i18n;
