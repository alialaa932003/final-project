import dayjs from "dayjs";
import { Separator } from "@/components/ui/separator";
import { getDayjsFromTime } from "@/utils/getDayjsFromTime";
import InfoItem from "@/components/InfoItem";

type ConditionsItemProps = {
   condition: Condition;
};

function ConditionsItem({ condition }: ConditionsItemProps) {
   return (
      <li className="rounded-xl bg-primary-500/90 px-8 py-6 text-white">
         <div className="grid gap-4 px-1">
            <InfoItem title="Code:" value={condition.code} />
         </div>

         <Separator className="my-4" />

         <div className="grid items-center gap-4 px-1 sm:grid-cols-3">
            <InfoItem title="Description:" value={condition.description} />
         </div>
      </li>
   );
}

export default ConditionsItem;
