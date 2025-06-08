interface Booking {
   appointment_date: string;
   appointment_time: string;
   booked_at: string;
   doctor: { id: string; name: string; specialization: string };
   id: string;
   patient_name: string | null;
   status: BookingStatus;
   type: string;
}
