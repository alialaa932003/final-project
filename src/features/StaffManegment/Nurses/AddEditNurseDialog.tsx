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
import { getOneNurse } from "@/services/staff/nurses/getOneNurse";
import { getAllClinics } from "@/services/staff/clinics/getAllClinics";
import { createNurse } from "@/services/staff/nurses/createNurse";
import { updateNurse } from "@/services/staff/nurses/updateNurse";
import { useTranslation } from "react-i18next";
import { Switch } from "@/components/ui/switch";
import { toast } from "react-toastify";
import { nurseFormValidationSchema } from "./constants/nurseFormValidationSchema";
import SideBySideInputsContainer from "@/components/SideBySideInputsContainer";

const DEFAULT_INITIAL_VALUES: NurseRequest = {
   first_name: "",
   last_name: "",
   email: "",
   phone: "",
   national_id: "",
   clinic_id: "",
   is_active: true,
};

type AddEditNurseProps = {
   id?: string;
   triggerButton: ReactNode;
};

function AddEditNurseDialog({ id, triggerButton }: AddEditNurseProps) {
   const [open, setOpen] = useState(false);
   const { t } = useTranslation("staff");
   const { data: nurse, isLoading: isGettingNurse } = useCustomQuery(
      [QUERY_KEYS.NURSE, id],
      getOneNurse({ id }),
      {
         enabled: !!id,
      },
   );
   const { data: clinics, isLoading: isGettingClinics } = useCustomQuery(
      [QUERY_KEYS.SPECIALIZATIONS],
      getAllClinics(),
   );
   const clinicOptions = clinics?.data.items.map((clinic) => ({
      label: clinic.name,
      value: clinic.id,
   }));

   const { mutate: createNurseMutate, isPending: isCreatePending } =
      useOptimisticMutation({
         mutationFn: createNurse,
         queryKey: [QUERY_KEYS.NURSES],
         mutationType: "add",
      });
   const { mutate: updateNurseMutate, isPending: isUpdatePending } =
      useOptimisticMutation({
         mutationFn: updateNurse,
         queryKey: [QUERY_KEYS.NURSES],
         mutationType: "edit",
      });
   const isPending = isCreatePending || isUpdatePending || isGettingNurse;

   const handleSubmit = (values: NurseRequest) => {
      if (id) {
         updateNurseMutate(
            { id, newData: values },
            {
               onSuccess: () => {
                  setOpen(false);
                  toast.success("Nurse updated successfully");
               },
               onError: (error) => {
                  console.error("Error updating nurse:", error);
                  toast.error("Failed to update nurse");
               },
            },
         );
      } else {
         createNurseMutate(values, {
            onSuccess: () => {
               setOpen(false);
               toast.success("Nurse created successfully");
            },
            onError: (error) => {
               console.error("Error updating nurse:", error);
               toast.error("Failed to create nurse");
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
                       first_name:
                          nurse?.data?.first_name ||
                          DEFAULT_INITIAL_VALUES.first_name,
                       last_name:
                          nurse?.data?.last_name ||
                          DEFAULT_INITIAL_VALUES.last_name,
                       email:
                          nurse?.data?.email || DEFAULT_INITIAL_VALUES.email,
                       phone:
                          nurse?.data?.phone || DEFAULT_INITIAL_VALUES.phone,
                       national_id:
                          nurse?.data?.national_id ||
                          DEFAULT_INITIAL_VALUES.national_id,
                       clinic_id:
                          nurse?.data?.clinic.id ||
                          DEFAULT_INITIAL_VALUES.clinic_id,
                       is_active:
                          Boolean(nurse?.data?.is_active) ||
                          DEFAULT_INITIAL_VALUES.is_active,
                    }
                  : DEFAULT_INITIAL_VALUES
            }
            onSubmit={handleSubmit}
            enableReinitialize
            validationSchema={nurseFormValidationSchema}
         >
            {({ values, setFieldValue, submitForm }) => (
               <DialogContent className="sm:max-w-3xl">
                  <DialogHeader>
                     <DialogTitle>
                        {id ? t("edit") : t("add")} {t("nurse")}
                     </DialogTitle>
                     <DialogDescription>
                        {id
                           ? "Edit the details of the nurse."
                           : "Add a new nurse to the system."}
                     </DialogDescription>
                  </DialogHeader>

                  <Form>
                     <SideBySideInputsContainer>
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
                     </SideBySideInputsContainer>

                     <InputField
                        id="email"
                        name="email"
                        label="Email"
                        placeholder="Enter email"
                        disabled={isPending}
                     />

                     <SideBySideInputsContainer>
                        <InputField
                           id="phone"
                           name="phone"
                           label="Phone"
                           placeholder="Enter phone number"
                           disabled={isPending}
                        />
                        <InputField
                           id="national_id"
                           name="national_id"
                           label="National ID"
                           placeholder="Enter national id number"
                           disabled={isPending}
                        />
                     </SideBySideInputsContainer>

                     <SelectField
                        isUseSearchParam={false}
                        label="Clinic"
                        placeholder="Select Clinic"
                        value={values.clinic_id}
                        options={clinicOptions}
                        onChange={(value) => setFieldValue("clinic_id", value)}
                        disabled={isPending}
                        containerClassName="mb-6"
                     />

                     <div className="ms-1 flex items-center gap-2">
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
                        {id ? "Edit" : "Add"}
                     </Button>
                  </DialogFooter>
               </DialogContent>
            )}
         </Formik>
      </Dialog>
   );
}

export default AddEditNurseDialog;
