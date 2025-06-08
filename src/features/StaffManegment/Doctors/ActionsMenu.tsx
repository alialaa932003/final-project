import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDeleteDoctor } from "./hooks/useDeleteDoctor";
import AddEditDoctorDialog from "./AddEditDoctorDialog";
import ActionBtn from "@/components/ActionBtn";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

type ActionsMenuProps = {
   id: string;
};

function ActionsMenu({ id }: ActionsMenuProps) {
   const { mutate } = useDeleteDoctor();

   const handleDeleteDoctor = () => {
      mutate({ id });
   };

   return (
      <DropdownMenu>
         <DropdownMenuTrigger className="w-full outline-none">
            <ActionBtn />
         </DropdownMenuTrigger>
         <DropdownMenuContent className="flex min-w-fit flex-col gap-2">
            <AddEditDoctorDialog
               id={id}
               triggerButton={
                  <Button
                     variant="ghost"
                     className="h-auto justify-between gap-2 rounded-sm !px-2 py-2 text-sm font-normal"
                  >
                     Edit
                     <FaRegEdit />
                  </Button>
               }
            />

            <DropdownMenuItem asChild>
               <Link to={`/bookings/add?doctorId=${id}`} className="w-full">
                  Add Booking
                  <MdOutlineAddBox />
               </Link>
            </DropdownMenuItem>

            <DropdownMenuItem
               className="text-red-500"
               onClick={handleDeleteDoctor}
            >
               Delete
               <FaRegTrashCan />
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}

export default ActionsMenu;
