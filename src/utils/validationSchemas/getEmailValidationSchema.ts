import * as Yup from "yup";

export const getEmailValidationSchema = (isRequired: boolean = true) => {
   let schema = Yup.string();

   if (isRequired) {
      schema = schema.required("Email is required");
   }

   return schema
      .email("Invalid email format")
      .max(100, "Email cannot exceed 100 characters");
};
