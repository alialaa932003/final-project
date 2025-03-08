import DefaultUserImage from "@/../public/images/default-user.png";

type AvatarProps = {
   src?: string;
   alt?: string;
   size?: number;
   className?: string;
};

function Avatar({ src, alt, size = 80, className }: AvatarProps) {
   const preparedSize = src ? size : size * 0.8;

   return (
      <div
         className="grid aspect-square place-content-center overflow-hidden rounded-full bg-gray-100"
         style={{
            width: size + "px",
            height: size + "px",
         }}
      >
         <img
            src={src || DefaultUserImage}
            alt={alt}
            className="rounded-full object-cover"
            width={preparedSize}
            height={preparedSize}
            style={{
               width: preparedSize + "px",
               height: preparedSize + "px",
            }}
         />
      </div>
   );
}

export default Avatar;
