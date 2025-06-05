import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { useDeleteDoctor } from "./hooks/useDeleteDoctor";
import { MdDelete, MdModeEdit } from "react-icons/md";
import AddEditDoctorDialog from "./AddEditDoctorDialog";

type ActionsMenuProps = {
   id: number;
};

function ActionsMenu({ id }: ActionsMenuProps) {
   const { mutate } = useDeleteDoctor();

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
            <AddEditDoctorDialog
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
