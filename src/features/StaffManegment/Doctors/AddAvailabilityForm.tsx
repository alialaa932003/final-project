import { Form, Formik, FormikHelpers } from "formik";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getAllClinics } from "@/services/staff/clinics/getAllClinics";
import { QUERY_KEYS } from "@/constants";
import SelectField from "@/components/fields/SelectField";
import SideBySideInputsContainer from "@/components/SideBySideInputsContainer";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { availabilityFormValidationSchema } from "./constants/availabilityFormValidationSchema";
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { createAvailability } from "@/services/staff/doctors/availabilities/createAvailability";

const DEFAULT_INITIAL_VALUES: AvailabilityRequest = {
   from: "",
   to: "",
   date: "",
   clinic_id: "",
};

type AddAvailabilityFormProps = {
   doctorId: string;
   onClose: () => void;
};

function AddAvailabilityForm({ doctorId, onClose }: AddAvailabilityFormProps) {
   const { data: clinics, isLoading: isGettingClinics } = useCustomQuery(
      [QUERY_KEYS.CLINICS],
      getAllClinics(),
   );
   const clinicOptions = isGettingClinics
      ? []
      : clinics?.data.items.map((clinic) => ({
           label: clinic.name,
           value: clinic.id,
        }));

   const { mutate, isPending } = useOptimisticMutation({
      mutationFn: createAvailability,
      queryKey: [QUERY_KEYS.DOCTOR_AVAILABILITIES, doctorId],
      dataPath: ["data", "items"],
      options: {
         successMessageKey: "staff:doctor-availability-added-successfully",
         errorMessageKey: "staff:doctor-availability-addition-failed",
      },
   });

   const handleSubmit = (
      values: AvailabilityRequest,
      { resetForm }: FormikHelpers<AvailabilityRequest>,
   ) => {
      mutate(
         { doctorId, data: values },
         {
            onSuccess: () => {
               onClose();
               resetForm();
            },
         },
      );
   };

   return (
      <Formik
         initialValues={DEFAULT_INITIAL_VALUES}
         onSubmit={handleSubmit}
         validationSchema={availabilityFormValidationSchema}
      >
         {({ values, setFieldValue, resetForm }) => (
            <Form className="p-2">
               <SideBySideInputsContainer className="justify-between">
                  <InputField
                     id="from"
                     name="from"
                     label="From Date"
                     type="time"
                     placeholder="Enter From Date"
                     containerClassName="w-fit"
                  />
                  <InputField
                     id="to"
                     name="to"
                     label="To Date"
                     type="time"
                     placeholder="Enter To Date"
                     containerClassName="w-fit"
                  />
                  <InputField
                     id="date"
                     name="date"
                     label="Date"
                     type="date"
                     placeholder="Enter Date"
                     containerClassName="w-fit"
                  />
               </SideBySideInputsContainer>
               <SelectField
                  name="clinic_id"
                  isUseSearchParam={false}
                  label="Clinic"
                  placeholder="Select Clinic"
                  value={values.clinic_id}
                  options={clinicOptions}
                  onChange={(value) => setFieldValue("clinic_id", value)}
                  disabled={isGettingClinics}
               />

               <div className="flex flex-wrap gap-4 [&>*]:grow">
                  <Button
                     variant="destructive"
                     onClick={() => {
                        onClose();
                        resetForm();
                     }}
                  >
                     Cancel
                  </Button>
                  <Button type="submit">
                     {isPending ? "adding..." : "Add"}
                  </Button>
               </div>
            </Form>
         )}
      </Formik>
   );
}

export default AddAvailabilityForm;
