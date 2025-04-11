import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

export const createDoctor = async ({
   first_name,
   last_name,
   email,
   phone,
   specialization_id,
   profile_picture,
}: DoctorRequest) => {
   const formData = new FormData();
   formData.append("first_name", first_name);
   formData.append("last_name", last_name);
   formData.append("email", email);
   formData.append("phone", phone);
   formData.append("specialization_id", specialization_id);
   if (profile_picture) {
      formData.append("profile_picture", profile_picture);
   }

   const res = await apiCall<StaffApiResponseWithPagination<Doctor[]>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/doctors`,
      {
         method: "POST",
         body: formData,
      },
   );

   return res;
};
