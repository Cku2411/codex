import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const UpgradeToPro = (props: Props) => {
  return (
    <div className="flex items-center flex-col p-5 mt-8 border-4 rounded-2xl">
      <Image src={"/logo.png"} width={70} height={70} alt="logo" />
      <h2 className="text-3xl">Upgrade To Pro</h2>
      <p className="text-xl text-gray-500 text-center">
        Join Promembership and Get All course access
      </p>
      <Link href={"/pricing"} className="w-full">
        <Button variant={"pixel"} size={"lg"} className="w-full text-xl">
          Upgrade
        </Button>
      </Link>
    </div>
  );
};

export default UpgradeToPro;
