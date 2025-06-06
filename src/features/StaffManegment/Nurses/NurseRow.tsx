import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { useDeleteNurse } from "./hooks/useDeleteNurse";
import { useTranslation } from "react-i18next";
import ActionsMenu from "./ActionsMenu";
import IsActiveBadge from "@/components/IsActiveBadge";

type NurseRowProps = {
   nurse: Nurse;
   rowNumber: number;
};

function NurseRow({ nurse, rowNumber }: NurseRowProps) {
   const { t } = useTranslation(["global", "staff"]);
   const fullName = `${nurse.first_name} ${nurse.last_name}`;

   return (
      <TableRow>
         <TableCell>{rowNumber}</TableCell>
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
