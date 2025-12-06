import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const CommunityHelpSection = (props: Props) => {
  return (
    <div className="mt-7 p-4 border-3 flex flex-col gap-2 items-center rounded-xl">
      <h2 className="text-3xl">Need Community Help?</h2>
      <p className="text-2xl">Ask question in our community</p>
      <Button variant={"pixel"} size={"lg"} className="text-2xl w-full">
        Go to Community
      </Button>
    </div>
  );
};

export default CommunityHelpSection;
