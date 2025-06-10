import Filter from "@/assets/icons/Filter";
import MainHeader from "@/components/MainHeader";
import { Button } from "@/components/ui/button";
import SearchInput from "@/features/common/SearchInput";
import { useTranslation } from "react-i18next";
import { FiPlus } from "react-icons/fi";
import AddEditPatientDialog from "./AddEditPatientDialog";

function Header() {
   const { t } = useTranslation(["global", "patients"]);

   return (
      <MainHeader>
         <MainHeader.TopSection>
            <MainHeader.Title
               title={t("patients:patients")}
               // description={t("patients:patient-header-description")}
               description="Manage all patients in the system, including their medical records."
            />
            <MainHeader.Actions>
               <AddEditPatientDialog
                  triggerButton={
                     <Button className="flex items-center gap-2">
                        <FiPlus className="text-2xl" />
                        {t("global:add")} {t("patients:patient")}
                     </Button>
                  }
               />
            </MainHeader.Actions>
         </MainHeader.TopSection>

         <MainHeader.Filters>
            <SearchInput searchKey="search" />
            {/* <Button
               variant="ghost"
               className="flex w-full gap-4 border-gray-400 max-sm:w-full sm:max-w-[143px]"
            >
               <Filter /> {t("global:filter")}
            </Button> */}
         </MainHeader.Filters>
      </MainHeader>
   );
}

export default Header;
