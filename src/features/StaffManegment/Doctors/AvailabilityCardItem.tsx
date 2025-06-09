import dayjs from "dayjs";
import { Separator } from "@/components/ui/separator";
import { getDayjsFromTime } from "@/utils/getDayjsFromTime";
import InfoItem from "@/components/InfoItem";

type AvailabilityCardItemProps = {
   availability: Availability;
};

function AvailabilityCardItem({ availability }: AvailabilityCardItemProps) {
   const preparedFrom = getDayjsFromTime(availability.from).format("HH:mm A");
   const preparedTo = getDayjsFromTime(availability.to).format("HH:mm A");
   const preparedDate = dayjs(availability.date).format("YYYY-MM-DD");

   return (
      <li className="rounded-xl bg-primary-500/90 px-8 py-6 text-white">
         <div className="grid gap-4 px-1 sm:grid-cols-3">
            <InfoItem title="From:" value={preparedFrom} />
            <Separator
               orientation="vertical"
               className="h-12 justify-self-center max-sm:hidden"
            />
            <Separator className="sm:hidden" />
            <InfoItem title="To:" value={preparedTo} />
         </div>

         <Separator className="my-4" />

         <div className="grid items-center gap-4 px-1 sm:grid-cols-3">
            <InfoItem title="Date:" value={preparedDate} />
            <Separator
               orientation="vertical"
               className="h-12 justify-self-center max-sm:hidden"
            />
            <Separator className="sm:hidden" />
            <InfoItem title="Clinic:" value={availability.clinic.name} />
         </div>
      </li>
   );
}

export default AvailabilityCardItem;
