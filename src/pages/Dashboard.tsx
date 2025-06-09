import PageLayout from "@/components/layouts/PageLayout";
import CountsSection from "@/features/Dashboard/CountsSection";
import PatientsChart from "@/features/Dashboard/PatientsChart";
import React from "react";

const Dashboard = () => {
   return (
      <PageLayout pageName="Dashboard" className="animate-fade-up">
         <CountsSection />
         <PatientsChart />
      </PageLayout>
   );
};

export default Dashboard;
