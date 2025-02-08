import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import React from "react";
import { IoCheckmarkOutline, IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useLogin } from "./useLogin";
import BarLoading from "@/components/BarLoading";
import { useTranslation } from "react-i18next";
const LoginForm = () => {
   const { t, i18n } = useTranslation("form");
   const schema = Yup.object().shape({
      email: Yup.string().email().required(t("required")),
      password: Yup.string().required(t("required")),
   });
   const { login, isPending } = useLogin();
   return (
      <Formik
         initialValues={{ email: "", password: "" }}
         onSubmit={(values) => {
            login(values);
         }}
         validationSchema={schema}
      >
         <Form className="mx-auto flex max-w-[50rem] flex-col gap-8">
            {isPending && <BarLoading />}
            <FormInput
               disabled={isPending}
               name="email"
               placeholder={t("email")}
               type="email"
               icon={<IoCheckmarkOutline />}
            />
            <FormInput
               disabled={isPending}
               name="password"
               placeholder={t("password")}
               type="password"
            />
            <Link
               to="/forgot-password"
               className="text-end font-medium text-primary-500 underline hover:text-primary-800"
            >
               {t("forgot_password")}
            </Link>
            <Button
               disabled={isPending}
               type="submit"
               className="w-full"
               style={{}}
            >
               {t("login")}
            </Button>
            <div
               role="button"
               className="text-center text-gray-400"
               onClick={() => {
                  localStorage.setItem(
                     "lang",
                     i18n.language === "en" ? "ar" : "en",
                  );
                  i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
               }}
            >
               <h3 className="">{t("change_language")}</h3>
               <span className="mt-4 flex items-center justify-center gap-3">
                  {i18n.language === "en" ? "العربية" : "English"}
                  <IoChevronForward className="text-primary-500 lang-ar:rotate-180" />
               </span>
            </div>
         </Form>
      </Formik>
   );
};

export default LoginForm;
