import React from "react";
import Pagination from "./Pagination";

interface TableWrapperProps {
   children: React.ReactNode;
   totalPages?: number;
}
const TableWrapper = ({ children, totalPages }: TableWrapperProps) => {
   return (
      <div className="h-full space-y-4 rounded-2xl bg-gray-0 p-5 shadow-md">
         {children}
         {totalPages && <Pagination pageCount={totalPages} />}
      </div>
   );
};

export default TableWrapper;
