import TableWrapper from "@/components/TableWrapper";
import {
   Table,
   TableBody,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import WithLoadingAndError from "@/components/WithLoadingAndError";
import BookingRow from "./BookingRow";
import { useGetAllBookings } from "./hooks/useGetAllBookings";

const BookingsList = () => {
   const { data, isPending } = useGetAllBookings();
   const bookings = data?.data.items || [];
   const totalPages = data?.data?.meta.last_page;
   return (
      <WithLoadingAndError
         isLoading={isPending}
         errorText={"No bookings found"}
         hasError={bookings.length === 0}
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
                  {bookings.map((booking, index) => (
                     <BookingRow
                        booking={booking}
                        key={booking.id}
                        rowNumber={index + 1}
                     />
                  ))}
               </TableBody>
            </Table>
         </TableWrapper>
      </WithLoadingAndError>
   );
};

export default BookingsList;
