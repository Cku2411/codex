import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <Image
        src={"/hero2.gif"}
        alt="hero"
        width={1000}
        height={1000}
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute w-full mt-20 flex flex-col items-center">
        <h2 className="font-bold text-7xl">Start Your</h2>
        <h2
          className="text-9xl font-bold text-yellow-400"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
          }}
        >
          Coding Adventure
        </h2>
        <h2 className="mt-5 font-bold text-3xl">
          Beginer friendly coding courses and projects
        </h2>
        <Link href={"/sign-in"}>
          <Button className="text-3xl p-6 mt-7" variant={"pixel"}>
            GET STARTED
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
