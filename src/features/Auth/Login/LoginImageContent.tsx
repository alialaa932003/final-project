import React from "react";

const LoginImageContent = () => {
   return (
      <section className="hidden bg-[url(/images/auth/login.jpg)] bg-cover bg-center bg-no-repeat lg:block">
         <div className="h-full bg-primary-500/70 px-8 py-[15%] xl:px-12">
            <div className="mx-auto flex max-w-[38rem] flex-col gap-6">
               <h3 className="text-xl text-white/70">Hello</h3>
               <h1 className="text-6xl font-bold text-white">
                  Welcome To <br /> Our Dashboard
               </h1>
               <p className="text-white xl:text-lg">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
               </p>
            </div>
         </div>
      </section>
   );
};

export default LoginImageContent;
