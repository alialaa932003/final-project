import { Form, Formik, FormikHelpers } from "formik";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { medicationFormValidationSchema } from "./constants/medicationFormValidationSchema";
import SideBySideInputsContainer from "@/components/SideBySideInputsContainer";

export type FormValues = {
   name: string;
   dosage: string;
   frequency: string;
   durationInDays: number;
};

const DEFAULT_INITIAL_VALUES: FormValues = {
   name: "",
   dosage: "",
   frequency: "",
   durationInDays: 0,
};

type AddMedicationFormProps = {
   onSubmit: (values: FormValues) => void;
   onClose: () => void;
};

function AddMedicationForm({ onSubmit, onClose }: AddMedicationFormProps) {
   const handleSubmit = (
      values: FormValues,
      { resetForm }: FormikHelpers<FormValues>,
   ) => {
      onClose();
      onSubmit(values);
      resetForm();
   };

   return (
      <Formik
         initialValues={DEFAULT_INITIAL_VALUES}
         onSubmit={handleSubmit}
         validationSchema={medicationFormValidationSchema}
      >
         {({ resetForm, submitForm }) => (
            <Form className="p-2">
               <SideBySideInputsContainer>
                  <InputField
                     id="name"
                     name="name"
                     label="Name"
                     placeholder="Enter Medication Name"
                  />
                  <InputField
                     id="dosage"
                     name="dosage"
                     label="Dosage"
                     placeholder="Enter Dosage"
                  />
               </SideBySideInputsContainer>
               <SideBySideInputsContainer>
                  <InputField
                     id="durationInDays"
                     name="durationInDays"
                     label="Duration In Days"
                     placeholder="Enter Duration In Days"
                     type="number"
                     step={1}
                  />
                  <InputField
                     id="frequency"
                     name="frequency"
                     label="Frequency"
                     placeholder="Enter Frequency"
                  />
               </SideBySideInputsContainer>

               <div className="flex flex-wrap gap-4 [&>*]:grow">
                  <Button
                     type="button"
                     variant="destructive"
                     onClick={() => {
                        onClose();
                        resetForm();
                     }}
                  >
                     Cancel
                  </Button>
                  <Button type="button" onClick={submitForm}>
                     Add
                  </Button>
               </div>
            </Form>
         )}
      </Formik>
   );
}

export default AddMedicationForm;
