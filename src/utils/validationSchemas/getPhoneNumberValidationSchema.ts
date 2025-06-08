import * as Yup from "yup";

export const getPhoneNumberValidationSchema = (isRequired: boolean = true) => {
   let schema = Yup.string();

   if (isRequired) {
      schema = schema.required("Phone number is required");
   }

   return schema
      .matches(/^\+?[0-9\s-]+$/, "Phone number must be a valid format")
      .max(20, "Phone number cannot exceed 20 characters");
};
