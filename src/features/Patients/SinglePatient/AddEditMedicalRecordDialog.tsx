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
import { QUERY_KEYS } from "@/constants";
import { Form, Formik } from "formik";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import InputField from "@/components/form/InputField";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { getOneMedicalRecord } from "@/services/patient-related/medical-record/getOneMedicalRecord";
import { createMedicalRecord } from "@/services/patient-related/medical-record/createMedicalRecord";
import { updateMedicalRecord } from "@/services/patient-related/medical-record/updateMedicalRecord";
import TextareaField from "@/components/form/TextareaField";
import { getAllDoctors } from "@/services/staff/doctors/getAllDoctors";
import SelectSearchField from "@/components/form/SelectSearchField";
import { medicalRecordFormValidationSchema } from "./constants/medicalRecordFormValidationSchema";

const DEFAULT_INITIAL_VALUES: MedicalRecordRequest = {
   diagnosis: "",
   notes: "",
   cachedDoctorId: "",
   conditions: [],
   medications: [],
   observations: [],
};

type AddEditNurseProps = {
   id?: string;
   patientId: string;
   triggerButton: ReactNode;
};

function AddEditMedicalRecordDialog({
   id,
   patientId,
   triggerButton,
}: AddEditNurseProps) {
   const [open, setOpen] = useState(false);
   const { t } = useTranslation("patient");
   const { data: medicalRecord, isLoading: isGettingMedicalRecord } =
      useCustomQuery(
         [QUERY_KEYS.MEDICAL_RECORD, id],
         getOneMedicalRecord({ id }),
         {
            enabled: !!id,
         },
      );

   const { data: doctors, isLoading: isGettingDoctors } = useCustomQuery(
      [QUERY_KEYS.DOCTORS],
      getAllDoctors(),
   );
   const doctorsOptions = isGettingDoctors
      ? []
      : doctors?.data.items.map((doctor) => ({
           label: `${doctor.first_name} ${doctor.last_name}`,
           value: doctor.id,
        }));

   const { mutate: createMedicalRecordMutate, isPending: isCreatePending } =
      useOptimisticMutation({
         mutationFn: createMedicalRecord,
         queryKey: [QUERY_KEYS.MEDICAL_RECORDS],
         mutationType: "add",
      });
   const { mutate: updateMedicalRecordMutate, isPending: isUpdatePending } =
      useOptimisticMutation({
         mutationFn: updateMedicalRecord,
         queryKey: [QUERY_KEYS.MEDICAL_RECORDS],
         mutationType: "edit",
      });
   const isPending =
      isCreatePending || isUpdatePending || isGettingMedicalRecord;

   const handleSubmit = (values: MedicalRecordRequest) => {
      if (id) {
         updateMedicalRecordMutate(
            { id, newData: { patientId, ...values } },
            {
               onSuccess: () => {
                  setOpen(false);
                  toast.success("Medical record updated successfully");
               },
               onError: (error) => {
                  console.error("Error updating medical record:", error);
                  toast.error("Failed to update medical record");
               },
            },
         );
      } else {
         createMedicalRecordMutate(
            { patientId, ...values },
            {
               onSuccess: () => {
                  setOpen(false);
                  toast.success("Medical record created successfully");
               },
               onError: (error) => {
                  console.error("Error updating medical record:", error);
                  toast.error("Failed to create medical record");
               },
            },
         );
      }
   };

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>{triggerButton}</DialogTrigger>
         <Formik
            initialValues={{
               diagnosis:
                  medicalRecord?.data?.diagnosis ||
                  DEFAULT_INITIAL_VALUES.diagnosis,
               notes:
                  medicalRecord?.data?.notes || DEFAULT_INITIAL_VALUES.notes,
               cachedDoctorId:
                  medicalRecord?.data?.cachedDoctorId ||
                  DEFAULT_INITIAL_VALUES.cachedDoctorId,
               conditions:
                  medicalRecord?.data?.conditions ||
                  DEFAULT_INITIAL_VALUES.conditions,
               medications:
                  medicalRecord?.data?.medications ||
                  DEFAULT_INITIAL_VALUES.medications,
               observations:
                  medicalRecord?.data?.observations ||
                  DEFAULT_INITIAL_VALUES.observations,
            }}
            onSubmit={handleSubmit}
            enableReinitialize
            validationSchema={medicalRecordFormValidationSchema}
         >
            {({ values, setFieldValue, submitForm }) => (
               <DialogContent className="sm:max-w-3xl">
                  <DialogHeader>
                     <DialogTitle>
                        {id ? t("edit") : t("add")} {t("medical_record")}
                     </DialogTitle>
                     <DialogDescription>
                        {id
                           ? "Edit the details of the medical record."
                           : "Add a new medical record to the system."}
                     </DialogDescription>
                  </DialogHeader>

                  <Form>
                     <InputField
                        id="diagnosis"
                        name="diagnosis"
                        label="Diagnosis"
                        placeholder="Enter diagnosis"
                        disabled={isPending}
                        className="min-w-24"
                     />
                     <TextareaField
                        id="notes"
                        name="notes"
                        label="Notes"
                        placeholder="Enter your notes"
                        disabled={isPending}
                        className="min-w-24"
                     />
                     <SelectSearchField
                        placeholder="Select a doctor"
                        label="Doctor"
                        name="cachedDoctorId"
                        options={doctorsOptions}
                        optionLabel="label"
                        optionValue="value"
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

export default AddEditMedicalRecordDialog;
