import InputField from "@/components/form/InputField";
import SelectSearchField from "@/components/form/SelectSearchField";
import { useGetAllDoctorsLookup } from "@/features/Bookings/hooks/useGetAllDoctorsLookup";
import { Form, Formik } from "formik";
import moment from "moment";
import { useCreateBooking } from "../hooks/useCreateBooking";
import BarLoading from "@/components/BarLoading";
import { useGetAllPatientsLookup } from "../hooks/useGetAllPatientsLookup";
import { useSearchParams } from "react-router-dom";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
const AddBookingForm = () => {
   const schema = yup.object().shape({
      date: yup.date().required("Booking date is required"),
      type: yup.mixed().required("Booking type is required"),
      doctor: yup
         .object()
         .test(
            "has-value",
            "Doctor is required",
            (value: any) => value && value?.id,
         )
         .required("Doctor is required"),
      patient: yup
         .object()
         .test(
            "has-value",
            "patient is required",
            (value: any) => value && value?.id,
         )
         .required("patient is required"),
   });
   const [searchParams] = useSearchParams();
   const { data: doctorsApi, isPending: isGettingDoctors } =
      useGetAllDoctorsLookup();
   const doctorsOptions = doctorsApi?.data || [];

   const { data: patientsApi, isPending: isGettingPatients } =
      useGetAllPatientsLookup();

   const patientsOptions = patientsApi?.data || [];

   const { createBookingMutate, isCreatePending } = useCreateBooking();
   const isLoading = isGettingDoctors || isGettingPatients || isCreatePending;
   return (
      <Formik
         enableReinitialize
         initialValues={{
            date: moment().format("YYYY-MM-DDTHH:mm"),
            type: typesOptions[0],
            doctor: { id: searchParams.get("doctorId") || "", name: "" },
            patient: { id: "", fullName: "" },
         }}
         onSubmit={(values, { resetForm }) => {
            const doctorId = values.doctor.id;
            console.log(values);
            const newValues = {
               type: values.type.value,
               patient_id: values.patient.id,
               doctor_id: doctorId,
               appointment_date: moment(values.date).format("YYYY-MM-DD"),
               appointment_time: moment(values.date).format("HH:mm"),
            };
            createBookingMutate(newValues, {
               onSuccess: () => {
                  resetForm();
               },
            });
         }}
         validationSchema={schema}
      >
         {({ values, setFieldValue, submitForm }) => (
            <Form className="flex flex-col gap-x-4">
               {isLoading && <BarLoading />}
               <InputField
                  id="date"
                  name="date"
                  label="Booking Date"
                  type="datetime-local"
                  placeholder="Enter the booking date"
                  disabled={isCreatePending}
                  className="block min-w-24"
               />{" "}
               <SelectSearchField
                  placeholder="Select a type"
                  label="Type"
                  name="type"
                  options={typesOptions}
                  optionLabel="label"
                  optionValue="value"
               />
               <SelectSearchField
                  placeholder="Select a patient"
                  label="Patient"
                  name="patient"
                  options={patientsOptions}
                  optionLabel="fullName"
                  optionValue="id"
                  valueKey="id"
               />
               <SelectSearchField
                  placeholder="Select a doctor"
                  label="Doctor"
                  name="doctor"
                  options={doctorsOptions}
                  optionLabel="name"
                  optionValue="id"
                  valueKey="id"
               />
               <Button className="mt-6">Add Booking</Button>
            </Form>
         )}
      </Formik>
   );
};
export const typesOptions: { value: BookingType; label: string }[] = [
   { value: "examination", label: "Examination" },
   { value: "consultation", label: "Consultation" },
];
export default AddBookingForm;
