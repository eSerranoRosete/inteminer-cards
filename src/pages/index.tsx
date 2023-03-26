import { type NextPage } from "next";
import { useState } from "react";

import { sidebarMenuItems } from "~/lib/AppConfig";

import { Sidebar } from "~/components/Sidebar";
import { EditButton } from "~/components/EditButton";
import { SetBannerDialog } from "~/components/SetBannerDialog/SetBannerDialog";
import { SetDetailsDialog } from "~/components/SetDetailsDialog/SetDetailsDialog";
import { useAppContext } from "~/context/AppContext";
import { Card } from "~/components/preview/Card/Card";

const Home: NextPage = () => {
  const [current, setCurrent] = useState("");

  const { state, actions } = useAppContext({
    name: "John Doe",
    description: "I am a developer",
  });

  console.log("🧠", state);

  const [bannerDialog, setBannerDialog] = useState(false);
  const [detailsDialog, setDetailsDialog] = useState(false);

  return (
    <>
      <div className="flex min-h-screen w-full">
        <Sidebar
          currentActive={current}
          menuItems={sidebarMenuItems}
          onSelect={setCurrent}
        />
        <div className="min-h-screen w-full">
          {/* <div className="m-auto h-full w-full max-w-xl border border-stone-300">
            <div className="group/banner relative h-80 w-full overflow-clip rounded-b-3xl bg-stone-200">
              {state.banner && (
                <img
                  src={state.banner}
                  className="h-full w-full object-cover object-center"
                />
              )}
              <div className="absolute right-0 top-0 hidden group-hover/banner:block">
                <EditButton onClick={() => setBannerDialog(true)} />
              </div>
            </div>
            <div className="z-40 mt-24 text-center">
              <div className="group/details relative m-auto w-fit rounded-2xl border border-transparent p-8 hover:border-dotted hover:border-stone-400">
                <div className="absolute right-0 top-0 hidden group-hover/details:block">
                  <EditButton onClick={() => setDetailsDialog(true)} />
                </div>
                <h1 className="text-2xl font-semibold">{state.name}</h1>
                <h2>{state.description}</h2>
              </div>
            </div>
          </div> */}
          <Card {...state} />
        </div>
      </div>

      <SetBannerDialog
        isOpen={bannerDialog}
        onSave={(banner) => actions.setBanner(banner)}
        setIsOpen={setBannerDialog}
      />

      <SetDetailsDialog
        defaultValues={{
          name: state.name,
          description: state.description,
        }}
        isOpen={detailsDialog}
        onSave={(name, description) => {
          actions.setName(name);
          actions.setDescription(description);
        }}
        setIsOpen={setDetailsDialog}
      />
    </>
  );
};

export default Home;
