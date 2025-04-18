import React from "react";
import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogFooter,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog";
import { FaXmark } from "react-icons/fa6";
import { FaRegSave } from "react-icons/fa";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
const ConfirmDelete = ({
   title,
   openDelete,
   setOpenDelete,
   name,
   action,
   isPending,
}: {
   title: string;
   openDelete: boolean;
   setOpenDelete: (value: boolean) => void;
   name: string;
   action: () => void;
   isPending?: boolean;
}) => {
   const { t } = useTranslation("global");
   return (
      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
         <DialogContent className="max-w-[50rem]">
            <DialogHeader>
               <DialogTitle className="text-start text-2xl text-gray-800">
                  {title}
               </DialogTitle>
            </DialogHeader>
            <p className="text-lg text-red-500">
               Are you sure you want to delete "{name}"?
            </p>
            <DialogFooter className="gap-2">
               <DialogClose asChild>
                  <Button size={"lg"} variant={"outline"}>
                     Cancel
                     <FaXmark />
                  </Button>
               </DialogClose>

               <Button
                  variant={"destructive"}
                  onClick={action}
                  type="submit"
                  disabled={isPending}
                  size={"lg"}
               >
                  {isPending ? `${"Deleting"}...` : "Delete"}
                  <FaRegSave />
               </Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default ConfirmDelete;
