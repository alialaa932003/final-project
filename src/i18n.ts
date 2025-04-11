import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import arGlobal from "./translations/ar/global.json";
import arStaff from "./translations/ar/staff.json";
import enGlobal from "./translations/en/global.json";
import enStaff from "./translations/en/staff.json";

import { supportedLanguages } from "./constants";
i18n.use(initReactI18next).init({
   supportedLngs: supportedLanguages,
   resources: {
      en: {
         global: enGlobal,
         staff: enStaff,
      },
      ar: {
         global: arGlobal,
         staff: arStaff,
      },
   },
   lng: "en",
   fallbackLng: "en",

   interpolation: {
      escapeValue: false,
   },
});

export default i18n;
