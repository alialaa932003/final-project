import PageLayout from "@/components/layouts/PageLayout";
import Header from "@/features/StaffManegment/Nurses/Header";
import NursesList from "@/features/StaffManegment/Nurses/NursesList";
import { useTranslation } from "react-i18next";

function Nurses() {
   const { t } = useTranslation("staff");

   return (
      <PageLayout pageName={t("nurses")} className="flex flex-col gap-7">
         <Header />
         <NursesList />
      </PageLayout>
   );
}

export default Nurses;
