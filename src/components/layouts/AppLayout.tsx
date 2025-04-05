import React from "react";
import Loading from "../Loading";
import { Outlet } from "react-router-dom";
import { useMe } from "@/features/Auth/useMe";

const AppLayout = () => {
   const { isPending } = useMe();
   if (isPending)
      return (
         <div className="flex h-screen w-full items-center justify-center">
            <Loading itemClassName="size-14" />
         </div>
      );
   return <Outlet />;
};

export default AppLayout;
