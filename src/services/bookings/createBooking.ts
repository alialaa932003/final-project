import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

export const createBooking = async (booking: CreateBooking) => {
   const res = await apiCall<StaffApiResponseWithPagination<Booking[]>>(
      `${BACKEND_SERVICES_BASE_ROUTES.BOOKING}/bookings`,
      {
         method: "POST",
         body: JSON.stringify(booking),
      },
   );

   return res;
};
