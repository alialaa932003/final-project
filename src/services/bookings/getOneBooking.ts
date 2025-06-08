import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type GetOneBookingsParams = {
   id?: number;
};

export const getOneBookings =
   ({ id }: GetOneBookingsParams) =>
   async () => {
      const res = await apiCall<StaffApiResponse<Booking>>(
         `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/bookings/${id}`,
      );

      return res;
   };
