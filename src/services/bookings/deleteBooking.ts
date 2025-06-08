import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type DeleteBookingParams = {
   id: string;
};

export const deleteBooking = async ({ id }: DeleteBookingParams) => {
   const res = await apiCall<StaffApiResponse<Booking>>(
      `${BACKEND_SERVICES_BASE_ROUTES.BOOKING}/bookings/${id}`,
      {
         method: "DELETE",
      },
   );

   return res;
};
