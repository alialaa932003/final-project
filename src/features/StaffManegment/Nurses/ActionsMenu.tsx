import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { useDeleteNurse } from "./hooks/useDeleteNurse";
import { MdDelete, MdModeEdit } from "react-icons/md";
import AddEditNurseDialog from "./AddEditNurseDialog";
import ActionBtn from "@/components/ActionBtn";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

type ActionsMenuProps = {
   id: number | string;
};

function ActionsMenu({ id }: ActionsMenuProps) {
   const { mutate } = useDeleteNurse();

   const handleDeleteDoctor = () => {
      mutate({ id });
   };

   return (
      <DropdownMenu>
         <DropdownMenuTrigger className="w-full outline-none">
            <ActionBtn />
         </DropdownMenuTrigger>
         <DropdownMenuContent className="flex min-w-fit flex-col gap-2">
            <AddEditNurseDialog
               id={id}
               triggerButton={
                  <Button
                     variant="ghost"
                     className="h-auto justify-between gap-2 rounded-sm !px-2 py-2 text-sm"
                  >
                     Edit
                     <FaRegEdit />
                  </Button>
               }
            />

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
