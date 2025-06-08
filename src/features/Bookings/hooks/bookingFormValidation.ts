import * as Yup from "yup";

export const bookingFormValidation = Yup.object().shape({
   date: Yup.string().required("Date is required"),
   status: Yup.mixed().required("Status is required"),
});
