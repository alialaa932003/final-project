import * as Yup from "yup";

export const observationFormValidationSchema = Yup.object().shape({
   testName: Yup.string()
      .required("Test Name is required")
      .min(2, "Test Name must be at least 2 characters long")
      .max(100, "Test Name must not exceed 100 characters"),

   value: Yup.string()
      .required("Test Value is required")
      .min(1, "Test Value must be at least 1 character long")
      .max(50, "Test Value must not exceed 50 characters"),

   unit: Yup.string()
      .required("Test Unit is required")
      .min(1, "Test Unit must be at least 1 character long")
      .max(50, "Test Unit must not exceed 50 characters"),
});
