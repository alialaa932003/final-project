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
import { useDeleteBooking } from "./hooks/useDeleteBooking";
import EditBookingDialog from "./EditBookingDialog";
import moment from "moment";
interface Props {
   rowNumber: number;
   booking: Booking;
}
const BookingRow = ({ rowNumber, booking }: Props) => {
   const {
      id,
      appointment_date,
      appointment_time,
      doctor,
      patient_name,
      status,
      type,
   } = booking;
   const [isOpenEdit, setIsOpenEdit] = useState(false);
   const rowIndex = useGetTableRowIndex(LIMIT, rowNumber);
   const [isConfirmDelete, setIsConfirmDelete] = useState(false);
   const { deleteBooking, isDeleting } = useDeleteBooking();

   return (
      <>
         <TableRow>
            <TableCell>{rowIndex}</TableCell>
            <TableCell>{patient_name || "______"}</TableCell>
            <TableCell>{doctor.name}</TableCell>
            <TableCell>{doctor.specialization}</TableCell>
            <TableCell>{status}</TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>
               {moment(appointment_date).format("YYYY-MM-DD")}
            </TableCell>
            <TableCell>{appointment_time}</TableCell>

            <TableCell>
               <DropdownMenu>
                  <DropdownMenuTrigger className="w-full outline-none">
                     <ActionBtn />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                     <DropdownMenuItem
                        onClick={(e) => {
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
               title={"Delete Booking"}
               action={() => {
                  deleteBooking({ id });
               }}
               isPending={false}
               openDelete={isConfirmDelete}
               setOpenDelete={setIsConfirmDelete}
               name={patient_name || "Booking"}
            />
         </TableRow>

         <EditBookingDialog
            id={id}
            isOpen={isOpenEdit}
            onOpenChange={setIsOpenEdit}
         />
      </>
   );
};

export default BookingRow;
