import { InputHTMLAttributes } from "react";

export interface SelectOption {
   label: string;
   value: string | number;
}

export interface SelectSearchProps
   extends InputHTMLAttributes<HTMLInputElement> {
   options: SelectOption[];
   value: any;
   onChange: (value: any) => void;
   isDisabled?: boolean;
   multiple?: boolean;
}
