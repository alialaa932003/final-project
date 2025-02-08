import { useDarkMode } from "@/context/DarkModeContext";
import NavItemLayout from "@/features/common/Navbar/NavItemLayout";
import React from "react";
import { FaRegMoon } from "react-icons/fa";
import { PiSun } from "react-icons/pi";

const DarkMode = () => {
   const { toggleDarkMode, isDarkMode } = useDarkMode();
   return (
      <button onClick={toggleDarkMode}>
         <NavItemLayout>{isDarkMode ? <PiSun /> : <FaRegMoon />}</NavItemLayout>
      </button>
   );
};

export default DarkMode;
