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
import { Form, Formik, FormikHandlers, FormikHelpers } from "formik";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import InputField from "@/components/form/InputField";
import SelectField from "@/components/fields/SelectField";
import { useTranslation } from "react-i18next";
import { patientFormValidationSchema } from "./constants/patientFormValidationSchema";
import { getOnePatient } from "@/services/patient-related/patient/getOnePatient";
import { createPatient } from "@/services/patient-related/patient/createPatient";
import { updatePatient } from "@/services/patient-related/patient/updatePatient";
import { genderOptions } from "./constants/genderOptions";
import { bloodTypeOptions } from "./constants/bloodTypeOptions";
import { maritalStatusOptions } from "./constants/maritalStatusOptions";
import SideBySideInputsContainer from "@/components/SideBySideInputsContainer";

const DEFAULT_INITIAL_VALUES: PatientRequest = {
   firstName: "",
   lastName: "",
   nationalID: "",
   email: "",
   phoneNumber: "",
   age: 0,
   address: "",
   bloodType: "A_Positive",
   dateOfBirth: "",
   gender: "Male",
   maritalStatus: "Single",
};

type AddEditNurseProps = {
   id?: string;
   triggerButton: ReactNode;
};

function AddEditPatientDialog({ id, triggerButton }: AddEditNurseProps) {
   const [open, setOpen] = useState(false);
   const { t } = useTranslation("patient");
   const { data: patient, isLoading: isGettingPatient } = useCustomQuery(
      [QUERY_KEYS.PATIENT, id],
      getOnePatient({ id }),
      {
         enabled: !!id,
      },
   );
   const { mutate: createPatientMutate, isPending: isCreatePending } =
      useOptimisticMutation({
         mutationFn: createPatient,
         queryKey: [QUERY_KEYS.PATIENTS],
         mutationType: "add",
      });
   const { mutate: updatePatientMutate, isPending: isUpdatePending } =
      useOptimisticMutation({
         mutationFn: updatePatient,
         queryKey: [QUERY_KEYS.PATIENTS],
         mutationType: "edit",
      });
   const isPending = isCreatePending || isUpdatePending || isGettingPatient;

   const handleSubmit = (
      values: PatientRequest,
      { resetForm }: FormikHelpers<PatientRequest>,
   ) => {
      if (id) {
         updatePatientMutate(
            { id, newData: values },
            {
               onSuccess: () => {
                  setOpen(false);
                  resetForm();
               },
               onError: (error) => {
                  console.error("Error updating patient:", error);
               },
            },
         );
      } else {
         createPatientMutate(values, {
            onSuccess: () => {
               setOpen(false);
               resetForm();
            },
            onError: (error) => {
               console.error("Error updating patient:", error);
            },
         });
      }
   };

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>{triggerButton}</DialogTrigger>
         <Formik
            initialValues={{
               firstName:
                  patient?.data.firstName || DEFAULT_INITIAL_VALUES.firstName,
               lastName:
                  patient?.data.lastName || DEFAULT_INITIAL_VALUES.lastName,
               nationalID:
                  patient?.data.nationalID || DEFAULT_INITIAL_VALUES.nationalID,
               email: patient?.data.email || DEFAULT_INITIAL_VALUES.email,
               phoneNumber:
                  patient?.data.phoneNumber ||
                  DEFAULT_INITIAL_VALUES.phoneNumber,
               age: patient?.data.age || DEFAULT_INITIAL_VALUES.age,
               address: patient?.data.address || DEFAULT_INITIAL_VALUES.address,
               bloodType:
                  patient?.data.bloodType || DEFAULT_INITIAL_VALUES.bloodType,
               dateOfBirth: patient?.data.dateOfBirth
                  ? patient.data.dateOfBirth.split("T")[0]
                  : DEFAULT_INITIAL_VALUES.dateOfBirth,
               gender: patient?.data.gender || DEFAULT_INITIAL_VALUES.gender,
               maritalStatus:
                  patient?.data.maritalStatus ||
                  DEFAULT_INITIAL_VALUES.maritalStatus,
            }}
            // @ts-ignore
            onSubmit={handleSubmit}
            enableReinitialize
            validationSchema={patientFormValidationSchema}
         >
            {({ values, setFieldValue, submitForm }) => (
               <DialogContent className="sm:max-w-3xl">
                  <DialogHeader>
                     <DialogTitle>
                        {id ? t("edit") : t("add")} {t("patient")}
                     </DialogTitle>
                     <DialogDescription>
                        {id
                           ? "Edit the details of the patient."
                           : "Add a new patient to the system."}
                     </DialogDescription>
                  </DialogHeader>

                  <Form>
                     <SideBySideInputsContainer>
                        <InputField
                           id="firstName"
                           name="firstName"
                           label="First Name"
                           placeholder="Enter first name"
                           disabled={isPending}
                           className="min-w-24"
                        />
                        <InputField
                           id="lastName"
                           name="lastName"
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
                           id="phoneNumber"
                           name="phoneNumber"
                           label="Phone"
                           placeholder="Enter phone number"
                           disabled={isPending}
                        />
                        <InputField
                           id="nationalID"
                           name="nationalID"
                           label="National ID"
                           placeholder="Enter National ID"
                           disabled={isPending}
                        />
                        <InputField
                           id="age"
                           name="age"
                           label="Age"
                           placeholder="Enter Age"
                           type="number"
                           disabled={isPending}
                        />
                     </SideBySideInputsContainer>

                     <SideBySideInputsContainer>
                        <InputField
                           id="address"
                           name="address"
                           label="Address"
                           placeholder="Enter Address"
                           disabled={isPending}
                        />
                        <InputField
                           id="dateOfBirth"
                           name="dateOfBirth"
                           label="Date Of Birth"
                           type="date"
                           placeholder="Enter Date Of Birth"
                           disabled={isPending}
                           containerClassName="w-fit"
                        />
                     </SideBySideInputsContainer>

                     <SelectField
                        name="maritalStatus"
                        isUseSearchParam={false}
                        label="Marital Status"
                        placeholder="Select Marital Status"
                        value={
                           values.maritalStatus ? `${values.maritalStatus}` : ""
                        }
                        options={maritalStatusOptions || []}
                        onChange={(value) =>
                           setFieldValue("maritalStatus", value)
                        }
                        disabled={isPending}
                        containerClassName="mb-6"
                     />

                     <SideBySideInputsContainer>
                        <SelectField
                           name="gender"
                           isUseSearchParam={false}
                           label="Gender"
                           placeholder="Select Gender"
                           value={values.gender ? `${values.gender}` : ""}
                           options={genderOptions || []}
                           onChange={(value) => setFieldValue("gender", value)}
                           disabled={isPending}
                           containerClassName="mb-6 grow"
                        />
                        <SelectField
                           name="bloodType"
                           isUseSearchParam={false}
                           label="Blood Type"
                           placeholder="Select Blood Type"
                           value={values.bloodType ? `${values.bloodType}` : ""}
                           options={bloodTypeOptions || []}
                           onChange={(value) =>
                              setFieldValue("bloodType", value)
                           }
                           disabled={isPending}
                           containerClassName="mb-6 grow"
                        />
                     </SideBySideInputsContainer>
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

export default AddEditPatientDialog;
