import { Pencil2Icon } from "@radix-ui/react-icons";

interface IFProps {
  onClick?: () => void;
}
export const EditButton = ({ onClick }: IFProps) => {
  return (
    <button type="button" onClick={onClick} className="rounded-lg bg-white p-2">
      <Pencil2Icon className="h-4 w-4" />
    </button>
  );
};
