import LoginForm from "@/features/Auth/Login/LoginForm";
import React from "react";
import { useTranslation } from "react-i18next";

const Login = () => {
   const { t } = useTranslation("form");
   return (
      <div className="bg-gray-20">
         <div className="removeScrollBars container flex h-screen flex-col items-center justify-between gap-20 overflow-auto py-[4rem] lg:py-[8rem]">
            <div className="aspect-square w-[10rem] rounded-full border border-primary-50 bg-white p-4">
               <img
                  src="/images/logo.svg "
                  className="h-full w-full object-contain"
                  alt="logo"
               />
            </div>
            <div className="w-full space-y-8">
               <div className="text-center">
                  <h1 className="mb-6 text-4xl font-bold text-primary-500">
                     {t("login")}
                  </h1>
                  <p className="text-sm text-gray-300">
                     {t("login_description")}
                  </p>
               </div>
               <LoginForm />
            </div>

            <div className="w-[15rem]">
               <img
                  src="/images/auth/shapeLogin.svg"
                  className="h-full"
                  alt="shape"
               />
            </div>
         </div>
      </div>
   );
};

export default Login;
