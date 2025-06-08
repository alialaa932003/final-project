import * as Yup from "yup";
import { getEmailValidationSchema } from "@/utils/validationSchemas/getEmailValidationSchema";
import { getNameValidationSchema } from "@/utils/validationSchemas/getNameValidationSchema";
import { getNationalIdValidationSchema } from "@/utils/validationSchemas/getNationalIdValidationSchema";
import { getPhoneNumberValidationSchema } from "@/utils/validationSchemas/getPhoneNumberValidationSchema";

export const patientFormValidationSchema = Yup.object().shape({
   firstName: getNameValidationSchema(),
   lastName: getNameValidationSchema(),
   email: getEmailValidationSchema(),
   phoneNumber: getPhoneNumberValidationSchema(),
   address: Yup.string()
      .required("Address is required")
      .min(5, "Address must be at least 5 characters long")
      .max(100, "Address cannot exceed 100 characters"),
   nationalID: getNationalIdValidationSchema(),
   age: Yup.number()
      .integer("Age must be an integer")
      .required("Age is required")
      .min(0, "Age cannot be negative")
      .max(120, "Age cannot exceed 120"),
   dateOfBirth: Yup.date()
      .required("Date of birth is required")
      .max(new Date(), "Date of birth cannot be in the future"),
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
