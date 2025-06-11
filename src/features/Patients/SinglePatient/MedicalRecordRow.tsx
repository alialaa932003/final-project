import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import ActionsMenu from "./ActionsMenu";
import { GrView } from "react-icons/gr";
import dayjs from "dayjs";
import ConditionsListDialog from "./Conditions/ConditionsListDialog";
import MedicationsListDialog from "./Medications/MedicationsListDialog";
import ObservationsListDialog from "./Observations/ObservationsListDialog";

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
         <TableCell>
            <ConditionsListDialog
               conditions={medicalRecord.conditions}
               triggerButton={
                  <Button>
                     {medicalRecord.conditions.length} <GrView />
                  </Button>
               }
            />
         </TableCell>
         <TableCell>
            <MedicationsListDialog
               medications={medicalRecord.medications}
               triggerButton={
                  <Button>
                     {medicalRecord.medications.length} <GrView />
                  </Button>
               }
            />
         </TableCell>
         <TableCell>
            <ObservationsListDialog
               observations={medicalRecord.observations}
               triggerButton={
                  <Button>
                     {medicalRecord.observations.length} <GrView />
                  </Button>
               }
            />
         </TableCell>
         <TableCell>
            {dayjs(medicalRecord.createdAt).format("YYYY-MM-DD | HH:mm A")}
         </TableCell>
         <TableCell className="flex items-center justify-end gap-2">
            <ActionsMenu id={medicalRecord.id} patientId={patientId} />
         </TableCell>
      </TableRow>
   );
}

export default MedicalRecordRow;
