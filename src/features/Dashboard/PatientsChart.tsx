import React from "react";
import CustomBarChart from "@/components/charts/CustomBarChart";
import { useGetPatientsAnalytics } from "./hooks/useGetPatientsAnalytics";

const PatientsChart = () => {
   const { data, isPending } = useGetPatientsAnalytics();
   const patients = data?.data || [];
   return (
      <div className="flex rounded-2xl bg-white p-8 shadow-md">
         <CustomBarChart
            data={patients?.map((item) => ({
               ...item,
               textLabel: " ",
            }))}
            title={"Number of patients last week"}
            xAxisKey="date"
            dataKey="count"
            primaryColor="rgb(var(--tertiary-500))"
         />
      </div>
   );
};

export default PatientsChart;
