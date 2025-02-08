import { cn } from "@/lib/utils";
import React from "react";
import { IoIosSearch } from "react-icons/io";

const MobileGlobalSearch = ({ className }: { className?: string }) => {
   return (
      <div className={cn("block lg:hidden", className)}>
         <div className="cursor-pointer text-2xl text-primary-500">
            <IoIosSearch />
         </div>
      </div>
   );
};

export default MobileGlobalSearch;
