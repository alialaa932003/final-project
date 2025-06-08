import * as Yup from "yup";

export const getNameValidationSchema = (isRequired: boolean = true) => {
   let schema = Yup.string();

   if (isRequired) {
      schema = schema.required("Last name is required");
   }

   return schema
      .min(2, "Last name must be at least 2 characters long")
      .max(50, "Last name cannot exceed 50 characters");
};
