import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import AddConditionForm, { FormValues } from "./AddConditionForm";
import { FiPlus } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import MedicationsList from "./MedicationsList";

type MedicationsSectionProps = {
   onSubmit: (values: FormValues) => void;
   medications: Medication[];
};

function MedicationsSection({
   medications,
   onSubmit,
}: MedicationsSectionProps) {
   const [isOpenAddForm, setIsOpenAddForm] = useState(false);

   const handleOpenAddForm = () => setIsOpenAddForm(true);
   const handleCloseAddForm = () => setIsOpenAddForm(false);

   return (
      <div className="space-y-4 py-2">
         <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium">Conditions</h3>
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
            <AddConditionForm
               onClose={handleCloseAddForm}
               onSubmit={onSubmit}
            />
         </div>

         <Separator
            className={`${isOpenAddForm ? "opacity-100" : "!mt-0 opacity-0"} transition-opacity`}
         />

         <MedicationsList medications={medications} />
      </div>
   );
}

export default MedicationsSection;
