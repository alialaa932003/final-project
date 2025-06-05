import * as React from "react";
import {
   CaretSortIcon,
   CheckIcon,
   ChevronDownIcon,
   ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
   React.ElementRef<typeof SelectPrimitive.Trigger>,
   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
   <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
         "bg-gray-base/60 z-0 flex min-w-full items-center justify-between rounded-full px-6 py-3 text-lg font-light text-gray-500 ring-1 ring-gray-100 file:border-0 file:bg-transparent file:font-medium focus-visible:outline-none focus-visible:ring-primary-600 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[#5F666A]",
         className,
      )}
      {...props}
   >
      {children}
      <SelectPrimitive.Icon asChild>
         <ChevronDownIcon className="size-8 text-inherit opacity-50" />
      </SelectPrimitive.Icon>
   </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
   React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
   React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
   <SelectPrimitive.ScrollUpButton
      ref={ref}
      className={cn(
         "flex cursor-default items-center justify-center py-1",
         className,
      )}
      {...props}
   >
      <ChevronUpIcon />
   </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
   React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
   React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
   <SelectPrimitive.ScrollDownButton
      ref={ref}
      className={cn(
         "flex cursor-default items-center justify-center py-1",
         className,
      )}
      {...props}
   >
      <ChevronDownIcon />
   </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
   SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
   React.ElementRef<typeof SelectPrimitive.Content>,
   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
   <SelectPrimitive.Portal>
      <SelectPrimitive.Content
         ref={ref}
         className={cn(
            "relative z-50 max-h-96 w-full min-w-[8rem] overflow-hidden rounded-[1.2rem] border border-neutral-200 bg-white p-4 text-neutral-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
            position === "popper" &&
               "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            className,
         )}
         position={position}
         {...props}
      >
         <SelectScrollUpButton />
         <SelectPrimitive.Viewport
            className={cn(
               "p-1",
               position === "popper" &&
                  "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            )}
         >
            {children}
         </SelectPrimitive.Viewport>
         <SelectScrollDownButton />
      </SelectPrimitive.Content>
   </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
   React.ElementRef<typeof SelectPrimitive.Label>,
   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
   <SelectPrimitive.Label
      ref={ref}
      className={cn("text-md px-2 py-1.5 font-semibold", className)}
      {...props}
   />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
   React.ElementRef<typeof SelectPrimitive.Item>,
   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
   <SelectPrimitive.Item
      ref={ref}
      className={cn(
         "text-md relative flex w-full cursor-pointer select-none items-center rounded-md px-2 py-3 pr-8 outline-none transition-colors hover:bg-primary-500/10 focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
         className,
      )}
      {...props}
   >
      <span className="absolute right-6 flex h-3.5 w-3.5 items-center justify-center">
         <SelectPrimitive.ItemIndicator>
            <CheckIcon className="size-8" />
         </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
   </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
   React.ElementRef<typeof SelectPrimitive.Separator>,
   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
   <SelectPrimitive.Separator
      ref={ref}
      className={cn(
         "-mx-1 my-1 h-px w-full bg-neutral-100 dark:bg-neutral-800",
         className,
      )}
      {...props}
   />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
   Select,
   SelectGroup,
   SelectValue,
   SelectTrigger,
   SelectContent,
   SelectLabel,
   SelectItem,
   SelectSeparator,
   SelectScrollUpButton,
   SelectScrollDownButton,
};
