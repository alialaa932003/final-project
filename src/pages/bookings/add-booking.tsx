import PageLayout from "@/components/layouts/PageLayout";
import AddBookingForm from "@/features/Bookings/AddBooking/AddBookingForm";

const AddBooking = () => {
   return (
      <PageLayout pageName="Add Booking" className="animate-fade-in space-y-6">
         <AddBookingForm />
      </PageLayout>
   );
};

export default AddBooking;
