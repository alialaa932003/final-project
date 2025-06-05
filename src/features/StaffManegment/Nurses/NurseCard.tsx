import UserAvatar1 from "@/../public/images/user.jpg";
import Profile from "@/assets/icons/Profile";
import Avatar from "@/components/Avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import ActionsMenu from "./ActionsMenu";

type DoctorCardProps = {
   data: Nurse;
};

function NurseCard({ data }: DoctorCardProps) {
   const { t } = useTranslation("global");
   const fullName = `${data.first_name} ${data.last_name}`;

   return (
      <div className="flex flex-col items-center gap-5 rounded-2xl px-4 py-[30px] shadow-[0px_0px_20px_0px_rgba(12,21,38,0.1)]">
         <div className="flex w-full justify-end">
            <ActionsMenu id={data.id} />
         </div>

         <figure className="flex flex-col items-center">
            <div className="mb-4">
               <Avatar
                  // avatar={data.profile_picture}
                  avatar={UserAvatar1}
                  name={fullName}
                  className="size-20"
                  fallbackClassName="text-2xl"
               />
            </div>
            <h4 className="mb-2 text-xl font-semibold">{fullName}</h4>
            <Badge>{data.clinic.name}</Badge>
         </figure>

         <div className="flex flex-wrap justify-center gap-4">
            <Button className="flex items-center gap-2 [&_svg]:hover:fill-primary-500">
               <Profile />
               {t("profile")}
            </Button>
            <Button variant="outline" className="flex items-center gap-4">
               <Plus /> {t("appointment")}
            </Button>
         </div>
      </div>
   );
}

export default NurseCard;
