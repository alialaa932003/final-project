import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

export const createBooking = async (
   booking: Partial<Omit<BookingRequest, "is_active">>,
) => {
   const res = await apiCall<StaffApiResponseWithPagination<Booking[]>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/bookings`,
      {
         method: "POST",
         body: JSON.stringify(booking),
      },
   );

   return res;
};
