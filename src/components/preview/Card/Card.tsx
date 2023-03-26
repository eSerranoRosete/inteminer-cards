import type { IFUserData } from "~/context/AppTypes";
import { QrCodeIcon } from "@heroicons/react/24/solid";

import { SocialArray } from "./SocialArray";
import { ShareOverlay } from "./ShareOverlay";
import { Slider } from "./Slider";
import { EditButton } from "~/components/EditButton";

export const Card = (user: IFUserData) => {
  return (
    <div className="relative m-auto max-w-md overflow-hidden rounded-b-3xl bg-white shadow-xl">
      <div
        id="banner"
        className="group/banner relative flex h-72 w-full items-end justify-center rounded-b-3xl bg-white shadow-lg"
      >
        <div className="absolute right-0 bottom-0 hidden group-hover/banner:block">
          <EditButton />
        </div>
        <img
          src={user.banner || "/banner.png"}
          alt="Cover Image"
          className="h-full w-full rounded-b-3xl object-cover object-center"
        />
      </div>

      <div className="group/avatar relative">
        <div className="relative m-auto h-32 w-32 -translate-y-1/2 rounded-xl">
          <img
            src={user.avatar || "/avatar.jpeg"}
            alt="Profile Image"
            className="object-cover object-center"
          />
          <div className="absolute right-0 bottom-0 hidden group-hover/avatar:block">
            <EditButton />
          </div>
        </div>
      </div>

      <div className="relative h-full -translate-y-1/2 text-center">
        {/* <QrCodeIcon className="absolute right-4 top-4 w-8 cursor-pointer shadow-xl" /> */}
        <div className="m-auto mb-5 w-5/6 p-3 text-slate-800">
          <h4 className="mb-2 text-2xl font-bold">{user.name}</h4>
          <p className="m-auto mb-2 max-w-xs text-sm">{user.description}</p>
          <div className="mb-4 flex items-center justify-center text-sm font-bold">
            <span>{user.organization}</span>
          </div>
        </div>
      </div>

      {/* <Slider data={user.slider.items} sliderTitle={user.slider.title} /> */}

      {/* <SocialArray social={user.social} /> */}

      <ShareOverlay
        name={user.name}
        description={user.description}
        avatar={user.avatar}
      />
    </div>
  );
};
