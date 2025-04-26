import TableWrapper from "@/components/TableWrapper";
import {
   Table,
   TableBody,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import WithLoadingAndError from "@/components/WithLoadingAndError";
import SpecializationRow from "./SpecializationRow";
import { useGetAllSpecializations } from "./hooks/useGetAllSpecializations";

const SpecializationsList = () => {
   const { data, isPending } = useGetAllSpecializations();
   const specializations = data?.data.items || [];
   const totalPages = data?.data?.meta.last_page;
   return (
      <WithLoadingAndError
         isLoading={isPending}
         errorText={"No specializations found"}
         hasError={specializations.length === 0}
      >
         <TableWrapper totalPages={totalPages}>
            <Table className="min-w-[70rem]">
               <TableHeader>
                  <TableRow>
                     <TableHead className="w-[50px]">#</TableHead>
                     <TableHead>Name</TableHead>
                     <TableHead className="w-[350px]">Description</TableHead>
                     <TableHead>Color</TableHead>
                     <TableHead>Created At</TableHead>
                     <TableHead className="w-[55px]">Actions</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {specializations.map((specialization, index) => (
                     <SpecializationRow
                        specialization={specialization}
                        key={specialization.id}
                        rowNumber={index + 1}
                     />
                  ))}
               </TableBody>
            </Table>
         </TableWrapper>
      </WithLoadingAndError>
   );
};

export default SpecializationsList;
