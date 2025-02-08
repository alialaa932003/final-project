import React from "react";
import { ErrorMessage, Field, FieldProps } from "formik";
import { Input } from "../ui/input";

interface FormInputProps {
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

const FormInput: React.FC<FormInputProps> = ({
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
         <div className="w-full">
            {label && (
               <label className="mb-3 block font-medium text-gray-600">
                  {label}
               </label>
            )}
            <Input
               {...field}
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
               name={name}
               component="p"
               className="mt-1 text-red-600"
            />
         </div>
      )}
   </Field>
);

export default FormInput;
