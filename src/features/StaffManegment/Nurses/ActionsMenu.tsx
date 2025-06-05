import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { useDeleteNurse } from "./hooks/useDeleteNurse";
import { MdDelete, MdModeEdit } from "react-icons/md";
import AddEditNurseDialog from "./AddEditNurseDialog";

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
         <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
               <BsThreeDots className="size-7 text-secondary-500" />
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="flex min-w-fit flex-col gap-2">
            <AddEditNurseDialog
               id={id}
               triggerButton={
                  <Button
                     variant="secondary"
                     size="sm"
                     className="size-9"
                     title="Update Doctor"
                  >
                     <MdModeEdit className="size-5" />
                  </Button>
               }
            />

            <Button
               variant="destructive"
               size="icon"
               onClick={handleDeleteDoctor}
               className="size-9"
               title="Delete Doctor"
            >
               <MdDelete className="size-5 text-white" />
            </Button>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}

export default ActionsMenu;
