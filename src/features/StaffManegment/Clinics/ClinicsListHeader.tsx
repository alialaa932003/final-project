import React from "react";
import { Button } from "@/components/ui/button";
import Filter from "@/assets/icons/Filter";
import { PiExport } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import MainHeader from "@/components/MainHeader";
import SearchInput from "@/features/common/SearchInput";
import AddEditClinicDialog from "./AddEditClinicDialog";

const ClinicsListHeader = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   return (
      <>
         <MainHeader>
            <MainHeader.TopSection>
               <MainHeader.Title
                  title="Clinics List"
                  description="Here You will find the list of clinics"
               />
               <MainHeader.Actions>
                  {/* <Button
                     variant="outline"
                     className="flex w-44 items-center gap-2"
                  >
                     <PiExport className="text-2xl" />
                     Export
                  </Button> */}
                  <Button
                     type="button"
                     onClick={() => {
                        setIsOpen(true);
                     }}
                     className="flex items-center gap-2"
                  >
                     <FiPlus className="text-2xl" />
                     Add Clinic
                  </Button>
                  <AddEditClinicDialog
                     isOpen={isOpen}
                     onOpenChange={setIsOpen}
                  />
               </MainHeader.Actions>
            </MainHeader.TopSection>

            <MainHeader.Filters>
               <SearchInput searchKey="search" />
               {/* <Button
                  variant="ghost"
                  className="flex w-full gap-4 border-gray-400 max-sm:w-full sm:max-w-[143px]"
               >
                  <Filter /> Filter
               </Button> */}
            </MainHeader.Filters>
         </MainHeader>
      </>
   );
};

export default ClinicsListHeader;
