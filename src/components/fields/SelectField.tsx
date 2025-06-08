import { useCallback, useEffect } from "react";
import { ClassNameValue } from "tailwind-merge";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { useSearchParams } from "react-router-dom";
import { ErrorMessage } from "formik";

interface Props {
   options: { label: string; value: string | number }[];
   paramKey?: string;
   defaultValue?: string;
   defaultOpen?: boolean;
   triggerClassName?: ClassNameValue;
   contentClassName?: ClassNameValue;
   itemClassName?: ClassNameValue;
   containerClassName?: ClassNameValue;
   labelClassName?: ClassNameValue;
   value?: string;
   name?: string;
   isUseSearchParam?: boolean;
   label?: string;
   onChange?: (value: string) => void;
   disabled?: boolean;
   placeholder?: string;
   withNoOptions?: boolean;
}

export default function SelectField({
   options,
   paramKey,
   defaultValue,
   defaultOpen = false,
   triggerClassName = "",
   contentClassName = "",
   itemClassName = "",
   isUseSearchParam = true,
   label,
   containerClassName,
   labelClassName,
   value,
   name = "",
   onChange,
   disabled = false,
   placeholder = "",
   withNoOptions = false,
}: Props) {
   const [searchParams, setSearchParams] = useSearchParams();

   const selectedValue = isUseSearchParam
      ? searchParams.get(paramKey || "") || defaultValue || options[0]?.value
      : defaultValue || options[0]?.value;

   const onValueChange = useCallback(
      (value: string) => {
         onChange?.(value);
         if (isUseSearchParam) {
            setSearchParams((prevSearchParams) => {
               prevSearchParams.set(paramKey || "", value);
               return prevSearchParams;
            });
         }
      },
      [onChange, paramKey, setSearchParams, isUseSearchParam],
   );

   useEffect(() => {
      if (defaultValue) onValueChange(defaultValue);
   }, [defaultValue]);

   return (
      <div className={cn("relative mb-8 space-y-1", containerClassName)}>
         {label ? (
            <Label className={cn("text-foreground text-xs", labelClassName)}>
               {label}
            </Label>
         ) : null}

         <Select
            value={isUseSearchParam ? selectedValue?.toString() : value}
            onValueChange={onValueChange}
            defaultOpen={defaultOpen}
            defaultValue={defaultValue}
            disabled={disabled}
         >
            <SelectTrigger
               className={cn(
                  "w-full cursor-pointer capitalize",
                  triggerClassName,
               )}
            >
               <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className={`${contentClassName}`}>
               <SelectGroup>
                  {(withNoOptions || !options.length) && (
                     <SelectItem
                        value="No Options Found"
                        className="flex w-full items-center justify-center text-center"
                        disabled
                     >
                        No Options Found
                     </SelectItem>
                  )}
                  {options.map((option) => (
                     <SelectItem
                        key={option.value}
                        value={option.value.toString()}
                        className={cn("capitalize", itemClassName)}
                     >
                        {option.label}
                     </SelectItem>
                  ))}
               </SelectGroup>
            </SelectContent>
         </Select>

         <ErrorMessage
            className="absolute top-full z-10 text-xs text-red-600"
            component={"p"}
            name={name}
         />
      </div>
   );
}
