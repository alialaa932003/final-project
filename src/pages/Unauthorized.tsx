import { Button } from "@/components/ui/button";
import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
   const navigate = useNavigate();
   return (
      <div className="bg-gray-52 gap-50 flex h-screen animate-fade-in flex-col items-center justify-center p-12 text-gray-500">
         <div className="w-full max-w-[40rem]">
            <img className="w-full" src="/images/403.svg" alt="not found" />
         </div>
         <p className="mb-8 text-xl">
            Error : You are not authorized to view this page
         </p>
         <Button
            className="gap-4"
            size={"lg"}
            onClick={() => {
               navigate("/");
            }}
         >
            Back To Home
            <IoChevronForwardOutline />
         </Button>
      </div>
   );
};

export default Unauthorized;
