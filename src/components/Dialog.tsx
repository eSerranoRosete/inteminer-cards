import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import { Fragment } from "react";

interface DialogProps {
  isOpen: boolean;
  title?: string;
  description?: string;
  children: React.ReactNode;
  setIsOpen: (isOpen: boolean) => void;
}

const Dialog = ({
  isOpen,
  title,
  description,
  children,
  setIsOpen,
}: DialogProps) => {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPrimitive.Overlay
              forceMount
              className="fixed inset-0 z-20 bg-black/50"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPrimitive.Content
              forceMount
              className={clsx(
                "fixed z-50",
                "w-[95vw] max-w-md rounded-lg p-4 md:w-full",
                "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                "bg-white",
                "focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75"
              )}
            >
              <DialogPrimitive.Title className="text-sm font-medium text-gray-900 ">
                {title}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="mt-2 text-sm font-normal text-gray-700">
                {description}
              </DialogPrimitive.Description>
              {children}

              <DialogPrimitive.Close
                className={clsx(
                  "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
                  "focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75"
                )}
              >
                <Cross1Icon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
              </DialogPrimitive.Close>
            </DialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export { Dialog };
