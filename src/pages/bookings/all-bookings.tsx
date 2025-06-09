import PageLayout from "@/components/layouts/PageLayout";
import BookingsList from "@/features/Bookings/AllBookings/BookingsList";
import BookingsListHeader from "@/features/Bookings/AllBookings/BookingsListHeader";
import React from "react";

const AllBookings = () => {
   return (
      <PageLayout pageName="Bookings" className="animate-fade-in space-y-6">
         <BookingsListHeader />
         <BookingsList />
      </PageLayout>
   );
};

export default AllBookings;
