import InputField from "@/components/form/InputField";
import SelectSearchField from "@/components/form/SelectSearchField";
import { useGetAllDoctorsLookup } from "@/features/Bookings/hooks/useGetAllDoctorsLookup";
import { Form, Formik } from "formik";
import moment from "moment";
import { useCreateBooking } from "../hooks/useCreateBooking";
import BarLoading from "@/components/BarLoading";
import { useGetAllPatientsLookup } from "../hooks/useGetAllPatientsLookup";
import { useSearchParams } from "react-router-dom";

const AddBookingForm = () => {
   const [searchParams] = useSearchParams();
   const { data: doctorsApi, isPending: isGettingDoctors } =
      useGetAllDoctorsLookup();
   const doctorsOptions = doctorsApi?.data || [];

   const { data: patientsApi, isPending: isGettingPatients } =
      useGetAllPatientsLookup();

   const patientsOptions =
      patientsApi?.data?.map((patient) => {
         return {
            id: patient.id,
            name: `${patient.firstName} ${patient.lastName}`,
         };
      }) || [];

   const { createBookingMutate, isCreatePending } = useCreateBooking();
   const isLoading = isGettingDoctors || isGettingPatients || isCreatePending;
   return (
      <Formik
         enableReinitialize
         initialValues={{
            date: moment().format("YYYY-MM-DDTHH:mm"),
            type: typesOptions[0],
            doctor: searchParams.get("doctorId") || { id: "", name: "" },
            patient: { id: "", name: "" },
         }}
         onSubmit={(values, { resetForm }) => {
            const doctorId =
               typeof values.doctor === "string"
                  ? values.doctor
                  : values.doctor.id;
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
         validationSchema={{}}
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
                  optionLabel="name"
                  optionValue="id"
               />
               <SelectSearchField
                  placeholder="Select a doctor"
                  label="Doctor"
                  name="doctor"
                  options={doctorsOptions}
                  optionLabel="name"
                  optionValue="id"
               />
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
