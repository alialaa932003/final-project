import { QUERY_KEYS } from "@/constants";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getOneSpecialization } from "@/services/staff/specializations/getOneSpecialization";

export const useGetOneSpecialization = ({
   id,
   isOpen,
}: {
   id?: number;
   isOpen: boolean;
}) => {
   const { data, isFetching } = useCustomQuery(
      [QUERY_KEYS.SPECIALIZATION, id],
      getOneSpecialization({ id }),
      {
         enabled: Boolean(id) && isOpen,
      },
   );
   return { data, isFetching };
};
