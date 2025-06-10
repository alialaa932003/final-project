import { Form, Formik, FormikHelpers } from "formik";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import TextareaField from "@/components/form/TextareaField";
import SideBySideInputsContainer from "@/components/SideBySideInputsContainer";
import { observationFormValidationSchema } from "./constants/observationFormValidationSchema";

export type FormValues = {
   testName: string;
   value: string;
   unit: string;
};

const DEFAULT_INITIAL_VALUES: FormValues = {
   testName: "",
   value: "",
   unit: "",
};

type AddObservationFormProps = {
   onSubmit: (values: FormValues) => void;
   onClose: () => void;
};

function AddObservationForm({ onSubmit, onClose }: AddObservationFormProps) {
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
         validationSchema={observationFormValidationSchema}
      >
         {({ resetForm, submitForm }) => (
            <Form className="p-2">
               <InputField
                  id="testName"
                  name="testName"
                  label="Test Name"
                  placeholder="Enter Test Name"
               />

               <SideBySideInputsContainer>
                  <InputField
                     id="value"
                     name="value"
                     label="Test Value"
                     placeholder="Enter Test Value"
                  />
                  <InputField
                     id="unit"
                     name="unit"
                     label="Test Unit"
                     placeholder="Enter Test Unit"
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

export default AddObservationForm;
