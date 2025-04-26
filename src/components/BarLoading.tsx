import React from "react";
import { createPortal } from "react-dom";

const BarLoading = () => {
   return createPortal(
      <div className="fixed top-0 z-[99999999] flex h-[6px] w-full bg-primary-500/60">
         <span className="h-full w-full animate-bar-loading bg-primary-500"></span>
      </div>,
      document.getElementById("portal") as HTMLElement,
   );
};

export default BarLoading;
