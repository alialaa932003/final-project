import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddEditPatientDialog from "./AddEditPatientDialog";
import ActionBtn from "@/components/ActionBtn";
import { FaRegEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";

type ActionsMenuProps = {
   id: string;
};

function ActionsMenu({ id }: ActionsMenuProps) {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger className="w-full outline-none">
            <ActionBtn />
         </DropdownMenuTrigger>
         <DropdownMenuContent className="flex min-w-fit flex-col gap-2">
            <AddEditPatientDialog
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

            <DropdownMenuItem asChild>
               <Link to={`/patients/${id}`} className="w-full">
                  View
                  <GrView />
               </Link>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}

export default ActionsMenu;
