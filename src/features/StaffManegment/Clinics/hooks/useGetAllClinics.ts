import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getAllClinics } from "@/services/staff/clinics/getAllClinics";
import { useSearchParams } from "react-router-dom";

export const useGetAllClinics = () => {
   const searchParams = useSearchParams()[0];
   const page = searchParams.get("page") || "1";
   const search = searchParams.get("search") || "";
   const { data, isPending } = useCustomQuery(
      ["clinics", page, search],
      getAllClinics({ page, search }),
   );
   return {
      data,
      isPending,
   };
};
