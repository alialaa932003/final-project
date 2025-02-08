import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";


const Checkbox = React.forwardRef<
   React.ElementRef<typeof CheckboxPrimitive.Root>,
   React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
   <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
         "peer h-8 w-8 shrink-0 rounded-full bg-gray-20 text-gray-50 shadow-sm ring-1 ring-primary-500 ring-offset-gray-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 data-[state=checked]:ring-0",
         className,
      )}
      {...props}
   >
      <CheckboxPrimitive.Indicator
         className={cn("flex items-center justify-center text-current")}
      >
         <Check className="h-8 w-8 scale-75" />
      </CheckboxPrimitive.Indicator>
   </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
