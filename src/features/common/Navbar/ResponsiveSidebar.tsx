import { Drawer, DrawerClose, DrawerContent } from "@/components/ui/drawer";
import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import Sidebar from "../Sidebar";

const ResponsiveSidebar = ({
   openResponsiveSidebar,
   setOpenRespomsiveSidebar,
}: {
   openResponsiveSidebar: boolean;
   setOpenRespomsiveSidebar: (open: boolean) => void;
}) => {
   return (
      <Drawer
         open={openResponsiveSidebar}
         onOpenChange={setOpenRespomsiveSidebar}
         direction="right"
      >
         <DrawerContent className="ml-auto flex h-full w-[90%] max-w-[24rem] border-none bg-primary-500">
            <DrawerClose className="me-8 ms-auto mt-4 text-3xl">
               <HiMiniXMark />
            </DrawerClose>
            <Sidebar className="flex-1 flex-col" />
         </DrawerContent>
      </Drawer>
   );
};

export default ResponsiveSidebar;
