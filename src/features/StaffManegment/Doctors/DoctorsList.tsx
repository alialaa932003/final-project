import WithLoadingAndError from "@/components/WithLoadingAndError";
import { useTranslation } from "react-i18next";
import TableWrapper from "@/components/TableWrapper";
import { useGetAllDoctors } from "./hooks/useGetAllDoctors";
import {
   Table,
   TableBody,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import DoctorRow from "./DoctorRow";

function DoctorsList() {
   const { t } = useTranslation("staff");
   const { data, isLoading, isError } = useGetAllDoctors();
   const doctors = data?.data.items || [];

   return (
      <WithLoadingAndError
         isLoading={isLoading}
         hasError={isError}
         errorText={t("no-doctors-found")}
      >
         <TableWrapper
            totalPages={data?.data.meta.last_page}
            noContainerStyle
            className="space-y-8"
         >
            <Table className="min-w-[70rem]">
               <TableHeader>
                  <TableRow>
                     <TableHead className="w-[50px]">#</TableHead>
                     <TableHead>Name</TableHead>
                     <TableHead>Email</TableHead>
                     <TableHead>Phone</TableHead>
                     <TableHead>Specialization</TableHead>
                     <TableHead className="w-[55px]">Actions</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {doctors.map((doctor, index) => (
                     <DoctorRow
                        doctor={doctor}
                        key={doctor.id}
                        rowNumber={index + 1}
                     />
                  ))}
               </TableBody>
            </Table>
         </TableWrapper>
      </WithLoadingAndError>
   );
}

export default DoctorsList;
