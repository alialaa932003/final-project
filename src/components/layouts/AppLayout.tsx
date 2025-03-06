import React from "react";
import Loading from "../Loading";
import { Outlet } from "react-router-dom";
import { useMe } from "@/features/Auth/useMe";
import { useTranslation } from "react-i18next";

const AppLayout = () => {
   const { i18n } = useTranslation();
   const { isPending } = useMe(i18n.language);
   if (isPending)
      return (
         <div className="flex h-screen w-full items-center justify-center">
            <Loading itemClassName="size-14" />
         </div>
      );
   return <Outlet key={i18n.language} />;
};

export default AppLayout;
