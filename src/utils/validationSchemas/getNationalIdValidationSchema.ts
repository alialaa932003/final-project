import * as Yup from "yup";

export const getNationalIdValidationSchema = (isRequired: boolean = true) => {
   let schema = Yup.string();

   if (isRequired) {
      schema = schema.required("National ID is required");
   }

   return schema.matches(/^\d{14}$/, "National ID must be exactly 14 digits");
};
