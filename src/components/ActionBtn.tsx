import { cn } from "@/lib/utils";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

interface ActionBtnProps extends React.HTMLAttributes<HTMLButtonElement> {
   className?: string;
}
const ActionBtn = ({ className, ...props }: ActionBtnProps) => {
   return (
      <button
         className={cn(
            "flex w-full justify-center rounded-lg border border-primary-200 bg-primary-50 py-0.5 text-center text-2xl text-primary-500",
            className,
         )}
         {...props}
      >
         <BsThreeDots />
      </button>
   );
};

export default ActionBtn;
