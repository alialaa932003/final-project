import React from "react";
import SearchInput from "../common/SearchInput";
import { Button } from "@/components/ui/button";
import Filter from "@/assets/icons/Filter";
import { PiExport } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import MainHeader from "@/components/MainHeader";

const AppointmentsListHeader = () => {
   return (
      <MainHeader>
         <MainHeader.TopSection>
            <MainHeader.Title
               title="Appointments List"
               description="Here You will find the list of appointments"
            />
            <MainHeader.Actions>
               <Button
                  variant="outline"
                  className="flex w-44 items-center gap-2"
               >
                  <PiExport className="text-2xl" />
                  Export
               </Button>
               <Button className="flex items-center gap-2">
                  <FiPlus className="text-2xl" />
                  Add Appointments
               </Button>
            </MainHeader.Actions>
         </MainHeader.TopSection>

         <MainHeader.Filters>
            <SearchInput searchKey="search" />
            <Button
               variant="ghost"
               className="flex w-full gap-4 border-gray-400 max-sm:w-full sm:max-w-[143px]"
            >
               <Filter /> Filter
            </Button>
         </MainHeader.Filters>
      </MainHeader>
   );
};

export default AppointmentsListHeader;
