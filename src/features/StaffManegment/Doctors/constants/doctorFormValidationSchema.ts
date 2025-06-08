import * as Yup from "yup";
import { getNationalIdValidationSchema } from "@/utils/validationSchemas/getNationalIdValidationSchema";
import { getPhoneNumberValidationSchema } from "@/utils/validationSchemas/getPhoneNumberValidationSchema";
import { getEmailValidationSchema } from "@/utils/validationSchemas/getEmailValidationSchema";
import { getNameValidationSchema } from "@/utils/validationSchemas/getNameValidationSchema";

export const doctorFormValidationSchema = Yup.object().shape({
   first_name: getNameValidationSchema(),
   last_name: getNameValidationSchema(),
   email: getEmailValidationSchema(),
   phone: getPhoneNumberValidationSchema(),
   national_id: getNationalIdValidationSchema(),
   specialization_id: Yup.string().required("Specialization is required"),
});
