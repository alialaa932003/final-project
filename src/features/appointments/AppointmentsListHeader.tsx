import React from "react";
import SearchInput from "../common/SearchInput";
import { Button } from "@/components/ui/button";
import Filter from "@/assets/icons/Filter";
import { PiExport } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";

const AppointmentsListHeader = () => {
   return (
      <div className="space-y-5 rounded-2xl bg-gray-0 p-5 shadow-md">
         <div className="flex flex-wrap items-center justify-center gap-8 max-md:flex-col max-md:text-center">
            <div className="flex-1">
               <h2 className="mb-2 text-2xl font-bold">Appointments List</h2>
               <p className="text-sm text-gray-200">
                  Here You will find the list of appointments{" "}
               </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
               <Button
                  variant={"outline"}
                  className="flex w-44 items-center gap-2"
               >
                  <PiExport className="text-2xl" />
                  Export
               </Button>{" "}
               <Button className="flex items-center gap-2">
                  <FiPlus className="text-2xl" />
                  Add Appointments
               </Button>
            </div>
         </div>
         <div className="flex flex-wrap items-center gap-[30px]">
            <SearchInput searchKey="search" />
            <Button
               variant="ghost"
               className="flex w-full gap-4 border-gray-400 max-sm:w-full sm:max-w-[143px]"
            >
               <Filter /> Filter
            </Button>
         </div>
      </div>
   );
};

export default AppointmentsListHeader;
