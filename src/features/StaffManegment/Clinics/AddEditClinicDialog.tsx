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
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { createClinic } from "@/services/staff/clinics/createClinic";
import { QUERY_KEYS } from "@/constants";
import { updateClinic } from "@/services/staff/clinics/updateClinic";
import { Form, Formik } from "formik";
import InputField from "@/components/form/InputField";
import { useGetOneClinic } from "./hooks/useGetOneClinic";
import TextareaField from "@/components/form/TextareaField";
import { useCreateClinic } from "./hooks/useCreateClinic";
import { useUpdateClinic } from "./hooks/useUpdateClinic";
import { Switch } from "@/components/ui/switch";
import { clinicFormValidation } from "./hooks/clinicFormValidation";
import BarLoading from "@/components/BarLoading";

type AddEditClinicProps = {
   id?: string;
   triggerButton?: ReactNode;
   isOpen: boolean;
   onOpenChange: (open: boolean) => void;
};

function AddEditClinicDialog({
   id,
   triggerButton,
   isOpen,
   onOpenChange,
}: AddEditClinicProps) {
   const { data, isFetching: isGettingClinic } = useGetOneClinic({
      id,
      isOpen,
   });
   const clinic = data?.data;

   const { createClinicMutate, isCreatePending } = useCreateClinic();
   const { updateClinicMutate, isUpdatePending } = useUpdateClinic();

   const isPending = isCreatePending || isUpdatePending || isGettingClinic;

   return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
         <DialogTrigger asChild>{triggerButton}</DialogTrigger>
         <Formik
            enableReinitialize
            initialValues={{
               name: clinic?.name || "",
               description: clinic?.description || "",
               max_doctors: clinic?.max_doctors || 0,
               is_active: Boolean(clinic?.is_active) || false,
            }}
            onSubmit={(values: ClinicRequest, { resetForm }) => {
               if (id) {
                  updateClinicMutate(
                     { id, newData: values },
                     {
                        onSuccess: () => {
                           resetForm();
                           onOpenChange(false);
                        },
                     },
                  );
               } else {
                  createClinicMutate(values, {
                     onSuccess: () => {
                        resetForm();
                        onOpenChange(false);
                     },
                  });
               }
            }}
            validationSchema={clinicFormValidation}
         >
            {({ values, setFieldValue, submitForm }) => (
               <DialogContent className="sm:max-w-[650px]">
                  {isPending && <BarLoading />}
                  <DialogHeader>
                     <DialogTitle>
                        {id ? "Edit Clinic" : "Add Clinic"}
                     </DialogTitle>
                     <DialogDescription>
                        {id
                           ? "Edit the details of the clinic."
                           : "Add a new clinic to the system."}
                     </DialogDescription>
                  </DialogHeader>

                  <Form className="flex flex-col gap-4">
                     <InputField
                        id="name"
                        name="name"
                        label="Clinic name"
                        placeholder="Enter the clinic name"
                        disabled={isPending}
                        className="min-w-24"
                     />
                     <TextareaField
                        id="description"
                        name="description"
                        label="Description"
                        placeholder="Enter the clinic description"
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

export default AddEditClinicDialog;
