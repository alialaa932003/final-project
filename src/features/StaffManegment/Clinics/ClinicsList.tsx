import TableWrapper from "@/components/TableWrapper";
import {
   Table,
   TableBody,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import WithLoadingAndError from "@/components/WithLoadingAndError";
import ClinicRow from "./ClinicRow";
import { useGetAllClinics } from "./hooks/useGetAllClinics";

const ClinicsList = () => {
   const { data, isPending } = useGetAllClinics();
   const clinics = data?.data.items || [];
   const totalPages = data?.data?.meta.last_page;
   return (
      <WithLoadingAndError
         isLoading={isPending}
         errorText={"No clinics found"}
         hasError={clinics.length === 0}
      >
         <TableWrapper totalPages={totalPages}>
            <Table className="min-w-[70rem]">
               <TableHeader>
                  <TableRow>
                     <TableHead className="w-[50px]">#</TableHead>
                     <TableHead>Name</TableHead>
                     <TableHead className="w-[350px]">Description</TableHead>
                     <TableHead>Doctors Count</TableHead>
                     <TableHead>Is Active</TableHead>
                     <TableHead className="w-[55px]"> Actions</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {clinics.map((clinic, index) => (
                     <ClinicRow
                        clinic={clinic}
                        key={clinic.id}
                        rowNumber={index + 1}
                     />
                  ))}
               </TableBody>
            </Table>
         </TableWrapper>
      </WithLoadingAndError>
   );
};

export default ClinicsList;
