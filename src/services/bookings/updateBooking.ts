import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type UpdateBookingParams = {
   id: number;
   newData: BookingRequest;
};

export const updateBooking = async ({ id, newData }: UpdateBookingParams) => {
   const res = await apiCall<StaffApiResponse<Booking>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/bookings/${id}`,
      {
         method: "PATCH",
         body: JSON.stringify(newData),
      },
   );

   return res;
};
