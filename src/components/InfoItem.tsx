import { cn } from "@/lib/utils";

type InfoItemProps = {
   title: string;
   value: string;
   containerClassName?: string;
   titleClassName?: string;
   valueClassName?: string;
};

function InfoItem({
   title,
   value,
   containerClassName,
   titleClassName,
   valueClassName,
}: InfoItemProps) {
   return (
      <div className={cn("flex flex-col gap-1", containerClassName)}>
         <h4 className={cn("font-semibold text-gray-50", titleClassName)}>
            {title}
         </h4>
         <p className={cn("text-xl", valueClassName)}>{value}</p>
      </div>
   );
}

export default InfoItem;
