interface CountCardProps {
   title: string;
   count: number | string;
   icon: React.ReactElement;
   bgColor: string;
   textColor: string;
}

const CountCard: React.FC<CountCardProps> = ({
   title,
   count,
   icon,
   bgColor,
   textColor,
}) => {
   return (
      <div
         className={`flex h-48 w-full flex-col items-center justify-between rounded-xl p-6 shadow-lg ${bgColor} ${textColor} transform transition-transform duration-300 ease-in-out hover:scale-105`}
      >
         <div className="mb-3 text-4xl">{icon}</div>
         <h3 className="mb-1 text-xl font-semibold">{title}</h3>
         <p className="text-3xl font-bold">{count}</p>
      </div>
   );
};
export default CountCard;
