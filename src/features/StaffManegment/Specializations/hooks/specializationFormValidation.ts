import * as Yup from "yup";

export const specializationFormValidation = Yup.object().shape({
   name: Yup.string().required("Specialization name is required"),
   description: Yup.string().required("Description is required"),
   color: Yup.string()
      .oneOf(["green", "yellow", "sky", "purple"], "Invalid color")
      .required("Color is required"),
});
