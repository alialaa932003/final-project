import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import ConditionsList from "./ObservationsList";
import ObservationsList from "./ObservationsList";

type ObservationsListDialogProps = {
   triggerButton: ReactNode;
   observations: Observation[];
};

function ObservationsListDialog({
   triggerButton,
   observations,
}: ObservationsListDialogProps) {
   return (
      <Dialog>
         <DialogTrigger asChild>{triggerButton}</DialogTrigger>

         <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
               <DialogTitle>Observations</DialogTitle>
               <DialogDescription hidden>
                  This dialog displays a list of observations associated with
                  the patient.
               </DialogDescription>
            </DialogHeader>

            <ObservationsList observations={observations} />
         </DialogContent>
      </Dialog>
   );
}

export default ObservationsListDialog;
