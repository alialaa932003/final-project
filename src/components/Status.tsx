import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const statusVariants = cva(
   "flex py-2 rounded-xl px-4 gap-2 items-center justify-between  border w-full",
   {
      variants: {
         variant: {
            green: "text-green-500 bg-green-50 border-green-500",
            red: "text-red-500 bg-red-50 border-red-500",
            yellow: "text-yellow-500 bg-yellow-50 border-yellow-500",
            blue: "text-blue-500 bg-blue-50 border-blue-500",
            primary: "text-primary-500 bg-primary-50 border-primary-500",
            orange: "text-orange-500 bg-orange-50 border-orange-500",
            sky: "text-sky-500 bg-sky-50 border-sky-500",
         },
      },
   },
);
interface StatusProps {
   variant: VariantProps<typeof statusVariants>["variant"];
   className?: string;
   children: React.ReactNode;
}

const Status = ({ variant = "green", children, className }: StatusProps) => {
   return (
      <div className={cn(statusVariants({ variant, className }))}>
         {children}
      </div>
   );
};

export default Status;
