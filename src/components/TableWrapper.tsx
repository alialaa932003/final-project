import React from "react";

interface TableWrapperProps {
   children: React.ReactNode;
}
const TableWrapper = ({ children }: TableWrapperProps) => {
   return <div className="h-full space-y-4">{children}</div>;
};

export default TableWrapper;
