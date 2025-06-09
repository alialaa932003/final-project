import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LuCalendarRange, LuLayoutDashboard } from "react-icons/lu";
import {
   MdLogout,
   MdOutlineAddBox,
   MdOutlineTypeSpecimen,
} from "react-icons/md";
import { FaClinicMedical } from "react-icons/fa";

import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";

import FullPageLoading from "@/components/FullPageLoading";
import { useLogout } from "../Auth/useLogout";
import { cn } from "@/lib/utils";
import { LucideUsersRound } from "lucide-react";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { useQueryClient } from "@tanstack/react-query";
import { UserResponse } from "@/types/auth";

const Sidebar = ({ className }: { className?: string }) => {
   const queryClient = useQueryClient();
   const data = queryClient.getQueryData<{ data: UserResponse }>([
      "current-user",
   ]);
   const user = data?.data;
   const currentUserRole = user?.role.toLocaleLowerCase() || "doctor";
   const { logout, isPending } = useLogout();
   const links = [
      {
         name: "Dashboard",
         icon: <LuLayoutDashboard />,
         to: `/dashboard`,
         type: "single",
         allowedRoles: ["admin"],
      },

      {
         name: "Staff management",
         icon: <LucideUsersRound />,
         type: "multi",
         items: [
            {
               name: "Doctors",
               to: "/staff-management/doctors",
               allowedRoles: ["admin"],
            },
            {
               name: "Nurses",
               to: "/staff-management/nurses",
               allowedRoles: ["admin"],
            },
            {
               name: "Receptionists",
               to: "/staff-management/receptionists",
               allowedRoles: ["admin"],
            },
         ],
      },
      {
         name: "Clinics",
         icon: <FaClinicMedical />,
         to: `/staff-management/clinics`,
         type: "single",
         allowedRoles: ["admin"],
      },
      {
         name: "Specializations",
         icon: <MdOutlineTypeSpecimen />,
         to: `/staff-management/specializations`,
         type: "single",
         allowedRoles: ["admin"],
      },
      {
         name: "Patients",
         icon: <BsFillPersonVcardFill />,
         to: `/patients`,
         type: "single",
         allowedRoles: ["admin", "doctor", "receptionist"],
      },
      {
         name: "All Bookings",
         icon: <LuCalendarRange />,
         to: `/bookings`,
         type: "single",
         allowedRoles: ["admin", "doctor", "receptionist"],
      },
      {
         name: "Add Booking",
         icon: <MdOutlineAddBox />,
         to: `/add-booking`,
         type: "single",
         allowedRoles: ["admin", "doctor", "receptionist"],
      },
   ];
   const { pathname } = useLocation();

   const filteredLinks = React.useMemo(() => {
      return links
         .map((link) => {
            if (link.type === "multi" && link.items) {
               const filteredItems = link.items.filter(
                  (item) =>
                     item.allowedRoles &&
                     item.allowedRoles.includes(currentUserRole),
               );
               if (filteredItems.length > 0) {
                  return { ...link, items: filteredItems };
               }
               return null; //  Or an empty object if you prefer to handle it differently
            } else if (
               link.allowedRoles &&
               link.allowedRoles.includes(currentUserRole)
            ) {
               return link;
            }
            return null;
         })
         .filter(Boolean); // Remove null entries
   }, [links, currentUserRole]);

   const [activeAccordion, setActiveAccordion] = React.useState(
      `item-${filteredLinks.findIndex((link) =>
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
               {filteredLinks.map((link, index) => {
                  if (!link) return null; //  Should not happen due to .filter(Boolean) but good for type safety

                  if (link.type === "multi") {
                     //  Ensure link.items exists and is not empty
                     if (!link.items || link.items.length === 0) {
                        return null;
                     }
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
                                 {link?.items?.map((item, itemIndex) => {
                                    return (
                                       <NavLink
                                          key={itemIndex}
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
               Logout
            </button>
         </div>
      </div>
   );
};

export default Sidebar;
