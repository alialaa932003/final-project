import * as Yup from "yup";

export const conditionFormValidationSchema = Yup.object().shape({
   code: Yup.string()
      .required("Condition code is required")
      .matches(/^[A-Za-z0-9]+$/, "Condition code must be alphanumeric"),
   description: Yup.string()
      .required("Condition description is required")
      .min(5, "Description must be at least 5 characters long")
      .max(500, "Description cannot exceed 500 characters"),
});
