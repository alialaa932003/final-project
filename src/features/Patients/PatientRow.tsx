import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import ActionsMenu from "./ActionsMenu";
import IsActiveBadge from "@/components/IsActiveBadge";

type PatientRowProps = {
   patient: Patient;
   rowNumber: number;
};

function PatientRow({ patient, rowNumber }: PatientRowProps) {
   const fullName = `${patient.firstName} ${patient.lastName}`;

   return (
      <TableRow>
         <TableCell>{rowNumber}</TableCell>
         <TableCell>{patient.nationalID || "-"}</TableCell>
         <TableCell>{fullName}</TableCell>
         <TableCell>{patient.email}</TableCell>
         <TableCell>{patient.phoneNumber}</TableCell>
         <TableCell>{patient.address}</TableCell>
         <TableCell>{patient.gender || "-"}</TableCell>
         <TableCell>{patient.bloodType?.replace("_", " ") || "-"}</TableCell>
         <TableCell>{patient.maritalStatus || "-"}</TableCell>
         <TableCell>{patient.age || "-"}</TableCell>
         <TableCell>{patient.dateOfBirth || "-"}</TableCell>
         <TableCell className="flex items-center justify-end gap-2">
            <ActionsMenu id={patient.id} />
         </TableCell>
      </TableRow>
   );
}

export default PatientRow;
