import clsx from "clsx";
import { useState } from "react";
import { IFUserData } from "~/context/AppTypes";
import { Button } from "../Button";
import { Dialog } from "../Dialog";

interface IFProps {
  isOpen: boolean;
  onSave: (name: string, description: string) => void;
  defaultValues: Pick<IFUserData, "name" | "description">;
  setIsOpen: (isOpen: boolean) => void;
}

export const SetDetailsDialog = ({
  isOpen,
  defaultValues,
  setIsOpen,
  onSave,
}: IFProps) => {
  const [name, setName] = useState(defaultValues.name);
  const [description, setDescription] = useState(defaultValues.description);

  return (
    <Dialog
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Update Details"
      description="Set a display name and description for your profile."
    >
      <form className="mt-5 space-y-2">
        <fieldset>
          <label htmlFor="name" className="text-xs font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jhon Doe"
            className={clsx(
              "mt-1 block w-full rounded-md",
              "text-sm text-gray-700 placeholder:text-gray-500",
              "border border-gray-400 focus-visible:border-transparent",
              "focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75"
            )}
            defaultValue={defaultValues.name}
            onBlur={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label
            htmlFor="description"
            className="text-xs font-medium text-gray-700"
          >
            Description
          </label>
          <input
            id="description"
            type="text"
            placeholder="Software Engineer"
            className={clsx(
              "mt-1 block w-full rounded-md",
              "text-sm text-gray-700 placeholder:text-gray-500",
              "border border-gray-400 focus-visible:border-transparent",
              "focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75"
            )}
            defaultValue={defaultValues.description}
            onBlur={(e) => setDescription(e.target.value)}
          />
        </fieldset>
      </form>
      <div className="mt-10 flex justify-end gap-2">
        <Button
          variant="primary"
          label="Save"
          onClick={() => {
            onSave(name, description);
            setIsOpen(false);
          }}
        />
        <Button
          variant="muted"
          label="Cancel"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </Dialog>
  );
};
