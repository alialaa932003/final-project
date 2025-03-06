import React from "react";
import { components, MenuListProps as RSMenuListProps } from "react-select";
import { FixedSizeList as List } from "react-window";

type MenuListProps = RSMenuListProps<any, boolean>;

const VirtualizedMenuList = ({
   children,
   maxHeight,
   ...props
}: MenuListProps) => {
   // For small lists, use standard rendering
   if (!Array.isArray(children) || children.length <= 10) {
      return (
         <components.MenuList maxHeight={maxHeight} {...props}>
            {children}
         </components.MenuList>
      );
   }

   return (
      <List
         width="100%"
         height={Math.min(maxHeight, 35 * children.length)}
         itemCount={children.length}
         itemSize={35}
         overscanCount={10}
      >
         {({ index, style }) => (
            <div style={style} className="select-option-container">
               {children[index]}
            </div>
         )}
      </List>
   );
};

export default VirtualizedMenuList;
