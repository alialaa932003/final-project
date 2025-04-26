import PageLayout from "@/components/layouts/PageLayout";
import SpecializationsList from "@/features/StaffManegment/Specializations/SpecializationsList";
import SpecializationsListHeader from "@/features/StaffManegment/Specializations/SpecializationsListHeader";
import React from "react";

const Specializations = () => {
   return (
      <PageLayout
         pageName="Specializations"
         className="animate-fade-in space-y-6"
      >
         <SpecializationsListHeader />
         <SpecializationsList />
      </PageLayout>
   );
};

export default Specializations;
