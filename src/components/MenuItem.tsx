import type { ForwardRefExoticComponent, SVGProps } from "react";
import clsx from "clsx";

interface IFProps {
  icon?: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export const MenuItem = ({ icon: Icon, label, active, onClick }: IFProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex w-full cursor-pointer items-center gap-3 rounded-md py-2 px-5 text-sm  transition-colors duration-100",
        active
          ? "bg-primary text-white hover:bg-primary"
          : "text-black hover:bg-black/10"
      )}
    >
      {Icon && <Icon className="w-5" />}
      <span>{label}</span>
    </button>
  );
};
