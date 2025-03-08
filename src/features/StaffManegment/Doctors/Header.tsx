import Filter from "@/assets/icons/Filter";
import { Button } from "@/components/ui/button";
import SearchInput from "@/features/common/SearchInput";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

function Header() {
   const { t } = useTranslation("global");

   return (
      <header className="flex flex-wrap items-center justify-between gap-6 py-5">
         <h2 className="text-[2rem] font-semibold text-gray-800">
            {t("doctor-list")}
         </h2>

         <div className="flex flex-wrap items-center justify-center gap-[30px] md:justify-end">
            <SearchInput searchKey="search" />
            <Button
               variant="ghost"
               className="flex w-full gap-4 border-gray-400 max-sm:w-full sm:max-w-[143px]"
            >
               <Filter /> Filter
            </Button>
            <Button
               variant="outline"
               className="flex items-center gap-4 max-sm:w-full"
            >
               <Plus /> {t("add-doctor")}
            </Button>
         </div>
      </header>
   );
}

export default Header;
