import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Navbar from "./navbar";
import { ThemeToggle } from "./toggleTheme";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="p-4 max-w-7xl flex justify-between items-center w-full">
      <div className="flex items-center gap-2">
        <Image src={"/logo.png"} width={40} height={40} alt="logo" />
        <h2 className="text-5xl font-bold">CodeBox</h2>
      </div>
      {/* Navbar */}
      <Navbar />

      {/* signUp butotn */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button variant={"pixel"}>Signup</Button>
      </div>
    </div>
  );
};

export default Header;
