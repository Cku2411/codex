import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="p-4 max-w-7xl">
      <div className="flex items-center gap-2">
        <Image src={"/logo.png"} width={40} height={40} alt="logo" />
        <h2 className="text-4xl font-bold">CodeBox</h2>
      </div>
      {/* Navbar */}

      {/* signUp butotn */}
      <Button className="bg-yellow-400 text-black border-2 border-black shadow-[0px_0px_0_0_#c69405, 2px_2px_0_0_#c69405]">
        Signup
      </Button>
    </div>
  );
};

export default Header;
