import { usePageDeitals } from "@/context/PageDeitalsContext";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
interface PageLayoutProps {
   children: React.ReactNode;
   className?: string;
   pageName?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
   children,
   className,
   pageName,
}) => {
   const { setPageName } = usePageDeitals();

   useEffect(() => {
      setPageName(pageName || "");
   }, [setPageName]);
   return (
      <div className={cn("h-full px-7 py-7 2xl:px-10", className)}>
         {children}
      </div>
   );
};

export default PageLayout;
