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
import { useGetTableRowIndex } from "@/hooks/useGetTableRowIndex";
import { LIMIT } from "@/constants";
import ConfirmDelete from "@/components/ConfirmDelete";
import { Badge } from "@/components/ui/badge";
import { useDeleteSpecialization } from "./hooks/useDeleteSpecialization";
import AddEditSpecializationDialog from "./AddEditSpecializationDialog";

interface Props {
   rowNumber: number;
   specialization: Specialization;
}

const getColorClass = (color: SpecializationColor) => {
   switch (color) {
      case "green":
         return "bg-green-100 text-green-800 hover:bg-green-100/80";
      case "yellow":
         return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80";
      case "sky":
         return "bg-sky-100 text-sky-800 hover:bg-sky-100/80";
      case "purple":
         return "bg-purple-100 text-purple-800 hover:bg-purple-100/80";
      default:
         return "bg-gray-100 text-gray-800 hover:bg-gray-100/80";
   }
};

const SpecializationRow = ({ rowNumber, specialization }: Props) => {
   const { id, name, description, color, createdAt, updatedAt } =
      specialization;
   const [isOpenEdit, setIsOpenEdit] = useState(false);
   const rowIndex = useGetTableRowIndex(LIMIT, rowNumber);
   const [isConfirmDelete, setIsConfirmDelete] = useState(false);
   const { deleteSpecialization, isDeleting } = useDeleteSpecialization();

   const formattedDate = new Date(createdAt).toLocaleDateString();
   const colorClass = getColorClass(color);

   return (
      <>
         <TableRow>
            <TableCell>{rowIndex}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>
               {description.length > 50
                  ? description.slice(0, 50) + "..."
                  : description}
            </TableCell>
            <TableCell>
               <Badge variant="outline" className={colorClass}>
                  {color}
               </Badge>
            </TableCell>
            <TableCell>{formattedDate}</TableCell>
            <TableCell>
               <DropdownMenu>
                  <DropdownMenuTrigger className="w-full outline-none">
                     <ActionBtn />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                     <DropdownMenuItem
                        onClick={() => {
                           setIsOpenEdit(true);
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
               title={"Delete Specialization"}
               action={() => {
                  deleteSpecialization({ id });
               }}
               isPending={isDeleting}
               openDelete={isConfirmDelete}
               setOpenDelete={setIsConfirmDelete}
               name={name}
            />
         </TableRow>

         <AddEditSpecializationDialog
            id={id}
            isOpen={isOpenEdit}
            onOpenChange={setIsOpenEdit}
         />
      </>
   );
};

export default SpecializationRow;
