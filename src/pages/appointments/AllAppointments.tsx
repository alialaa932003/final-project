import PageLayout from "@/components/layouts/PageLayout";
import AppointmentsList from "@/features/appointments/AppointmentsList";
import AppointmentsListHeader from "@/features/appointments/AppointmentsListHeader";
import React from "react";

const AllAppointments = () => {
   return (
      <PageLayout pageName="Appointments" className="animate-fade-in space-y-6">
         <AppointmentsListHeader />
         <AppointmentsList />
      </PageLayout>
   );
};

export default AllAppointments;
