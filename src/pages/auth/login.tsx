import LoginForm from "@/features/Auth/Login/LoginForm";
import LoginImageContent from "@/features/Auth/Login/LoginImageContent";
import React from "react";

const Login = () => {
   return (
      <main className="grid h-[100dvh] animate-fade-in lg:grid-cols-2">
         <LoginImageContent />
         <div className="relative z-10 flex flex-col items-center justify-center gap-10 bg-[url(/images/auth/login.jpg)] bg-cover bg-center px-4 py-4 md:px-6 lg:bg-none">
            <div className="absolute inset-0 z-[-1] h-full bg-primary-700/70 px-8 py-[15%] lg:hidden"></div>
            <div className="mx-auto flex flex-col gap-6 text-center lg:hidden">
               <h3 className="text-lg text-white/70">Hello</h3>
               <h1 className="text-4xl font-bold text-white xl:text-7xl">
                  Welcome To <br /> Our Dashboard
               </h1>
            </div>
            <LoginForm />
         </div>
      </main>
   );
};

export default Login;
