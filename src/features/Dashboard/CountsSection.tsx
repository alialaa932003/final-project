import React from "react";
import { FaUserDoctor, FaUserNurse, FaUsersRectangle } from "react-icons/fa6"; // Example icons
import CountCard from "./CountCard";
import { useGetStaffAnalytics } from "./hooks/useGetStaffAnalytics";
import { MdTypeSpecimen } from "react-icons/md";

const CountsSection = () => {
   const { data } = useGetStaffAnalytics();
   const counts = data?.data;
   const countsData = [
      {
         title: "Doctors",
         count: counts?.num_of_doctors || "______",
         icon: <FaUserDoctor />,
         bgColor: "bg-gradient-to-br from-sky-400 to-sky-300",
         textColor: "text-white",
      },
      {
         title: "Nurses",
         count: counts?.num_of_nurses || "______",
         icon: <FaUserNurse />,
         bgColor: "bg-gradient-to-br from-orange-500 to-orange-300",
         textColor: "text-white",
      },
      {
         title: "Receptionists",
         count: counts?.num_of_receptionists || "______",
         icon: <FaUsersRectangle />,
         bgColor: "bg-gradient-to-br from-amber-500 to-amber-300",
         textColor: "text-white",
      },
      {
         title: "Specializations",
         count: counts?.num_of_specializations || "______",
         icon: <MdTypeSpecimen />,
         bgColor: "bg-gradient-to-br from-purple-500 to-purple-400",
         textColor: "text-white",
      },
   ];

   return (
      <div className="p-4 md:p-8">
         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {countsData.map((data, index) => (
               <CountCard
                  key={index}
                  title={data.title}
                  count={data.count}
                  icon={data.icon}
                  bgColor={data.bgColor}
                  textColor={data.textColor}
               />
            ))}
         </div>
      </div>
   );
};

export default CountsSection;
