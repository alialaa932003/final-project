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
import { useGetOneBooking } from "./hooks/useGetOneBooking";
import TextareaField from "@/components/form/TextareaField";
import { useCreateBooking } from "./hooks/useCreateBooking";
import { useUpdateBooking } from "./hooks/useUpdateBooking";
import { Switch } from "@/components/ui/switch";
import { bookingFormValidation } from "./hooks/bookingFormValidation";
import BarLoading from "@/components/BarLoading";

type EditBookingProps = {
   id?: number;
   triggerButton?: ReactNode;
   isOpen: boolean;
   onOpenChange: (open: boolean) => void;
};

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

   const { createBookingMutate, isCreatePending } = useCreateBooking();
   const { updateBookingMutate, isUpdatePending } = useUpdateBooking();

   const isPending = isCreatePending || isUpdatePending || isGettingBooking;

   return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
         <DialogTrigger asChild>{triggerButton}</DialogTrigger>
         <Formik
            enableReinitialize
            initialValues={{
               name: booking?.name || "",
               description: booking?.description || "",
               max_doctors: booking?.max_doctors || 0,
               is_active: Boolean(booking?.is_active) || false,
            }}
            onSubmit={(values: BookingRequest, { resetForm }) => {
               if (id) {
                  updateBookingMutate(
                     { id, newData: values },
                     {
                        onSuccess: () => {
                           resetForm();
                           onOpenChange(false);
                        },
                     },
                  );
               } else {
                  createBookingMutate(values, {
                     onSuccess: () => {
                        resetForm();
                        onOpenChange(false);
                     },
                  });
               }
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
                        id="name"
                        name="name"
                        label="Booking name"
                        placeholder="Enter the booking name"
                        disabled={isPending}
                        className="min-w-24"
                     />
                     <TextareaField
                        id="description"
                        name="description"
                        label="Description"
                        placeholder="Enter the booking description"
                        disabled={isPending}
                     />
                     <InputField
                        id="max_doctors"
                        name="max_doctors"
                        label="Max doctors"
                        type="number"
                        placeholder="Enter the max doctors"
                        disabled={isPending}
                        className="min-w-24"
                     />
                     <div className="flex items-center gap-2">
                        <h3>Is active?</h3>
                        <Switch
                           checked={values.is_active}
                           onCheckedChange={(checked) =>
                              setFieldValue("is_active", checked)
                           }
                        />
                     </div>
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
