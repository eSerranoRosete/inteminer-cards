import type { IFMenuItem } from "../context/AppTypes";
import { MenuItem } from "./MenuItem";

interface IFProps {
  menuItems: IFMenuItem[];
  currentActive: string;
  onSelect: (alias: string) => void;
}

export const Sidebar = ({ menuItems, currentActive, onSelect }: IFProps) => {
  return (
    <div className="min-h-screen w-full max-w-xs bg-stone-100 p-4">
      {menuItems.map((item, i) => (
        <MenuItem
          key={i}
          label={item.name}
          onClick={() => onSelect(item.alias)}
          active={currentActive === item.alias}
          icon={item.icon}
        />
      ))}
    </div>
  );
};
