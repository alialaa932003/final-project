import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import MedicationsList from "./MedicationsList";

type MedicationsListDialogProps = {
   triggerButton: ReactNode;
   medications: Medication[];
};

function MedicationsListDialog({
   triggerButton,
   medications,
}: MedicationsListDialogProps) {
   return (
      <Dialog>
         <DialogTrigger asChild>{triggerButton}</DialogTrigger>

         <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
               <DialogTitle>Medications</DialogTitle>
               <DialogDescription hidden>
                  This dialog displays a list of medications associated with the
                  patient.
               </DialogDescription>
            </DialogHeader>

            <MedicationsList medications={medications} />
         </DialogContent>
      </Dialog>
   );
}

export default MedicationsListDialog;
