import * as Yup from "yup";

export const getIsActiveValidationSchema = (isRequired: boolean = true) => {
   let schema = Yup.boolean();

   if (isRequired) {
      schema = schema.required("Active status is required");
   }

   return schema.default(true);
};
