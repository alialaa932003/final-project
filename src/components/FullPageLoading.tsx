import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Loading from "./Loading";
import { cn } from "@/lib/utils";

const FullPageLoading = ({ className }: { className?: string }) => {
   return createPortal(
      <div
         className={cn(
            ` fixed left-0 top-0 z-[99999999999] flex h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.5)]`,
            className,
         )}
      >
         <Loading />
      </div>,
      document.getElementById("portal") as HTMLElement,
   );
};

export default FullPageLoading;
