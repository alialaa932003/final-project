import * as Yup from "yup";
import { getEmailValidationSchema } from "@/utils/validationSchemas/getEmailValidationSchema";
import { getNameValidationSchema } from "@/utils/validationSchemas/getNameValidationSchema";
import { getPhoneNumberValidationSchema } from "@/utils/validationSchemas/getPhoneNumberValidationSchema";
import { getIsActiveValidationSchema } from "@/utils/validationSchemas/getIsActiveValidationSchema";

export const receptionistFormValidationSchema = Yup.object().shape({
   first_name: getNameValidationSchema(),
   last_name: getNameValidationSchema(),
   email: getEmailValidationSchema(),
   phone: getPhoneNumberValidationSchema(),
   national_id: getNameValidationSchema(),
   is_active: getIsActiveValidationSchema(), // Default to true if not provided
});
