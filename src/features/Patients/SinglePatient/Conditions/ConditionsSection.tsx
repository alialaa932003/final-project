import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import ConditionsList from "./ConditionsList";
import AddConditionForm, { FormValues } from "./AddConditionForm";
import { FiPlus } from "react-icons/fi";
import { Button } from "@/components/ui/button";

type ConditionsSectionProps = {
   onSubmit: (values: FormValues) => void;
   conditions: Condition[];
};

function ConditionsSection({ conditions, onSubmit }: ConditionsSectionProps) {
   const [isOpenAddForm, setIsOpenAddForm] = useState(false);

   const handleOpenAddForm = () => setIsOpenAddForm(true);
   const handleCloseAddForm = () => setIsOpenAddForm(false);

   return (
      <div className={`space-y-4 py-2 ${conditions.length > 0 ? "mb-4" : ""}`}>
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
            className={`${isOpenAddForm && conditions.length > 0 ? "opacity-100" : "!mt-0 opacity-0"} transition-opacity`}
         />

         <ConditionsList conditions={conditions} />
      </div>
   );
}

export default ConditionsSection;
