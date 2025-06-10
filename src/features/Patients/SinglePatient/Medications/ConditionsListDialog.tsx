import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import ConditionsList from "./ConditionsList";

type ConditionsListDialogProps = {
   triggerButton: ReactNode;
   medications: Medication[];
};

function ConditionsListDialog({
   triggerButton,
   medications,
}: ConditionsListDialogProps) {
   return (
      <Dialog>
         <DialogTrigger asChild>{triggerButton}</DialogTrigger>

         <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
               <DialogTitle>Conditions</DialogTitle>
               <DialogDescription hidden>
                  This dialog displays a list of medications associated with the
                  patient.
               </DialogDescription>
            </DialogHeader>

            <ConditionsList medications={medications} />
         </DialogContent>
      </Dialog>
   );
}

export default ConditionsListDialog;
