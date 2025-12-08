"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((pre) => pre + 1);
    }, 50);

    // cleanup khi component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-8">
      <div className="flex items-center justify-center w-full gap-5">
        <Button variant={"pixel"} onClick={() => setCount((pre) => pre + 1)}>
          <Plus />
        </Button>
        <h1 className="text-7xl">{count}</h1>
        <Button
          variant={"pixel"}
          onClick={() => {
            if (count >= 1) setCount((pre) => pre - 1);
          }}
        >
          <Minus />
        </Button>
      </div>

      <Progress
        value={count % 100}
        max={500}
        className="bg-zinc-800 h-[50px]"
      />
    </div>
  );
};

export default page;
