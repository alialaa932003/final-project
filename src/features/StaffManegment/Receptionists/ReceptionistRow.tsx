import { TableCell, TableRow } from "@/components/ui/table";
import ActionsMenu from "./ActionsMenu";
import IsActiveBadge from "@/components/IsActiveBadge";

type ReceptionistRowProps = {
   receptionist: Receptionist;
   rowNumber: number;
};

function ReceptionistRow({ receptionist, rowNumber }: ReceptionistRowProps) {
   const fullName = `${receptionist.first_name} ${receptionist.last_name}`;

   return (
      <TableRow>
         <TableCell>{rowNumber}</TableCell>
         <TableCell>{receptionist.national_id}</TableCell>
         <TableCell>{fullName}</TableCell>
         <TableCell>{receptionist.email}</TableCell>
         <TableCell>{receptionist.phone}</TableCell>
         <TableCell>
            <IsActiveBadge isActive={Boolean(receptionist.is_active)} />
         </TableCell>
         <TableCell className="flex items-center justify-end gap-2">
            <ActionsMenu id={receptionist.id} />
         </TableCell>
      </TableRow>
   );
}

export default ReceptionistRow;
