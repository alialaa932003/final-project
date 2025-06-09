import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/features/common/Navbar";
import Sidebar from "@/features/common/Sidebar";
import ResponsiveSidebar from "@/features/common/Navbar/ResponsiveSidebar";

const DashboardLayout = () => {
   const { i18n } = useTranslation();
   console.log(i18n.language);
   const [openResponsiveSidebar, setOpenRespomsiveSidebar] =
      React.useState(false);
   const { pathname } = useLocation();
   useEffect(() => {
      if (openResponsiveSidebar) {
         setOpenRespomsiveSidebar(false);
      }
   }, [pathname]);

   return (
      <>
         <div className="grid h-screen animate-fade-in grid-rows-[auto_1fr] bg-gray-20 lg:grid-cols-[270px_1fr] lg:grid-rows-[auto_1fr_0rem] 2xl:grid-cols-[300px_1fr]">
            <Navbar
               openResponsiveSidebar={openResponsiveSidebar}
               setOpenRespomsiveSidebar={setOpenRespomsiveSidebar}
            />

            <div className="flex h-full w-full flex-col overflow-y-auto overflow-x-hidden">
               <Outlet />
            </div>

            <Sidebar className="hidden lg:flex" />

            <ResponsiveSidebar
               openResponsiveSidebar={openResponsiveSidebar}
               setOpenRespomsiveSidebar={setOpenRespomsiveSidebar}
            />
         </div>
      </>
   );
};

export default DashboardLayout;
