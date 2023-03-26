import { type NextPage } from "next";
import { useState } from "react";
import { Sidebar } from "~/components/Sidebar";

import { sidebarMenuItems } from "~/lib/AppConfig";

import { api } from "~/utils/api";
import { EditButton } from "~/components/EditButton";
import { Dialog } from "~/components/Dialog";
import { Button } from "~/components/Button";
import { IFUserDetails } from "~/lib/AppTypes";
import { SetBannerDialog } from "~/components/SetBannerDialog/SetBannerDialog";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [current, setCurrent] = useState("");
  const [userDetails, setUserDetails] = useState<IFUserDetails>({
    name: "Eduardo Serrano",
    description: "Software Engineer",
  });
  const [persistentBanner, setPersistentBanner] = useState<string>();

  return (
    <>
      <div className="flex min-h-screen w-full">
        <Sidebar
          currentActive={current}
          menuItems={sidebarMenuItems}
          onSelect={setCurrent}
        />
        <div className="min-h-screen w-full">
          <div className="m-auto h-full w-full max-w-xl border border-stone-300">
            <div className="group/banner relative h-80 w-full overflow-clip rounded-b-3xl bg-stone-200">
              {persistentBanner && (
                <img
                  src={persistentBanner}
                  className="h-full w-full object-cover object-center"
                />
              )}
              <div className="absolute right-0 top-0 hidden group-hover/banner:block">
                <EditButton onClick={() => setDialogOpen(true)} />
              </div>
            </div>
            <div className="z-40 mt-24 text-center">
              <div className="group/details relative m-auto w-fit rounded-2xl border border-transparent p-8 hover:border-dotted hover:border-stone-400">
                <div className="absolute right-0 top-0 hidden group-hover/details:block">
                  <EditButton onClick={() => setDialogOpen(true)} />
                </div>
                <h1 className="text-2xl font-semibold">{userDetails.name}</h1>
                <h2>{userDetails.description}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SetBannerDialog
        isOpen={dialogOpen}
        onSave={(banner) => setPersistentBanner(banner)}
        setIsOpen={setDialogOpen}
      />
    </>
  );
};

export default Home;
