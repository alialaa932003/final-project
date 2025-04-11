import {
   Avatar as AvatarContainer,
   AvatarFallback,
   AvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type Props = {
   avatar: string;
   name: string;
   className?: string;
   fallbackClassName?: string;
};

function Avatar({ avatar, name, className, fallbackClassName }: Props) {
   const fallback = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
   const avatarName = fallback.length > 2 ? fallback.slice(0, 2) : fallback;

   return (
      <AvatarContainer className={cn("h-8 w-8 rounded-full", className)}>
         <AvatarImage src={avatar} alt={name} />
         <AvatarFallback className={fallbackClassName}>
            {avatarName}
         </AvatarFallback>
      </AvatarContainer>
   );
}

export default Avatar;
