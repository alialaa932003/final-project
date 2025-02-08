import { cn } from "@/lib/utils";
import React from "react";
import animationData from "@/components/loader.json";
import Lottie from "react-lottie";

const Loading = ({ itemClassName }: { itemClassName?: string }) => {
   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      
      rendererSettings: {
         preserveAspectRatio: "xMidYMid slice",
         
      },
   };
   return (
      <div className="flex w-full items-center justify-center gap-3 pointer-events-none">
         <Lottie width={120} height={50} options={defaultOptions} />
      </div>
   );
};

export default Loading;
