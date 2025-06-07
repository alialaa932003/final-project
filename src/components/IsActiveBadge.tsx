import { GiCheckMark } from "react-icons/gi";
import Status from "./Status";
import { HiMiniXMark } from "react-icons/hi2";

type IsActiveBadgeProps = {
   isActive?: boolean;
};

function IsActiveBadge({ isActive }: IsActiveBadgeProps) {
   return (
      <div>
         <Status variant={isActive ? "green" : "red"}>
            <span className="w-10"> {isActive ? "Yes" : "No"}</span>
            {isActive ? (
               <span className="text-green-500">
                  <GiCheckMark />
               </span>
            ) : (
               <span className="text-lg text-red-500">
                  <HiMiniXMark />
               </span>
            )}
         </Status>
      </div>
   );
}

export default IsActiveBadge;
