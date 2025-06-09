import InfoItem from "@/components/InfoItem";
import { Separator } from "@/components/ui/separator";
import dayjs from "dayjs";

type PatientInfoCardProps = {
   patient?: Patient;
};

function PatientInfoCard({ patient }: PatientInfoCardProps) {
   return (
      <div className="flex justify-between gap-4 rounded-2xl bg-gray-0 px-12 py-8 shadow-md max-sm:flex-col sm:flex-row sm:px-20">
         <div className="space-y-4">
            <InfoItem
               title="name:"
               titleClassName="text-gray-500"
               //    containerClassName="flex-row items-center gap-2"
               value={`${patient?.firstName} ${patient?.lastName}`}
            />
            <Separator className="sm:hidden" />
            <InfoItem
               title="National ID:"
               titleClassName="text-gray-500"
               //    containerClassName="flex-row items-center gap-2"
               value={patient?.nationalID.toString() || "N/A"}
            />
            <Separator className="sm:hidden" />
            <InfoItem
               title="Gender:"
               titleClassName="text-gray-500"
               //    containerClassName="flex-row items-center gap-2"
               value={patient?.gender || "N/A"}
            />
         </div>

         <Separator
            orientation="vertical"
            className="h-48 self-center max-sm:hidden"
         />

         <div className="space-y-4">
            <InfoItem
               title="Email:"
               titleClassName="text-gray-500"
               //    containerClassName="flex-row items-center gap-2"
               value={patient?.email || "N/A"}
            />
            <Separator className="sm:hidden" />
            <InfoItem
               title="Phone:"
               titleClassName="text-gray-500"
               //    containerClassName="flex-row items-center gap-2"
               value={patient?.phoneNumber || "N/A"}
            />
            <Separator className="sm:hidden" />
            <InfoItem
               title="Address:"
               titleClassName="text-gray-500"
               //    containerClassName="flex-row items-center gap-2"
               value={patient?.address || "N/A"}
            />
         </div>

         <Separator
            orientation="vertical"
            className="h-48 self-center max-sm:hidden"
         />

         <div className="space-y-4">
            <InfoItem
               title="Blood Type:"
               titleClassName="text-gray-500"
               //    containerClassName="flex-row items-center gap-2"
               value={patient?.bloodType || "N/A"}
            />
            <Separator className="sm:hidden" />
            <InfoItem
               title="Marital Status:"
               titleClassName="text-gray-500"
               //    containerClassName="flex-row items-center gap-2"
               value={patient?.maritalStatus || "N/A"}
            />
            <Separator className="sm:hidden" />
            <InfoItem
               title="Date Of Birth:"
               titleClassName="text-gray-500"
               //    containerClassName="flex-row items-center gap-2"
               value={
                  patient?.dateOfBirth
                     ? `${dayjs(patient.dateOfBirth).format("YYYY-MM-DD")} (age: ${patient.age})`
                     : "N/A"
               }
            />
         </div>
      </div>
   );
}

export default PatientInfoCard;
