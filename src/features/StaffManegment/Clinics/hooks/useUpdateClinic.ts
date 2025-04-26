import { QUERY_KEYS } from "@/constants";
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { updateClinic } from "@/services/staff/clinics/updateClinic";
import { useSearchParams } from "react-router-dom";

export const useUpdateClinic = () => {
   const [searchParams] = useSearchParams();
   const page = searchParams.get("page") || "1";
   const search = searchParams.get("search") || "";

   const { mutate: updateClinicMutate, isPending: isUpdatePending } =
      useOptimisticMutation({
         mutationFn: updateClinic,
         queryKey: [QUERY_KEYS.CLINICS, page, search],
         mutationType: "edit",
      });
   return {
      updateClinicMutate,
      isUpdatePending,
   };
};
