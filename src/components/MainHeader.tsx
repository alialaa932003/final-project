import React, { ReactNode } from "react";

// Main component types
type AppointmentsHeaderProps = {
   children: ReactNode;
   className?: string;
};

// Sub-component types
type SectionProps = {
   children: ReactNode;
   className?: string;
};

type TitleSectionProps = {
   title: string;
   description?: string;
   className?: string;
};

// Main component
const MainHeader = ({ children, className = "" }: AppointmentsHeaderProps) => {
   return (
      <div
         className={`space-y-5 rounded-2xl bg-gray-0 p-5 shadow-md ${className}`}
      >
         {children}
      </div>
   );
};

// Title section component
const Title = ({ title, description, className = "" }: TitleSectionProps) => {
   return (
      <div className={`flex-1 space-y-2 ${className}`}>
         <h2 className="text-2xl font-bold">{title}</h2>
         {description && <p className="text-sm text-gray-200">{description}</p>}
      </div>
   );
};

// Actions container
const Actions = ({ children, className = "" }: SectionProps) => {
   return (
      <div className={`flex flex-wrap items-center gap-4 ${className}`}>
         {children}
      </div>
   );
};

// Top row container (combines title and actions)
const TopSection = ({ children, className = "" }: SectionProps) => {
   return (
      <div
         className={`flex flex-wrap items-center justify-center gap-8 max-md:flex-col max-md:text-center ${className}`}
      >
         {children}
      </div>
   );
};

// Filters section
const Filters = ({ children, className = "" }: SectionProps) => {
   return (
      <div className={`flex flex-wrap items-center gap-[30px] ${className}`}>
         {children}
      </div>
   );
};

// Attach sub-components to the main component
MainHeader.Title = Title;
MainHeader.Actions = Actions;
MainHeader.TopSection = TopSection;
MainHeader.Filters = Filters;
export default MainHeader;
