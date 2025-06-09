import React from "react";
import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import MainHeader from "@/components/MainHeader";
import SearchInput from "@/features/common/SearchInput";
import { useNavigate } from "react-router-dom";

const BookingsListHeader = () => {
   const navigate = useNavigate();
   return (
      <>
         <MainHeader>
            <MainHeader.TopSection>
               <MainHeader.Title
                  title="Bookings List"
                  description="Here You will find the list of bookings"
               />
               <MainHeader.Actions>
                  <Button
                     type="button"
                     onClick={() => {
                        navigate("/add-booking");
                     }}
                     className="flex items-center gap-2"
                  >
                     <FiPlus className="text-2xl" />
                     Add Booking
                  </Button>
               </MainHeader.Actions>
            </MainHeader.TopSection>

            <MainHeader.Filters>
               <SearchInput searchKey="search" />
            </MainHeader.Filters>
         </MainHeader>
      </>
   );
};

export default BookingsListHeader;
