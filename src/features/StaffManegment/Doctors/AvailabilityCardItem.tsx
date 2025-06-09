import dayjs from "dayjs";
import { Separator } from "@/components/ui/separator";
import { getDayjsFromTime } from "@/utils/getDayjsFromTime";

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
            <div className="space-y-1">
               <h4 className="font-semibold text-gray-50">From:</h4>
               <p className="text-xl">{preparedFrom}</p>
            </div>
            <Separator
               orientation="vertical"
               className="h-12 justify-self-center max-sm:hidden"
            />
            <Separator className="sm:hidden" />
            <div className="space-y-1">
               <h4 className="font-semibold text-gray-50">To:</h4>
               <p className="text-xl">{preparedTo}</p>
            </div>
         </div>

         <Separator className="my-4" />

         <div className="grid items-center gap-4 px-1 sm:grid-cols-3">
            <div className="space-y-1">
               <h4 className="font-semibold text-gray-50">Date:</h4>
               <p className="text-xl">{preparedDate}</p>
            </div>
            <Separator
               orientation="vertical"
               className="h-12 justify-self-center max-sm:hidden"
            />
            <Separator className="sm:hidden" />
            <div className="space-y-1">
               <h4 className="font-semibold text-gray-50">Clinic:</h4>
               <p className="text-xl">{availability.clinic.name}</p>
            </div>
         </div>
      </li>
   );
}

export default AvailabilityCardItem;
