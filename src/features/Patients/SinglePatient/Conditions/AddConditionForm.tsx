import { Form, Formik, FormikHelpers } from "formik";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import TextareaField from "@/components/form/TextareaField";
import { conditionFormValidationSchema } from "./constants/conditionFormValidationSchema";

export type FormValues = {
   code: string;
   description: string;
};

const DEFAULT_INITIAL_VALUES: FormValues = {
   code: "",
   description: "",
};

type AddConditionFormProps = {
   onSubmit: (values: FormValues) => void;
   onClose: () => void;
};

function AddConditionForm({ onSubmit, onClose }: AddConditionFormProps) {
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
         validationSchema={conditionFormValidationSchema}
      >
         {({ resetForm, submitForm }) => (
            <Form className="p-2">
               <InputField
                  id="code"
                  name="code"
                  label="Code"
                  placeholder="Enter Condition Code"
               />
               <TextareaField
                  id="description"
                  name="description"
                  label="Description"
                  placeholder="Enter Condition Description"
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
                  <Button onClick={submitForm}>Add</Button>
               </div>
            </Form>
         )}
      </Formik>
   );
}

export default AddConditionForm;
