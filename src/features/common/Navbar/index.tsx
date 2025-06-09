import { usePageDetails } from "@/context/PageDetailsProvider";
import { LuBell } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = ({
   setOpenRespomsiveSidebar,
}: {
   openResponsiveSidebar: boolean;
   setOpenRespomsiveSidebar: (open: boolean) => void;
}) => {
   const { pageName } = usePageDetails();

   return (
      <div className="flex h-16 items-center border-b border-transparent bg-gray-0 px-7 shadow-md xl:h-20 2xl:px-10">
         <div className="flex w-full items-center justify-between gap-8">
            <div className="hidden items-center gap-4 text-base text-primary-800 lg:flex">
               <h1 className="text-2xl font-bold 2xl:text-3xl">{pageName}</h1>
            </div>
            <div className="flex items-center gap-7">
               {/* <Link to={"/settings"} className="text-2xl text-secondary-500">
                  <IoSettingsOutline />
               </Link>
               <button className="relative text-2xl text-secondary-500">
                  <span className="absolute end-0 top-0 aspect-square w-3 rounded-full bg-tertiary-500 after:absolute after:inset-0 after:animate-ping after:rounded-full after:bg-tertiary-500"></span>
                  <LuBell />
               </button> */}
               <UserInfo />
            </div>
            <div className="relative flex flex-row-reverse items-center justify-end gap-3 md:gap-6 lg:hidden lg:flex-row">
               <button
                  onClick={() => {
                     setOpenRespomsiveSidebar(true);
                  }}
               >
                  <div className="text-2xl text-primary-500 lg:hidden">
                     <RxHamburgerMenu />
                  </div>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
