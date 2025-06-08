import { getDayjsFromTime } from "@/utils/getDayjsFromTime";
import * as Yup from "yup";

export const availabilityFormValidationSchema = Yup.object().shape({
   from: Yup.string().required("Start time is required"),
   to: Yup.string()
      .required("End time is required")
      .test(
         "is-after-from",
         "End time must be after start time",
         function (value) {
            const { from } = this.parent;
            if (!from || !value) return true; // Skip validation if either time is not provided

            const fromTime = getDayjsFromTime(from);
            const toTime = getDayjsFromTime(value);

            return toTime.isAfter(fromTime);
         },
      ),
   date: Yup.date()
      .required("Date is required")
      .min(new Date(), "Date cannot be in the past"),
   clinic_id: Yup.string().required("Clinic is required"),
});
