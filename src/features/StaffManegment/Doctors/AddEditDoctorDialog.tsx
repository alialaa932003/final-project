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
import { createDoctor } from "@/services/staff/doctors/createDoctor";
import { QUERY_KEYS } from "@/constants";
import { updateDoctor } from "@/services/staff/doctors/updateDoctor";
import { Form, Formik } from "formik";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getOneDoctors } from "@/services/staff/doctors/getOneDoctor";
import InputField from "@/components/form/InputField";
import SelectField from "@/components/fields/SelectField";
import { getAllSpecializations } from "@/services/staff/specializations/getAllSpecializations";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const DEFAULT_INITIAL_VALUES: DoctorRequest = {
   first_name: "",
   last_name: "",
   email: "",
   phone: "",
   specialization_id: -1,
};

type AddEditDoctorProps = {
   id?: number | string;
   triggerButton: ReactNode;
};

function AddEditDoctorDialog({ id, triggerButton }: AddEditDoctorProps) {
   const [open, setOpen] = useState(false);
   const { t } = useTranslation("staff");
   const { data: doctor, isLoading: isGettingDoctor } = useCustomQuery(
      [QUERY_KEYS.DOCTORS, id],
      getOneDoctors({ id }),
      {
         enabled: !!id,
      },
   );
   const { data: specializations, isLoading: isGettingSpecializations } =
      useCustomQuery([QUERY_KEYS.SPECIALIZATIONS], getAllSpecializations());
   const specializationOptions = specializations?.data.items.map((spec) => ({
      label: spec.name,
      value: spec.id,
   }));

   const { mutate: createDoctorMutate, isPending: isCreatePending } =
      useOptimisticMutation({
         mutationFn: createDoctor,
         queryKey: [QUERY_KEYS.DOCTORS],
         mutationType: "add",
      });
   const { mutate: updateDoctorMutate, isPending: isUpdatePending } =
      useOptimisticMutation({
         mutationFn: updateDoctor,
         queryKey: [QUERY_KEYS.DOCTORS],
         mutationType: "edit",
      });
   const isPending = isCreatePending || isUpdatePending || isGettingDoctor;

   const handleSubmit = (values: DoctorRequest) => {
      if (id) {
         updateDoctorMutate(
            { id, newData: values },
            {
               onSuccess: () => {
                  setOpen(false);
                  toast.success("Doctor updated successfully");
               },
               onError: (error) => {
                  console.error("Error updating doctor:", error);
                  toast.error("Failed to update doctor");
               },
            },
         );
      } else {
         createDoctorMutate(values, {
            onSuccess: () => {
               setOpen(false);
               toast.success("Doctor created successfully");
            },
            onError: (error) => {
               console.error("Error updating doctor:", error);
               toast.error("Failed to create doctor");
            },
         });
      }
   };

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>{triggerButton}</DialogTrigger>
         <Formik
            initialValues={
               id
                  ? {
                       first_name: doctor?.data?.first_name || "",
                       last_name: doctor?.data?.last_name || "",
                       email: doctor?.data?.email || "",
                       phone: doctor?.data?.phone || "",
                       specialization_id: doctor?.data?.specialization.id || -1,
                    }
                  : DEFAULT_INITIAL_VALUES
            }
            onSubmit={handleSubmit}
            enableReinitialize
         >
            {({ values, setFieldValue, submitForm }) => (
               <DialogContent className="sm:max-w-3xl">
                  <DialogHeader>
                     <DialogTitle>
                        {id ? t("edit") : t("add")} {t("doctor")}
                     </DialogTitle>
                     <DialogDescription>
                        {id
                           ? "Edit the details of the doctor."
                           : "Add a new doctor to the system."}
                     </DialogDescription>
                  </DialogHeader>

                  <Form>
                     <div className="flex gap-2 max-sm:flex-col">
                        <InputField
                           id="first_name"
                           name="first_name"
                           label="First Name"
                           placeholder="Enter first name"
                           disabled={isPending}
                           className="min-w-24"
                        />
                        <InputField
                           id="last_name"
                           name="last_name"
                           label="Last Name"
                           placeholder="Enter last name"
                           disabled={isPending}
                           className="min-w-24"
                        />
                     </div>

                     <InputField
                        id="email"
                        name="email"
                        label="Email"
                        placeholder="Enter email"
                        disabled={isPending}
                     />
                     <InputField
                        id="phone"
                        name="phone"
                        label="Phone"
                        placeholder="Enter phone number"
                        disabled={isPending}
                     />

                     <SelectField
                        isUseSearchParam={false}
                        label="Specialization"
                        placeholder="Select specialization"
                        value={
                           values.specialization_id &&
                           values.specialization_id !== -1
                              ? `${values.specialization_id}`
                              : ""
                        }
                        options={specializationOptions || []}
                        onChange={(value) =>
                           setFieldValue("specialization_id", value)
                        }
                        disabled={isPending}
                     />
                  </Form>

                  <DialogFooter>
                     <Button type="submit" onClick={submitForm}>
                        {id ? "Edit" : "Add"}
                     </Button>
                  </DialogFooter>
               </DialogContent>
            )}
         </Formik>
      </Dialog>
   );
}

export default AddEditDoctorDialog;
