import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type GetOnePatientParams = {
   id?: number | string;
};

export const getOnePatient =
   ({ id }: GetOnePatientParams) =>
   async () => {
      if (!id) {
         throw new Error("Patient ID is required");
      }

      const res = await apiCall<PatientApiResponse<Patient>>(
         `${BACKEND_SERVICES_BASE_ROUTES.PATIENT}/Patient/${id}`,
         {
            headers: {
               "x-api-key": "123456",
            },
         },
      );

      return res;
   };
