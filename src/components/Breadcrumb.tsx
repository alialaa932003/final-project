import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
   links: { name: string; link: string }[];
}
const Breadcrumb = ({ links }: BreadcrumbProps) => {
   return (
      <nav className="flex items-center gap-4 text-sm text-gray-300">
         {links.map((link, index) => (
            <>
               <div>
                  {link.link ? (
                     <Link to={link.link}>{link.name}</Link>
                  ) : (
                     <span>{link.name}</span>
                  )}
               </div>
               {index < links.length - 1 && <span> / </span>}
            </>
         ))}
      </nav>
   );
};

export default Breadcrumb;
