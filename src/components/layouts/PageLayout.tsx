import { usePageDetails } from "@/context/PageDetailsProvider";
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
   const { setPageName } = usePageDetails();

   useEffect(() => {
      setPageName(pageName || "");
   }, [setPageName]);
   return (
      <div className={cn("h-full px-5 py-5 2xl:px-7", className)}>
         {children}
      </div>
   );
};

export default PageLayout;
