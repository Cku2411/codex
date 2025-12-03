"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

type Props = {};

const UserStatus = (props: Props) => {
  const { user } = useUser();
  return (
    <div className="p-4 border-4 rounded-2xl">
      <div className="flex gap-2 items-center">
        <Image src={"/user3.webp"} width={100} height={100} alt="user2" />
        <h2 className="text-2xl">{user?.primaryEmailAddress?.emailAddress}</h2>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex gap-2 items-center  ">
          <Image src={"/star2.gif"} alt="star" width={35} height={35} />
          <div className="">
            <h2 className="text-2xl">20</h2>
            <h2 className="text-gray-500">Total Rewards</h2>
          </div>
        </div>

        <div className="flex gap-2 items-center  ">
          <Image src={"/badge2.png"} alt="badge" width={35} height={35} />
          <div className="">
            <h2 className="text-2xl">3</h2>
            <h2 className="text-gray-500">Badge</h2>
          </div>
        </div>

        <div className="flex gap-2 items-center  ">
          <Image src={"/fire.png"} alt="badge" width={35} height={35} />
          <div className="">
            <h2 className="text-2xl">7</h2>
            <h2 className="text-gray-500">Daily Streak</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
