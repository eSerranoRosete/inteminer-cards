import clsx from "clsx";

interface IFProps {
  label: string;
  variant?: "primary" | "secondary" | "muted";
  onClick?: () => void;
}

export const Button = ({ label, variant, onClick }: IFProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
        variant === "primary" && "bg-primary text-white hover:saturate-200",
        variant === "muted" && "bg-stone-200 text-stone-700 hover:saturate-200",
        "border border-transparent",
        "focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75"
      )}
    >
      {label}
    </button>
  );
};
