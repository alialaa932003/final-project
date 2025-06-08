import { useState } from "react";
import { MdOutlineEventAvailable } from "react-icons/md";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { QUERY_KEYS } from "@/constants";
import { getAllAvailabilitiesForDoctor } from "@/services/staff/doctors/availabilities/getAllAvailabilitiesForDoctor";
import WithLoadingAndError from "@/components/WithLoadingAndError";
import { FiPlus } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import AvailabilityCardItem from "./AvailabilityCardItem";
import AddAvailabilityForm from "./AddAvailabilityForm";
import { Separator } from "@/components/ui/separator";

type ManageAvailabilitiesProps = {
   doctorId: string;
   doctorName: string;
};

function ManageAvailabilities({
   doctorId,
   doctorName,
}: ManageAvailabilitiesProps) {
   const { t } = useTranslation(["global", "staff"]);
   const [open, setOpen] = useState(false);
   const [isOpenAddForm, setIsOpenAddForm] = useState(false);
   const { data, isLoading, isError } = useCustomQuery(
      [QUERY_KEYS.DOCTOR_AVAILABILITIES, doctorId],
      getAllAvailabilitiesForDoctor({ doctorId }),
   );

   const handleOpenAddForm = () => setIsOpenAddForm(true);
   const handleCloseAddForm = () => setIsOpenAddForm(false);

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>
            <Button
               variant="ghost"
               className="h-auto justify-between gap-2 rounded-sm !px-2 py-2 text-sm font-normal"
            >
               Manage Availabilities
               <MdOutlineEventAvailable />
            </Button>
         </DialogTrigger>

         <DialogContent className="max-h-[92dvh] sm:max-w-2xl">
            <DialogHeader className="py-1">
               <div className="flex items-center justify-between">
                  <DialogTitle>
                     Manage Availabilities for Doctor {doctorName}
                  </DialogTitle>
                  <Button size="icon" onClick={handleOpenAddForm}>
                     <FiPlus className="text-2xl" />
                  </Button>
               </div>
               <DialogDescription hidden>
                  Here you can manage the availabilities for {doctorName}. You
                  can add, edit, or delete availabilities as needed.
               </DialogDescription>
            </DialogHeader>

            <div
               className={`${isOpenAddForm ? "h-[300px]" : "h-0"} overflow-hidden transition-[height] will-change-[height]`}
            >
               <AddAvailabilityForm
                  doctorId={doctorId}
                  onClose={handleCloseAddForm}
               />
            </div>

            <Separator
               className={`${isOpenAddForm ? "opacity-100" : "opacity-0"} transition-opacity`}
            />

            <WithLoadingAndError
               isLoading={isLoading}
               hasError={isError}
               errorText="Failed to load availabilities"
            >
               <ul className="mx-1 max-h-[40dvh] space-y-4 overflow-y-auto p-1">
                  {data?.data?.items.map((availability) => (
                     <AvailabilityCardItem
                        key={availability.id}
                        availability={availability}
                     />
                  ))}
               </ul>
            </WithLoadingAndError>
         </DialogContent>
      </Dialog>
   );
}

export default ManageAvailabilities;
