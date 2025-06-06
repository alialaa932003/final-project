import TableWrapper from "@/components/TableWrapper";
import {
   Table,
   TableBody,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import WithLoadingAndError from "@/components/WithLoadingAndError";
import { useTranslation } from "react-i18next";
import { useGetAllNurses } from "./hooks/useGetAllNurses";
import NurseRow from "./NurseRow";

function NursesList() {
   const { t } = useTranslation("staff");
   const { data, isLoading, isError } = useGetAllNurses();
   const nurses = data?.data.items || [];

   return (
      <WithLoadingAndError
         isLoading={isLoading}
         hasError={isError || nurses.length === 0}
         errorText={t("no-nurses-found")}
      >
         <TableWrapper totalPages={data?.data.meta.last_page}>
            <Table className="min-w-[70rem]">
               <TableHeader>
                  <TableRow>
                     <TableHead className="w-[50px]">#</TableHead>
                     <TableHead>Name</TableHead>
                     <TableHead>Email</TableHead>
                     <TableHead>Phone</TableHead>
                     <TableHead>Clinic</TableHead>
                     <TableHead>Is Active</TableHead>
                     <TableHead className="w-[55px]">Actions</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {nurses.map((nurse, index) => (
                     <NurseRow
                        nurse={nurse}
                        key={nurse.id}
                        rowNumber={index + 1}
                     />
                  ))}
               </TableBody>
            </Table>
         </TableWrapper>
      </WithLoadingAndError>
   );
}

export default NursesList;
