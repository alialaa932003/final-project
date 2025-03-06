import { cn } from "@/lib/utils";
import * as React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export interface InputProps
   extends React.InputHTMLAttributes<HTMLInputElement> {
   icon?: React.ReactNode;
   iconAction?: () => void;
   iconPosition?: "start" | "end";
}

const baseInputStyles =
   "bg-primary-50 z-0 flex w-full rounded-2xl px-5 py-3 h-14 font-light text-gray-900 ring-1 ring-transparent file:border-0 file:bg-transparent placeholder:text-gray-200 focus-visible:outline-none focus-visible:ring-primary-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ";

const iconButtonStyles =
   "absolute bottom-0 start-3 top-0 z-10 flex items-center justify-center text-[1.4em] text-primary-200";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
   (
      { className, type, iconPosition = "end", icon, iconAction, ...props },
      ref,
   ) => {
      const [showPassword, setShowPassword] = React.useState(false);
      const isPassword = type === "password";
      const hasIcon = isPassword || icon;

      const handleIconClick = () => {
         iconAction?.();
         if (isPassword) {
            setShowPassword((prev) => !prev);
         }
      };

      const renderIcon = () => {
         if (isPassword) {
            return showPassword ? <FaRegEyeSlash /> : <FaRegEye />;
         }
         return icon;
      };

      return (
         <div className="relative z-[1] w-full">
            <input
               type={isPassword && showPassword ? "text" : type}
               className={cn(
                  baseInputStyles,
                  hasIcon && iconPosition === "start" ? "ps-9" : "pe-9",
                  className,
               )}
               ref={ref}
               {...props}
            />
            {hasIcon && (
               <span
                  role="button"
                  className={cn(
                     iconButtonStyles,
                     (isPassword || iconAction) &&
                        "pointer-events-all cursor-pointer",
                     !isPassword &&
                        !iconAction &&
                        "pointer-events-none cursor-default",
                     iconPosition === "end" ? "end-5 start-auto" : "start-5",
                  )}
                  onClick={handleIconClick}
               >
                  {renderIcon()}
               </span>
            )}
         </div>
      );
   },
);

Input.displayName = "Input";

export { Input };
