import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import ActionsMenu from "./ActionsMenu";
import { GrView } from "react-icons/gr";

type MedicalRecordRowProps = {
   medicalRecord: MedicalRecord;
   rowNumber: number;
   patientId: string;
};

function MedicalRecordRow({
   medicalRecord,
   rowNumber,
   patientId,
}: MedicalRecordRowProps) {
   return (
      <TableRow>
         <TableCell>{rowNumber}</TableCell>
         <TableCell>{medicalRecord.diagnosis}</TableCell>
         <TableCell>{medicalRecord.notes}</TableCell>
         <TableCell>{medicalRecord.patientId}</TableCell>
         <TableCell>{medicalRecord.cachedDoctorId}</TableCell>
         <TableCell>
            <Button>
               {medicalRecord.medications.length} <GrView />
            </Button>
         </TableCell>
         <TableCell>
            <Button>
               {medicalRecord.conditions.length} <GrView />
            </Button>
         </TableCell>
         <TableCell>
            <Button>
               {medicalRecord.observations.length} <GrView />
            </Button>
         </TableCell>
         <TableCell className="flex items-center justify-end gap-2">
            <ActionsMenu id={medicalRecord.id} patientId={patientId} />
         </TableCell>
      </TableRow>
   );
}

export default MedicalRecordRow;
