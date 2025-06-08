import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import ActionsMenu from "./ActionsMenu";

type DoctorRowProps = {
   doctor: Doctor;
   rowNumber: number;
};

function DoctorRow({ doctor, rowNumber }: DoctorRowProps) {
   const fullName = `${doctor.first_name} ${doctor.last_name}`;

   return (
      <TableRow>
         <TableCell>{rowNumber}</TableCell>
         <TableCell>{doctor.national_id}</TableCell>
         <TableCell>{fullName}</TableCell>
         <TableCell>{doctor.email}</TableCell>
         <TableCell>{doctor.phone}</TableCell>
         <TableCell>
            <Badge colorTheme={doctor.specialization?.color}>
               {doctor.specialization?.name}
            </Badge>
         </TableCell>
         <TableCell className="flex items-center justify-end gap-2">
            <ActionsMenu id={doctor.id} doctorName={fullName} />
         </TableCell>
      </TableRow>
   );
}

export default DoctorRow;
