import NurseCard from "./NurseCard";
import WithLoadingAndError from "@/components/WithLoadingAndError";
import { useTranslation } from "react-i18next";
import TableWrapper from "@/components/TableWrapper";
import { useGetAllNurses } from "./hooks/useGetAllNurses";

function NursesList() {
   const { t } = useTranslation("staff");
   const { data, isLoading, isError } = useGetAllNurses();

   return (
      <WithLoadingAndError
         isLoading={isLoading}
         hasError={isError}
         errorText={t("no-nurses-found")}
      >
         <TableWrapper
            totalPages={data?.data.meta.last_page}
            noContainerStyle
            className="space-y-8"
         >
            <ul className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
               {data?.data.items.map((nurse) => (
                  <li key={nurse.id}>
                     <NurseCard data={nurse} />
                  </li>
               ))}
            </ul>
         </TableWrapper>
      </WithLoadingAndError>
   );
}

export default NursesList;
