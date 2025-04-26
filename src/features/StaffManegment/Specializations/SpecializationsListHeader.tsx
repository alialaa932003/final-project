import React from "react";
import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import MainHeader from "@/components/MainHeader";
import SearchInput from "@/features/common/SearchInput";
import AddEditSpecializationDialog from "./AddEditSpecializationDialog";

const SpecializationsListHeader = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   return (
      <>
         <MainHeader>
            <MainHeader.TopSection>
               <MainHeader.Title
                  title="Specializations List"
                  description="Here You will find the list of specializations"
               />
               <MainHeader.Actions>
                  <Button
                     type="button"
                     onClick={() => {
                        setIsOpen(true);
                     }}
                     className="flex items-center gap-2"
                  >
                     <FiPlus className="text-2xl" />
                     Add Specialization
                  </Button>
                  <AddEditSpecializationDialog
                     isOpen={isOpen}
                     onOpenChange={setIsOpen}
                  />
               </MainHeader.Actions>
            </MainHeader.TopSection>

            <MainHeader.Filters>
               <SearchInput searchKey="search" />
            </MainHeader.Filters>
         </MainHeader>
      </>
   );
};

export default SpecializationsListHeader;
