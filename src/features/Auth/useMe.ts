import { me } from "@/services/apiAuth";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { useTranslation } from "react-i18next";

export const useMe = (language: string) => {
   const { data, isPending, refetch } = useCustomQuery(
      ["current-user", language],
      () => {
         if (localStorage.getItem("token")) {
            return me();
         }
         return Promise.resolve(null);
      },
   );
   return { user: data?.data?.user, isPending, refetch };
};
