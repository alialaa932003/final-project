import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
   "inline-flex items-center rounded-full border border-neutral-200 px-4 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300",
   {
      variants: {
         variant: {
            default:
               "border-transparent bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/80 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80",
            secondary:
               "border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
            destructive:
               "border-transparent bg-red-500 text-neutral-50 shadow hover:bg-red-500/80 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/80",
            outline: "text-neutral-950 dark:text-neutral-50",
         },
         colorTheme: {
            green: "bg-green-600/10 text-green-600 hover:bg-green-600/20",
            yellow: "bg-yellow-600/10 text-yellow-600 hover:bg-yellow-600/20",
            sky: "bg-sky-500/10 text-sky-500 hover:bg-sky-500/20",
            purple: "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20",
         },
      },
      defaultVariants: {
         variant: "default",
      },
   },
);

export interface BadgeProps
   extends React.HTMLAttributes<HTMLDivElement>,
      VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, colorTheme, ...props }: BadgeProps) {
   return (
      <div
         className={cn(badgeVariants({ variant, colorTheme }), className)}
         {...props}
      />
   );
}

export { Badge, badgeVariants };
