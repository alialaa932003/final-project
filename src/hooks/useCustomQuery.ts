import { QueryKey, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useCustomQuery<TResponse>(
   key: QueryKey,
   queryFn: () => Promise<TResponse>,
   options?: any,
) {
   const navigate = useNavigate();
   const queryClient = useQueryClient();
   const queryResult = useQuery<TResponse, Error>({
      queryKey: key,
      queryFn,

      ...options,
   });

   if (queryResult.error && (queryResult.error as any)?.status === 401) {
      localStorage.removeItem("token");
      queryClient.clear();
      toast.error(queryResult.error.message);
      navigate("/login");
   }
   if (queryResult.error && (queryResult.error as any)?.status === 403) {
      toast.error(queryResult.error.message);
   }

   return queryResult;
}
