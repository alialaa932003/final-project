import * as Yup from "yup";

export const medicalRecordFormValidationSchema = Yup.object().shape({
   diagnosis: Yup.string()
      .required("Diagnosis is required")
      .min(2, "Diagnosis must be at least 2 characters long")
      .max(100, "Diagnosis must not exceed 100 characters"),

   notes: Yup.string()
      .required("Notes are required")
      .min(5, "Notes must be at least 5 characters long")
      .max(500, "Notes must not exceed 500 characters"),
});
