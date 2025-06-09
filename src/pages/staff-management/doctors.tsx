import PageLayout from "@/components/layouts/PageLayout";
import DoctorsList from "@/features/StaffManegment/Doctors/DoctorsList";
import Header from "@/features/StaffManegment/Doctors/Header";
import { useTranslation } from "react-i18next";

function Doctors() {
   const { t } = useTranslation("staff");

   return (
      <PageLayout
         pageName={t("doctors")}
         className="flex animate-fade-in flex-col gap-7"
      >
         <Header />
         <DoctorsList />
      </PageLayout>
   );
}

export default Doctors;
