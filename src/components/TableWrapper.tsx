import React from "react";
import Pagination from "./Pagination";
import { cn } from "@/lib/utils";

interface TableWrapperProps {
   children: React.ReactNode;
   totalPages?: number;
   className?: string;
   noContainerStyle?: boolean;
}
const TableWrapper = ({
   children,
   totalPages,
   className,
   noContainerStyle,
}: TableWrapperProps) => {
   return (
      <div
         className={cn(
            !noContainerStyle &&
               "h-full space-y-4 rounded-2xl bg-gray-0 p-5 shadow-md",
            className,
         )}
      >
         {children}
         {totalPages && <Pagination pageCount={totalPages} />}
      </div>
   );
};

export default TableWrapper;
