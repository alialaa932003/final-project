import * as Yup from "yup";

export const patientFormValidationSchema = Yup.object().shape({
   firstName: Yup.string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters long")
      .max(50, "First name cannot exceed 50 characters"),

   lastName: Yup.string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters long")
      .max(50, "Last name cannot exceed 50 characters"),

   email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

   phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),

   dateOfBirth: Yup.date()
      .required("Date of birth is required")
      .max(new Date(), "Date of birth cannot be in the future"),

   address: Yup.string()
      .required("Address is required")
      .min(5, "Address must be at least 5 characters long")
      .max(100, "Address cannot exceed 100 characters"),

   nationalID: Yup.string()
      .matches(/^\d{14}$/, "National ID must be exactly 14 digits")
      .required(),

   age: Yup.number()
      .required("Age is required")
      .min(0, "Age cannot be negative")
      .max(120, "Age cannot exceed 120"),

   bloodType: Yup.string()
      .oneOf(
         [
            "A_Positive",
            "A_Negative",
            "B_Positive",
            "B_Negative",
            "AB_Positive",
            "AB_Negative",
            "O_Positive",
            "O_Negative",
         ],
         "Invalid blood type",
      )
      .required("Blood type is required"),

   maritalStatus: Yup.string()
      .oneOf(
         ["Single", "Married", "Divorced", "Widowed"],
         "Invalid marital status",
      )
      .required("Marital status is required"),

   gender: Yup.string()
      .oneOf(["Male", "Female"], "Invalid gender")
      .required("Gender is required"),
});
