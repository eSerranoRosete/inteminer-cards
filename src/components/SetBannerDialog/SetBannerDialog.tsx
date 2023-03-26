import { useState } from "react";
import { Button } from "../Button";
import { Dialog } from "../Dialog";

interface IFProps {
  isOpen: boolean;
  onSave: (banner: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

export const SetBannerDialog = ({ isOpen, setIsOpen, onSave }: IFProps) => {
  const [bannerPreview, setBannerPreview] = useState<string>();

  return (
    <Dialog
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Edit Banner"
      description="Upload an image as your profile banner"
    >
      {bannerPreview && (
        <div className="mt-5 h-52 w-full overflow-hidden">
          <img
            src={bannerPreview}
            className="h-full w-full object-cover object-center"
          />
        </div>
      )}
      <input
        type="file"
        name="banner-input"
        id="banner-input"
        className="mt-5 rounded-md border border-stone-200 text-sm file:mr-3 file:border-none file:bg-none file:py-2 file:px-3 file:hover:bg-stone-200"
        onChange={(e) =>
          e.target.files &&
          setBannerPreview(URL.createObjectURL(e.target.files[0]!))
        }
      />
      {bannerPreview && (
        <div className="mt-10 flex justify-end gap-2">
          <Button
            variant="primary"
            label="Save"
            onClick={() => {
              onSave(bannerPreview);
              setIsOpen(false);
            }}
          />
          <Button
            variant="muted"
            label="Cancel"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </Dialog>
  );
};
