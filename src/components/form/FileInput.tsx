import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
   icon?: React.ReactNode;
}
const FileInput: React.FC<Props> = ({ id, icon, placeholder, ...props }) => {
   return (
      <div>
         <label
            htmlFor={id}
            className={`relative z-0 flex h-[38.5px] w-full cursor-pointer rounded-[1rem] bg-white px-8 text-base font-light text-gray-100 ring-1 ring-gray-100 focus-visible:outline-none focus-visible:ring-primary-600 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[#5F666A] dark:text-[#B5B8BA] xl:h-[45px] xl:py-5 ${icon ? "pe-20" : ""}`}
         >
            {icon && (
               <span className="absolute bottom-0 end-8 top-0 z-10 flex items-center justify-center text-[1.7em]">
                  {icon}
               </span>
            )}
            <span className="flex items-center overflow-hidden whitespace-pre text-gray-200">
               {placeholder}
            </span>
            <input
               className="bg-red-500"
               {...props}
               id={id}
               hidden
               type="file"
            />
         </label>
      </div>
   );
};

export default FileInput;
