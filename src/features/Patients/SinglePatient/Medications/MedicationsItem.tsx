import dayjs from "dayjs";
import { Separator } from "@/components/ui/separator";
import { getDayjsFromTime } from "@/utils/getDayjsFromTime";
import InfoItem from "@/components/InfoItem";

type MedicationsItemProps = {
   medication: Medication;
};

function MedicationsItem({ medication }: MedicationsItemProps) {
   return (
      <li className="rounded-xl bg-primary-500/90 px-8 py-6 text-white">
         <div className="grid gap-4 px-1 sm:grid-cols-3">
            <InfoItem title="Name:" value={medication.name} />
            <Separator
               orientation="vertical"
               className="h-12 justify-self-center max-sm:hidden"
            />
            <Separator className="sm:hidden" />
            <InfoItem title="Dosage:" value={medication.dosage} />
         </div>

         <Separator className="my-4" />

         <div className="grid items-center gap-4 px-1 sm:grid-cols-3">
            <InfoItem
               title="DurationInDays:"
               value={medication.durationInDays?.toString() || "N/A"}
            />
            <Separator
               orientation="vertical"
               className="h-12 justify-self-center max-sm:hidden"
            />
            <Separator className="sm:hidden" />
            <InfoItem title="Frequency:" value={medication.frequency} />
         </div>
      </li>
   );
}

export default MedicationsItem;
