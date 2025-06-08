import { cn } from "@/lib/utils";

type SideBySideInputsContainerProps = {
   className?: string;
   children?: React.ReactNode;
};

function SideBySideInputsContainer({
   className,
   children,
}: SideBySideInputsContainerProps) {
   return (
      <div className={cn("flex gap-2 max-sm:flex-col", className)}>
         {children}
      </div>
   );
}

export default SideBySideInputsContainer;
