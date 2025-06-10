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
import { useGetAllPatients } from "./hooks/useGetAllPatients";
import PatientRow from "./PatientRow";

function PatientsList() {
   const { t } = useTranslation("patients");
   const { data, isLoading, isError } = useGetAllPatients();
   const patients = data?.data.items || [];

   return (
      <WithLoadingAndError
         isLoading={isLoading}
         hasError={isError || patients.length === 0}
         errorText={t("no-patients-found")}
      >
         <TableWrapper totalPages={data?.data.meta.lastPage}>
            <Table className="min-w-[70rem]">
               <TableHeader>
                  <TableRow>
                     <TableHead className="w-[50px]">#</TableHead>
                     <TableHead>National ID</TableHead>
                     <TableHead>Name</TableHead>
                     <TableHead>Email</TableHead>
                     <TableHead>Phone</TableHead>
                     <TableHead>Address</TableHead>
                     <TableHead>Gender</TableHead>
                     <TableHead>Blood Type</TableHead>
                     <TableHead>Marital Status</TableHead>
                     <TableHead>Age</TableHead>
                     <TableHead>Date Of Birth</TableHead>
                     <TableHead className="w-[55px]">Actions</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {patients.map((patient, index) => (
                     <PatientRow
                        patient={patient}
                        key={patient.id}
                        rowNumber={index + 1}
                     />
                  ))}
               </TableBody>
            </Table>
         </TableWrapper>
      </WithLoadingAndError>
   );
}

export default PatientsList;
