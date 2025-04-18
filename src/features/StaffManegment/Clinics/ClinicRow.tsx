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
import { GiCheckMark } from "react-icons/gi";
import { HiMiniXMark } from "react-icons/hi2";
import Status from "@/components/Status";
import { useDeleteClinic } from "./hooks/useDeleteClinic";
interface Props {
   rowNumber: number;
   clinic: Clinic;
}
const ClinicRow = ({ rowNumber, clinic }: Props) => {
   const { id, name, description, max_doctors, current_doctors, is_active } =
      clinic;
   const navigate = useNavigate();
   const rowIndex = useGetTableRowIndex(LIMIT, rowNumber);
   const [isConfirmDelete, setIsConfirmDelete] = useState(false);
   const { deleteClinic, isDeleting } = useDeleteClinic();

   return (
      <TableRow>
         <TableCell>{rowIndex}</TableCell>
         <TableCell>{name}</TableCell>
         <TableCell>
            {description.length > 50
               ? description.slice(0, 50) + "..."
               : description}
         </TableCell>
         <TableCell>
            {current_doctors}/{max_doctors}
         </TableCell>
         <TableCell>
            <Status variant={is_active ? "green" : "red"}>
               <span className="w-10"> {is_active ? "Yes" : "No"}</span>
               {is_active ? (
                  <span className="text-green-500">
                     <GiCheckMark />
                  </span>
               ) : (
                  <span className="text-lg text-red-500">
                     <HiMiniXMark />
                  </span>
               )}
            </Status>
         </TableCell>
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
            title={"Delete Clinic"}
            action={() => {
               deleteClinic({ id });
            }}
            isPending={false}
            openDelete={isConfirmDelete}
            setOpenDelete={setIsConfirmDelete}
            name={name}
         />
      </TableRow>
   );
};

export default ClinicRow;
