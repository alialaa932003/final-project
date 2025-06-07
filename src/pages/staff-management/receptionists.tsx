import PageLayout from "@/components/layouts/PageLayout";
import Header from "@/features/StaffManegment/Receptionists/Header";
import ReceptionistsList from "@/features/StaffManegment/Receptionists/ReceptionistsList";
import { useTranslation } from "react-i18next";

function Receptionists() {
   const { t } = useTranslation("staff");

   return (
      <PageLayout pageName={t("nurses")} className="flex flex-col gap-7">
         <Header />
         <ReceptionistsList />
      </PageLayout>
   );
}

export default Receptionists;
