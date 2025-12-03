"use client";
import React from "react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

type Props = {};

const WelcomeBananer = (props: Props) => {
  const { user } = useUser();
  return (
    <div className="flex gap-3 items-center">
      <Image src={"/welcome.webp"} alt="robo" width={120} height={120} />
      <h2 className="text-2xl p-2 border bg-zinc-800 rounded-lg rounded-bl-none">
        Welcome Back <span className="text-yellow-400">{user?.fullName}</span>,
        Start lerning something new !
      </h2>
    </div>
  );
};

export default WelcomeBananer;
