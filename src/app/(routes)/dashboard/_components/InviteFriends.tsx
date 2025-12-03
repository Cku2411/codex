import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

type Props = {};

const InviteFriends = (props: Props) => {
  return (
    <div className="flex flex-col items-center mt-8 p-4 rounded-2xl border bg-zinc-900">
      <Image src={"/mail.png"} width={80} height={80} alt="mail" />
      <h2 className="text-3xl">Invite Friends</h2>
      <p className="text-xl">
        Having Fun? Share the love with a friend ! Enter an email we will send
        them a personal invite
      </p>
      <div className="flex items-center gap-2 mt-5 ">
        <Input placeholder="Enter invitee Email" className="min-w-sm" />
        <Button variant={"pixel"} size={"lg"}>
          Invite
        </Button>
      </div>
    </div>
  );
};

export default InviteFriends;
