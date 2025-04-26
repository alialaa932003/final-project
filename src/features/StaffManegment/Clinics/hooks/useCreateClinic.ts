import { QUERY_KEYS } from "@/constants";
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { createClinic } from "@/services/staff/clinics/createClinic";
import { useSearchParams } from "react-router-dom";

export const useCreateClinic = () => {
   const [searchParams] = useSearchParams();
   const page = searchParams.get("page") || "1";
   const search = searchParams.get("search") || "";

   const { mutate: createClinicMutate, isPending: isCreatePending } =
      useOptimisticMutation({
         mutationFn: createClinic,
         queryKey: [QUERY_KEYS.CLINICS, page, search],
         mutationType: "add",
      });
   return {
      createClinicMutate,
      isCreatePending,
   };
};
