import PageLayout from "@/components/layouts/PageLayout";
import DoctorsList from "@/features/StaffManegment/Doctors/DoctorsList";
import Header from "@/features/StaffManegment/Doctors/Header";

function Doctors() {
   return (
      <PageLayout pageName="Doctors" className="flex flex-col gap-7">
         <Header />
         <DoctorsList />
      </PageLayout>
   );
}

export default Doctors;
