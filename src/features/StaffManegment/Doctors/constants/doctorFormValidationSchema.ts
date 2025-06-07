import * as Yup from "yup";

export const doctorFormValidationSchema = Yup.object().shape({
   first_name: Yup.string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters long")
      .max(50, "First name cannot exceed 50 characters"),
   last_name: Yup.string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters long")
      .max(50, "Last name cannot exceed 50 characters"),
   email: Yup.string()
      .required("Email is required")
      .email("Invalid email format")
      .max(100, "Email cannot exceed 100 characters"),
   phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\+?[0-9\s-]+$/, "Phone number must be a valid format")
      .max(20, "Phone number cannot exceed 20 characters"),
   specialization_id: Yup.number().required("Specialization is required"),
});
