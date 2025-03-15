import TableWrapper from "@/components/TableWrapper";
import {
   Table,
   TableBody,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import WithLoadingAndError from "@/components/WithLoadingAndError";
import AppointmentRow from "./AppointmentRow";

const AppointmentsList = () => {
   const isPending = false;
   return (
      <WithLoadingAndError
         isLoading={isPending}
         errorText={"No appointments found"}
         hasError={false}
      >
         <TableWrapper totalPages={5}>
            <Table className="min-w-[90rem]">
               <TableHeader>
                  <TableRow>
                     <TableHead className="w-[50px]">#</TableHead>
                     <TableHead>Column1</TableHead>
                     <TableHead>Column2</TableHead>
                     <TableHead>Column3</TableHead>
                     <TableHead>Column4</TableHead>
                     <TableHead>Column5</TableHead>
                     <TableHead className="w-[55px]"> Actions</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {Array.from({ length: 7 }).map((_, index) => (
                     <AppointmentRow rowNumber={index + 1} />
                  ))}
               </TableBody>
            </Table>
         </TableWrapper>
      </WithLoadingAndError>
   );
};

export default AppointmentsList;
