import PageLayout from "@/components/layouts/PageLayout";
import Header from "@/features/Patients/Header";
import PatientsList from "@/features/Patients/PatientsList";
import { useTranslation } from "react-i18next";

function AllPatients() {
   const { t } = useTranslation("patients");

   return (
      <PageLayout pageName={t("patients")} className="flex flex-col gap-7">
         <Header />
         <PatientsList />
      </PageLayout>
   );
}

export default AllPatients;
