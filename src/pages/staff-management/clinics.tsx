import PageLayout from "@/components/layouts/PageLayout";
import ClinicsList from "@/features/StaffManegment/Clinics/ClinicsList";
import ClinicsListHeader from "@/features/StaffManegment/Clinics/ClinicsListHeader";
import React from "react";

const Clinics = () => {
   return (
      <PageLayout pageName="Clinics" className="animate-fade-in space-y-6">
         <ClinicsListHeader />
         <ClinicsList />
      </PageLayout>
   );
};

export default Clinics;
