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
import { useGetAllReceptionists } from "./hooks/useGetAllReceptionists";
import ReceptionistRow from "./ReceptionistRow";

function ReceptionistsList() {
   const { t } = useTranslation("staff");
   const { data, isLoading, isError } = useGetAllReceptionists();
   const receptionists = data?.data.items || [];

   return (
      <WithLoadingAndError
         isLoading={isLoading}
         hasError={isError || receptionists.length === 0}
         errorText={t("no-receptionists-found")}
      >
         <TableWrapper totalPages={data?.data.meta.last_page}>
            <Table className="min-w-[70rem]">
               <TableHeader>
                  <TableRow>
                     <TableHead className="w-[50px]">#</TableHead>
                     <TableHead>National ID</TableHead>
                     <TableHead>Name</TableHead>
                     <TableHead>Email</TableHead>
                     <TableHead>Phone</TableHead>
                     <TableHead>Is Active</TableHead>
                     <TableHead className="w-[55px]">Actions</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {receptionists.map((receptionist, index) => (
                     <ReceptionistRow
                        receptionist={receptionist}
                        key={receptionist.id}
                        rowNumber={index + 1}
                     />
                  ))}
               </TableBody>
            </Table>
         </TableWrapper>
      </WithLoadingAndError>
   );
}

export default ReceptionistsList;
