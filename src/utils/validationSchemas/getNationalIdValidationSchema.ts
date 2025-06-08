import * as Yup from "yup";

export const getNationalIdValidationSchema = (isRequired: boolean = true) => {
   let schema = Yup.string();

   if (isRequired) {
      schema = schema.required("National ID is required");
   }

   return schema.matches(
      /^\d{10,15}$/,
      "National ID must be between 10 and 15 digits",
   );
};
