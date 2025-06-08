import * as Yup from "yup";
import { getEmailValidationSchema } from "@/utils/validationSchemas/getEmailValidationSchema";
import { getNameValidationSchema } from "@/utils/validationSchemas/getNameValidationSchema";
import { getNationalIdValidationSchema } from "@/utils/validationSchemas/getNationalIdValidationSchema";
import { getPhoneNumberValidationSchema } from "@/utils/validationSchemas/getPhoneNumberValidationSchema";
import { getIsActiveValidationSchema } from "@/utils/validationSchemas/getIsActiveValidationSchema";

export const nurseFormValidationSchema = Yup.object().shape({
   first_name: getNameValidationSchema(),
   last_name: getNameValidationSchema(),
   email: getEmailValidationSchema(),
   phone: getPhoneNumberValidationSchema(),
   national_id: getNationalIdValidationSchema(),
   clinic_id: Yup.string().required("Clinic is required"),
   is_active: getIsActiveValidationSchema(), // Default to true if not provided
});
