import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
   "inline-flex gap-2 items-center justify-center rounded-xl whitespace-nowrap  text-sm font-medium transition-colors  focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50   border-2 border-transparent",
   {
      variants: {
         variant: {
            default:
               "bg-primary-500  text-white  hover:bg-primary-50 hover:text-primary-500  border-primary-500",
            gradient:
               "bg-gradient-to-r from-primary-500 to-secondary-500 hover:border-primary-500 hover:text-primary-500 hover:border border-transparent  hover:from-white hover:to-white   hover:border-primary-500 text-white ",
            success:
               "bg-green-500 text-white shadow-sm hover:bg-green-600 dark:text-white dark:hover:bg-green-900/90  border-transparent",
            primary:
               "bg-primary-500 text-white shadow-sm hover:bg-primary-600 dark:bg-primary-900 dark:text-white dark:hover:bg-primary-900/90 border border-transparent",
            secondary:
               "bg-primary-50 text-primary-500 hover:text-white dark:bg-[#5F666A] dark:text-white dark:hover:bg-white dark:hover:text-primary-500  hover:bg-primary-500",
            destructive:
               "bg-[#F13B3B] text-neutral-50 shadow-sm hover:bg-red-900/90  dark:text-neutral-50 dark:hover:bg-red-900/90 ",
            outline:
               "border-2 border-primary-500  text-primary-500 hover:bg-primary-500 hover:text-white dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-primary-500 dark:hover:border-primary-500",

            ghost: "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
            link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
         },
         size: {
            lg: "h-[3.8rem] py-3.5 text-lg  px-7",
            default: "h-14 px-4 py-3.5 2xl:px-4",
            sm: "h-9 px-4 text-sm",
            icon: "size-11",
         },
      },
      defaultVariants: {
         variant: "default",
         size: "default",
      },
   },
);

export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
   asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : "button";
      return (
         <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
         />
      );
   },
);
Button.displayName = "Button";

export { Button, buttonVariants };
