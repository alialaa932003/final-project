import React from "react";
import { ErrorMessage, Field, FieldProps } from "formik";
import { Input } from "../ui/input";

interface InputFieldProps {
   id?: string;
   label?: string;
   name: string;
   placeholder?: string;
   type?: string;
   icon?: React.ReactNode;
   iconAction?: () => void;
   className?: string;
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
   disabled = false,
   readonly = false,
   iconPosition = "end",
}) => (
   <Field name={name}>
      {({ field }: FieldProps) => (
         <div className="relative mb-3 w-full pb-1">
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
