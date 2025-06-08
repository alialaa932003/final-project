import { TableCell, TableRow } from "@/components/ui/table";
import ActionsMenu from "./ActionsMenu";
import IsActiveBadge from "@/components/IsActiveBadge";

type NurseRowProps = {
   nurse: Nurse;
   rowNumber: number;
};

function NurseRow({ nurse, rowNumber }: NurseRowProps) {
   const fullName = `${nurse.first_name} ${nurse.last_name}`;

   return (
      <TableRow>
         <TableCell>{rowNumber}</TableCell>
         <TableCell>{nurse.national_id}</TableCell>
         <TableCell>{fullName}</TableCell>
         <TableCell>{nurse.email}</TableCell>
         <TableCell>{nurse.phone}</TableCell>
         <TableCell>{nurse.clinic.name}</TableCell>
         <TableCell>
            <IsActiveBadge isActive={Boolean(nurse.is_active)} />
         </TableCell>
         <TableCell className="flex items-center justify-end gap-2">
            <ActionsMenu id={nurse.id} />
         </TableCell>
      </TableRow>
   );
}

export default NurseRow;
