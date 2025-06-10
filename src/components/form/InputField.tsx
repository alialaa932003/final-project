import React, {
   HTMLInputTypeAttribute,
   InputHTMLAttributes,
   RefAttributes,
} from "react";
import { ErrorMessage, Field, FieldProps } from "formik";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
   id?: string;
   label?: string;
   name: string;
   placeholder?: string;
   type?: HTMLInputTypeAttribute;
   icon?: React.ReactNode;
   iconAction?: () => void;
   className?: string;
   containerClassName?: string;
   disabled?: boolean;
   readonly?: boolean;
   iconPosition?: "start" | "end";
}

const InputField: React.FC<InputFieldProps> = ({
   id,
   label,
   name,
   placeholder,
   type = "text",
   icon,
   iconAction,
   className,
   containerClassName,
   disabled = false,
   readonly = false,
   iconPosition = "end",
   ...props
}) => (
   <Field name={name}>
      {({ field }: FieldProps) => (
         <div className={cn("relative mb-5 w-full pb-1", containerClassName)}>
            {label && (
               <label className="mb-2 block font-medium text-gray-600">
                  {label}
               </label>
            )}
            <Input
               {...field}
               id={id}
               type={type}
               placeholder={placeholder}
               icon={icon}
               iconAction={iconAction}
               className={className}
               disabled={disabled}
               readOnly={readonly}
               iconPosition={iconPosition}
               {...props}
            />
            <ErrorMessage
               className="absolute top-full z-10 text-xs text-red-600"
               component={"p"}
               name={name}
            />
         </div>
      )}
   </Field>
);

export default InputField;
