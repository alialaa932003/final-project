import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { createQueryString } from "@/lib/createQueryString";
import { apiCall } from "@/services/apiCall";

type GetAllBookingsParams = {
   page?: string;
   search?: string;
};

export const getAllBookings =
   ({ page, search }: GetAllBookingsParams = {}) =>
   async () => {
      const params = createQueryString({
         page,
         search,
      });

      const res = await apiCall<StaffApiResponseWithPagination<Booking[]>>(
         `${BACKEND_SERVICES_BASE_ROUTES.BOOKING}/bookings?${params}`,
      );

      return res;
   };
