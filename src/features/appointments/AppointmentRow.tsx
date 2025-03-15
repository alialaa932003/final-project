import React, { useState } from "react";
import {
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
   DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { TableCell, TableRow } from "@/components/ui/table";
import ActionBtn from "@/components/ActionBtn";
import { useNavigate } from "react-router-dom";
import { useGetTableRowIndex } from "@/hooks/useGetTableRowIndex";
import { LIMIT } from "@/constants";
import ConfirmDelete from "@/components/ConfirmDelete";

interface Props {
   rowNumber: number;
}
const AppointmentRow = ({ rowNumber }: Props) => {
   const navigate = useNavigate();
   const rowIndex = useGetTableRowIndex(LIMIT, rowNumber);
   const [isConfirmDelete, setIsConfirmDelete] = useState(false);

   return (
      <TableRow>
         <TableCell>{rowIndex}</TableCell>
         <TableCell>test</TableCell>
         <TableCell>test</TableCell>
         <TableCell>test</TableCell>
         <TableCell>test</TableCell>
         <TableCell>test</TableCell>
         <TableCell>
            <DropdownMenu>
               <DropdownMenuTrigger className="w-full outline-none">
                  <ActionBtn />
               </DropdownMenuTrigger>
               <DropdownMenuContent>
                  <DropdownMenuItem
                     onClick={() => {
                        navigate(`/dashboard`);
                     }}
                  >
                     Edit
                     <FaRegEdit />
                  </DropdownMenuItem>

                  <DropdownMenuItem
                     className="text-red-500"
                     onClick={() => {
                        setIsConfirmDelete(true);
                     }}
                  >
                     Delete
                     <FaRegTrashCan />
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </TableCell>
         <ConfirmDelete
            title={"Delete Appointment"}
            action={() => {
               // deleteAppointment({ id });
            }}
            isPending={false}
            openDelete={isConfirmDelete}
            setOpenDelete={setIsConfirmDelete}
            name={"test"}
         />
      </TableRow>
   );
};

export default AppointmentRow;
