import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type UpdateBookingParams = {
   id: string;
   newData: EditBooking;
};

export const updateBooking = async ({ id, newData }: UpdateBookingParams) => {
   const res = await apiCall<StaffApiResponse<Booking>>(
      `${BACKEND_SERVICES_BASE_ROUTES.BOOKING}/bookings/${id}`,
      {
         method: "PATCH",
         body: JSON.stringify(newData),
      },
   );

   return res;
};
