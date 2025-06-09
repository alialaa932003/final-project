import * as Yup from "yup";

export const getPhoneNumberValidationSchema = (isRequired: boolean = true) => {
   let schema = Yup.string();

   if (isRequired) {
      schema = schema.required("Phone number is required");
   }

   return schema.matches(/^\d{11}$/, "Phone number must be exactly 11 digits");
};
