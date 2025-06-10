import * as Yup from "yup";

export const medicationFormValidationSchema = Yup.object().shape({
   name: Yup.string()
      .required("Medication name is required")
      .min(2, "Medication name must be at least 2 characters long"),
   dosage: Yup.string()
      .required("Dosage is required")
      .min(1, "Dosage must be at least 1 character long"),
   frequency: Yup.string()
      .required("Frequency is required")
      .min(1, "Frequency must be at least 1 character long"),
   durationInDays: Yup.number()
      .required("Duration is required")
      .positive("Duration must be a positive number")
      .integer("Duration must be an integer"),
});
