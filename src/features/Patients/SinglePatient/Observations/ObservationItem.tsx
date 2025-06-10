import dayjs from "dayjs";
import { Separator } from "@/components/ui/separator";
import { getDayjsFromTime } from "@/utils/getDayjsFromTime";
import InfoItem from "@/components/InfoItem";

type ObservationItemProps = {
   observation: Observation;
};

function ObservationItem({ observation }: ObservationItemProps) {
   return (
      <li className="rounded-xl bg-primary-500/90 px-8 py-6 text-white">
         <div className="px-1">
            <InfoItem title="Test Name:" value={observation.testName} />
         </div>

         <Separator className="my-4" />

         <div className="grid items-center gap-4 px-1 sm:grid-cols-3">
            <InfoItem title="Value:" value={observation.value} />
            <Separator
               orientation="vertical"
               className="h-12 justify-self-center max-sm:hidden"
            />
            <Separator className="sm:hidden" />
            <InfoItem title="Unit:" value={observation.unit} />
         </div>
      </li>
   );
}

export default ObservationItem;
