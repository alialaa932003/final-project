import * as Yup from "yup";

export const bookingFormValidation = Yup.object().shape({
   name: Yup.string().required("Clinic name is required"),
   description: Yup.string().required("Description is required"),
   max_doctors: Yup.number()
      .required("Max doctors is required")
      .positive("Max doctors must be a positive number")
      .integer("Max doctors must be an integer"),
   is_active: Yup.boolean(),
});
