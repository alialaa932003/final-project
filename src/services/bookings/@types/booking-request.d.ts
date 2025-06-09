interface CreateBooking {
   appointment_time: string;
   appointment_date: string;
   type: BookingType;
   patient_id: string;
   doctor_id: string;
}
interface EditBooking {
   appointment_time: string;
   appointment_date: string;
   status: BookingStatus;
}

type BookingStatus = "completed" | "no_show" | "cancelled" | "pending";
type BookingType = "examination" | "consultation";
