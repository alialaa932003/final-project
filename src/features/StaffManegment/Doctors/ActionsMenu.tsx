import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { useDeleteDoctor } from "./hooks/useDeleteDoctor";

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
            <Button variant="ghost" size="sm">
               Update
            </Button>
            <Button
               variant="destructive"
               size="sm"
               onClick={handleDeleteDoctor}
            >
               Delete
            </Button>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}

export default ActionsMenu;
