import Filter from "@/assets/icons/Filter";
import MainHeader from "@/components/MainHeader";
import { Button } from "@/components/ui/button";
import SearchInput from "@/features/common/SearchInput";
import { useTranslation } from "react-i18next";
import { FiPlus } from "react-icons/fi";
import AddEditReceptionistDialog from "./AddEditReceptionistDialog";

function Header() {
   const { t } = useTranslation(["global", "staff"]);

   return (
      <MainHeader>
         <MainHeader.TopSection>
            <MainHeader.Title
               title={t("staff:receptionists")}
               description={t("staff:receptionist-header-description")}
            />
            <MainHeader.Actions>
               <AddEditReceptionistDialog
                  triggerButton={
                     <Button className="flex items-center gap-2">
                        <FiPlus className="text-2xl" />
                        {t("global:add")} {t("staff:receptionist")}
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
