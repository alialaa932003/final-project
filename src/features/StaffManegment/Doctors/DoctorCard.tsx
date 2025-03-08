import Profile from "@/assets/icons/Profile";
import Avatar from "@/components/Avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { BsThreeDots } from "react-icons/bs";

type DoctorCardProps = {
   data: {
      id: number;
      name: string;
      position: {
         name: string;
         color: "green" | "yellow" | "sky" | "purple";
      };
      avatar: string;
   };
};

function DoctorCard({ data }: DoctorCardProps) {
   const { t } = useTranslation("global");

   return (
      <div className="flex flex-col items-center gap-5 rounded-2xl px-4 py-[30px] shadow-[0px_0px_20px_0px_rgba(12,21,38,0.1)]">
         <div className="flex w-full justify-end">
            <Button variant="ghost" size="sm">
               <BsThreeDots className="size-7 text-secondary-500" />
            </Button>
         </div>

         <figure className="flex flex-col items-center">
            <div className="mb-4">
               <Avatar src={data.avatar} alt={data.name} size={80} />
            </div>
            <h4 className="mb-2 text-xl font-semibold">{data.name}</h4>
            <Badge colorTheme={data.position.color}>{data.position.name}</Badge>
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

export default DoctorCard;
