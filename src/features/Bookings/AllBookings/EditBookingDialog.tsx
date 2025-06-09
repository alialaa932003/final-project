import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { createBooking } from "@/services/bookings/createBooking";
import { QUERY_KEYS } from "@/constants";
import { updateBooking } from "@/services/bookings/updateBooking";
import { Form, Formik } from "formik";
import InputField from "@/components/form/InputField";
import { useGetOneBooking } from "../hooks/useGetOneBooking";
import TextareaField from "@/components/form/TextareaField";
import { useCreateBooking } from "../hooks/useCreateBooking";
import { useUpdateBooking } from "../hooks/useUpdateBooking";
import { Switch } from "@/components/ui/switch";
import { bookingFormValidation } from "../hooks/bookingFormValidation";
import BarLoading from "@/components/BarLoading";
import SelectSearchField from "@/components/form/SelectSearchField";
import moment from "moment";

type EditBookingProps = {
   id: string;
   triggerButton?: ReactNode;
   isOpen: boolean;
   onOpenChange: (open: boolean) => void;
};
export const statusOptions: { value: BookingStatus; label: string }[] = [
   { value: "cancelled", label: "Cancelled" },
   { value: "completed", label: "Completed" },
   { value: "no_show", label: "No Show" },
   { value: "pending", label: "Pending" },
];
function EditBookingDialog({
   id,
   triggerButton,
   isOpen,
   onOpenChange,
}: EditBookingProps) {
   const { data, isFetching: isGettingBooking } = useGetOneBooking({
      id,
      isOpen,
   });
   const booking = data?.data;

   const { updateBookingMutate, isUpdatePending } = useUpdateBooking();

   const isPending = isUpdatePending || isGettingBooking;

   return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
         <DialogTrigger asChild>{triggerButton}</DialogTrigger>
         <Formik
            enableReinitialize
            initialValues={{
               status: statusOptions.find(
                  (option) => option.value === booking?.status,
               ),
               date: moment(
                  `${booking?.appointment_date} ${booking?.appointment_time}`,
               ).format("YYYY-MM-DDTHH:mm"),
            }}
            onSubmit={(values, { resetForm }) => {
               console.log(
                  moment(
                     `${booking?.appointment_date} ${booking?.appointment_time}`,
                  ).format("YYYY-MM-DDTHH:mm"),
               );
               const newData = {
                  status: values.status?.value as BookingStatus,
                  appointment_date: moment(values.date).format("YYYY-MM-DD"),
                  appointment_time: moment(values.date).format("HH:mm"),
               };
               updateBookingMutate(
                  { id, newData },
                  {
                     onSuccess: () => {
                        resetForm();
                        onOpenChange(false);
                     },
                  },
               );
            }}
            validationSchema={bookingFormValidation}
         >
            {({ values, setFieldValue, submitForm }) => (
               <DialogContent className="sm:max-w-[650px]">
                  {isPending && <BarLoading />}
                  <DialogHeader>
                     <DialogTitle>
                        {id ? "Edit Booking" : "Add Booking"}
                     </DialogTitle>
                     <DialogDescription>
                        {id
                           ? "Edit the details of the booking."
                           : "Add a new booking to the system."}
                     </DialogDescription>
                  </DialogHeader>

                  <Form className="flex flex-col gap-4">
                     <InputField
                        id="date"
                        name="date"
                        label="Booking Date"
                        type="datetime-local"
                        placeholder="Enter the booking date"
                        disabled={isPending}
                        className="block min-w-24"
                     />
                     <SelectSearchField
                        placeholder="Select a status"
                        label="Status"
                        name="status"
                        options={statusOptions}
                        optionLabel="label"
                        optionValue="value"
                     />
                  </Form>

                  <DialogFooter>
                     <Button type="submit" onClick={submitForm}>
                        Save changes
                     </Button>
                  </DialogFooter>
               </DialogContent>
            )}
         </Formik>
      </Dialog>
   );
}

export default EditBookingDialog;
