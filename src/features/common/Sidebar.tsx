import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LuCalendarRange, LuLayoutDashboard } from "react-icons/lu";
import { MdLogout } from "react-icons/md";

import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";

import FullPageLoading from "@/components/FullPageLoading";
import { useTranslation } from "react-i18next";
import { useLogout } from "../Auth/useLogout";
import { cn } from "@/lib/utils";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { LucideUsersRound } from "lucide-react";

const Sidebar = ({ className }: { className?: string }) => {
   const { t } = useTranslation("global");
   const { logout, isPending } = useLogout();
   const links = [
      {
         name: "Dashboard",
         icon: <LuLayoutDashboard />,
         to: `/dashboard`,
         type: "single",
      },
      {
         name: "Appointments",
         icon: <LuCalendarRange />,
         to: `/appointments`,
         type: "single",
      },
      {
         name: "Staff management",
         icon: <LucideUsersRound />,
         type: "multi",
         items: [
            {
               name: t("doctors"),
               to: "/staff-management/doctors",
            },
         ],
      },
   ];
   const { pathname } = useLocation();
   const [activeAccordion, setActiveAccordion] = React.useState(
      `item-${links.findIndex((link) =>
         link?.items?.some((route) => pathname.includes(route.to)),
      )}`,
   );
   console.log(activeAccordion);
   return (
      <div
         className={cn(
            "removeScrollBars mx-auto flex w-full max-w-[80rem] flex-row items-center justify-between overflow-auto bg-gradient-to-b from-primary-500 to-secondary-500 capitalize lg:row-span-full lg:flex-col",
            className,
         )}
      >
         {isPending && <FullPageLoading />}
         <div className="w-full">
            <Link
               to={"/dashboard"}
               className="flex w-full items-center gap-4 px-5 py-5 text-white"
            >
               <span className="">
                  <img src="/images/logo.svg" alt="logo" />
               </span>
               <p className="text-xl font-bold">
                  LIFE <span className="text-tertiary-500">R</span>
                  ECORD
               </p>
            </Link>
         </div>
         <div className="h-full w-full flex-1">
            <Accordion
               type="single"
               collapsible
               className="flex flex-col"
               value={activeAccordion}
               onValueChange={(value) => {
                  setActiveAccordion(value);
               }}
            >
               {links.map((link, index) => {
                  if (link.type === "multi") {
                     return (
                        <AccordionItem
                           className="border-0 border-transparent py-5"
                           value={`item-${index}`}
                           key={index}
                        >
                           <AccordionTrigger
                              className={`px-6 py-0 text-sm capitalize text-white item-active-circle hover:opacity-60 2xl:text-base [&.active]:text-white [&>svg]:text-inherit [&[data-state=open]]:text-white ${
                                 link?.items?.some((route) =>
                                    pathname.includes(route.to),
                                 )
                                    ? "active"
                                    : ""
                              } `}
                           >
                              <div className="flex items-center gap-2">
                                 <span className="text-[1.5em] text-tertiary-500">
                                    {link.icon}
                                 </span>
                                 {link.name}
                              </div>
                           </AccordionTrigger>
                           <AccordionContent className="px-6 pb-0 pt-3">
                              <div className={`relative mt-2 flex flex-col`}>
                                 {link?.items?.map((item, index) => {
                                    return (
                                       <NavLink
                                          key={index}
                                          to={item.to}
                                          className={
                                             "relative rounded-2xl px-2 py-4 text-sm text-white before:bg-gray-400 hover:opacity-60 [&.active]:bg-primary-700"
                                          }
                                       >
                                          <div className="relative ms-5 ps-5 before:absolute before:-start-[4px] before:top-1/2 before:size-2.5 before:-translate-y-1/2 before:rounded-full before:bg-[#06ACEC]">
                                             {item.name}
                                          </div>
                                       </NavLink>
                                    );
                                 })}
                              </div>
                           </AccordionContent>
                        </AccordionItem>
                     );
                  } else {
                     return (
                        <NavLink
                           key={index}
                           to={link.to || ""}
                           className={`px-6 py-5 text-sm text-white transition-all item-active-circle hover:opacity-60 2xl:text-base [&.active]:bg-primary-700 [&.active]:text-white`}
                        >
                           <div className="flex items-center gap-2">
                              <span className="text-[1.5em] text-tertiary-500">
                                 {link.icon}
                              </span>
                              {link.name}
                           </div>
                        </NavLink>
                     );
                  }
               })}
            </Accordion>
         </div>

         <div className="w-full py-8">
            <button
               className="mt-8 flex w-full items-center gap-4 px-6 py-5 text-base font-bold text-white transition-all hover:bg-primary-700"
               onClick={() => {
                  logout({});
               }}
            >
               <span className="text-[1.4em] text-tertiary-500">
                  <MdLogout />
               </span>
               {t("sign-out")}
            </button>
         </div>
      </div>
   );
};

export default Sidebar;
