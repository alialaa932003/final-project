import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { MdOutlineDataArray } from "react-icons/md";

type NoDataProps = {
   text?: string;
   icon?: ReactNode;
   className?: string;
   textClassName?: string;
   iconClassName?: string;
};

function NoData({
   text = "No data available",
   icon = <MdOutlineDataArray size={50} />,
   className,
   textClassName,
   iconClassName,
}: NoDataProps) {
   return (
      <div
         className={cn(
            "flex flex-col items-center justify-center p-8 text-center",
            className,
         )}
      >
         <div className={cn("mb-4 text-gray-300", iconClassName)}>{icon}</div>
         <p className={cn("m-0 text-base text-gray-600", textClassName)}>
            {text}
         </p>
      </div>
   );
}

export default NoData;
