import { UserResponse } from "@/types/auth";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useTranslation } from "react-i18next";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const UserInfo = () => {
   const { i18n } = useTranslation();
   const queryClient = useQueryClient();
   const data = queryClient.getQueryData<{ data: UserResponse }>([
      "current-user",
      i18n.language,
   ]);
   const user = data?.data?.user;
   return (
      <Link
         to={"/profile"}
         className="flex items-center justify-between gap-8 rounded-2xl border border-primary-300 bg-primary-400 px-5 py-4 text-white"
      >
         <div className="flex items-center gap-6">
            <span className="w-20 overflow-hidden rounded-full">
               <img
                  className="aspect-square w-full object-cover"
                  src={user?.image}
                  alt=""
               />
            </span>
            <div className="text-sm">
               <h2 className="font-semibold">{`${user?.first_name} ${user?.last_name}`}</h2>
               <span className="text-[1.2rem] font-medium text-primary-200">
                  {user?.roles[0].name}
               </span>
            </div>
         </div>
         <span className="lang-ar:rotate-180">
            <IoChevronForwardOutline />
         </span>
      </Link>
   );
};

export default UserInfo;
