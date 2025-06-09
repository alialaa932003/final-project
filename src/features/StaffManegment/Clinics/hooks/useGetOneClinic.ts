import { QUERY_KEYS } from "@/constants";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getOneClinics } from "@/services/staff/clinics/getOneClinic";

export const useGetOneClinic = ({
   id,
   isOpen,
}: {
   id?: string;
   isOpen: boolean;
}) => {
   const { data, isFetching } = useCustomQuery(
      [QUERY_KEYS.CLINIC, id],
      getOneClinics({ id }),
      {
         enabled: Boolean(id) && isOpen,
      },
   );
   return { data, isFetching };
};
