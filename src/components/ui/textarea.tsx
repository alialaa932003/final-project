import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    "bg-gray-base/60 z-0 flex h-full w-full rounded-[1.6rem] px-6 py-8 text-lg font-light text-gray-500 ring-1 ring-gray-100 file:border-0 file:bg-transparent file:font-medium placeholder:text-gray-100 focus-visible:outline-none focus-visible:ring-primary-600 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[#5F666A] dark:placeholder:text-[#B5B8BA]",
                    className,
                )}
                ref={ref}
                {...props}
            />
        );
    },
);
Textarea.displayName = "Textarea";

export { Textarea };
