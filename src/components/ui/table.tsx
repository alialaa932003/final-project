import * as React from "react";

import { cn } from "@/lib/utils";
import { SortAscIcon } from "lucide-react";
import { BiSort } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";

const Table = React.forwardRef<
   HTMLTableElement,
   React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
   <div className="relative flex w-full flex-1 animate-fade-in overflow-auto rounded-xl border border-gray-50 p-2.5">
      <table
         ref={ref}
         className={cn(
            "h-fit w-full caption-bottom border border-gray-50 text-sm",
            className,
         )}
         {...props}
      />
   </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
   HTMLTableSectionElement,
   React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
   <thead ref={ref} className={cn("", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
   HTMLTableSectionElement,
   React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
   <tbody
      ref={ref}
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
   />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
   HTMLTableSectionElement,
   React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
   <tfoot
      ref={ref}
      className={cn(
         "border-t bg-neutral-100/50 font-medium dark:bg-neutral-800/50 [&>tr]:last:border-b-0",
         className,
      )}
      {...props}
   />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
   HTMLTableRowElement,
   React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
   <tr
      ref={ref}
      className={cn(
         "border-primary-500 bg-gray-0 transition-colors even:bg-[#eff6ff] data-[state=selected]:bg-primary-500/5 dark:even:bg-[#5F666A] dark:hover:bg-neutral-800/50 dark:data-[state=selected]:bg-neutral-800",
         className,
      )}
      {...props}
   />
));
TableRow.displayName = "TableRow";

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
   sortBy?: string;
}
const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
   ({ className, sortBy, ...props }, ref) => {
      const [searchParams, setSearchParams] = useSearchParams();
      return (
         <th
            ref={ref}
            className={cn(
               `h-14 border border-primary-100 bg-primary-50 px-4 text-start align-middle font-medium text-[#245469] dark:border-gray-300 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] ${sortBy ? "cursor-pointer" : ""}`,
               className,
            )}
            onClick={() => {
               if (sortBy) {
                  searchParams.set("sortBy", sortBy);
                  if (searchParams.get("sortOrder") === "asc") {
                     searchParams.set("sortOrder", "desc");
                  } else if (searchParams.get("sortOrder") === "desc") {
                     searchParams.delete("sortOrder");
                     searchParams.delete("sortBy");
                  } else {
                     searchParams.set("sortOrder", "asc");
                  }
                  setSearchParams(searchParams);
               }
            }}
            {...props}
         >
            <div className="flex items-center gap-2.5">
               {props.children}
               {sortBy && <BiSort className="text-xl" />}
            </div>
         </th>
      );
   },
);
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
   HTMLTableCellElement,
   React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
   <td
      ref={ref}
      className={cn(
         "border border-gray-50 p-4 align-top first:border-s-0 last:border-e-0 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
         className,
      )}
      {...props}
   />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
   HTMLTableCaptionElement,
   React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
   <caption
      ref={ref}
      className={cn(
         "mt-4 text-base text-neutral-500 dark:text-neutral-400",
         className,
      )}
      {...props}
   />
));
TableCaption.displayName = "TableCaption";

export {
   Table,
   TableHeader,
   TableBody,
   TableFooter,
   TableHead,
   TableRow,
   TableCell,
   TableCaption,
};
