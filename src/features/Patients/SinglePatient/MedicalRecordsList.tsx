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
import MedicalRecordRow from "./MedicalRecordRow";
import { useGetAllMedicalRecords } from "./hooks/useGetAllMedicalRecords";

type MedicalRecordsListProps = {
   patientId: string;
};

function MedicalRecordsList({ patientId }: MedicalRecordsListProps) {
   const { t } = useTranslation("patients");
   const { data, isLoading, isError } = useGetAllMedicalRecords(patientId);
   const medicalRecords = data?.data.items || [];

   return (
      <WithLoadingAndError
         isLoading={isLoading}
         hasError={isError || medicalRecords.length === 0}
         errorText="No medical records found for this patient."
      >
         <TableWrapper totalPages={data?.data.meta.lastPage}>
            <Table className="min-w-[70rem]">
               <TableHeader>
                  <TableRow>
                     <TableHead className="w-[50px]">#</TableHead>
                     <TableHead>Diagnosis</TableHead>
                     <TableHead>Notes</TableHead>
                     <TableHead>PatientId</TableHead>
                     <TableHead>Medications</TableHead>
                     <TableHead>Conditions</TableHead>
                     <TableHead>Observations</TableHead>
                     <TableHead>Created At</TableHead>
                     <TableHead className="w-[55px]">Actions</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {medicalRecords.map((medicalRecord, index) => (
                     <MedicalRecordRow
                        medicalRecord={medicalRecord}
                        patientId={patientId}
                        key={medicalRecord.id}
                        rowNumber={index + 1}
                     />
                  ))}
               </TableBody>
            </Table>
         </TableWrapper>
      </WithLoadingAndError>
   );
}

export default MedicalRecordsList;
