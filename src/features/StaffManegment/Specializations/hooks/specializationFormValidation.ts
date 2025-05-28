import * as Yup from "yup";

export const specializationFormValidation = Yup.object().shape({
   name: Yup.string().required("Specialization name is required"),
   description: Yup.string().required("Description is required"),
   color: Yup.mixed().required("Color is required"),
});
