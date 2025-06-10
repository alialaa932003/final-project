import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import ConditionsList from "./ObservationsList";
import AddObservationForm, { FormValues } from "./AddObservationForm";
import { FiPlus } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import ObservationsList from "./ObservationsList";

type ObservationsSectionProps = {
   onSubmit: (values: FormValues) => void;
   observations: Observation[];
};

function ObservationsSection({
   observations,
   onSubmit,
}: ObservationsSectionProps) {
   const [isOpenAddForm, setIsOpenAddForm] = useState(false);

   const handleOpenAddForm = () => setIsOpenAddForm(true);
   const handleCloseAddForm = () => setIsOpenAddForm(false);

   return (
      <div className={`space-y-4 py-2`}>
         <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium">Observations</h3>
            <Button
               type="button"
               size="icon"
               className="size-8 min-w-8"
               onClick={handleOpenAddForm}
            >
               <FiPlus className="text-xl" />
            </Button>
         </div>

         <div
            className={`${isOpenAddForm ? "h-[332px]" : "!mt-0 h-0"} overflow-hidden transition-[height] will-change-[height]`}
         >
            <AddObservationForm
               onClose={handleCloseAddForm}
               onSubmit={onSubmit}
            />
         </div>

         <Separator
            className={`${isOpenAddForm && observations.length > 0 ? "opacity-100" : "!mt-0 opacity-0"} transition-opacity`}
         />

         <ObservationsList observations={observations} />
      </div>
   );
}

export default ObservationsSection;
