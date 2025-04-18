import { QUERY_KEYS } from "@/constants";
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { deleteClinic } from "@/services/staff/clinics/deleteClinic";
import { useSearchParams } from "react-router-dom";

export const useDeleteClinic = () => {
   const [searchParams] = useSearchParams();
   const page = searchParams.get("page") || "1";
   const search = searchParams.get("search") || "";

   const { mutate, isPending } = useOptimisticMutation({
      mutationFn: ({ id }: { id: number }) => deleteClinic({ id }),
      queryKey: [QUERY_KEYS.CLINICS, page, search],
      dataPath: ["data", "items"],
   });

   return {
      deleteClinic: mutate,
      isDeleting: isPending,
   };
};
