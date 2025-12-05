import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import React from "react";
import { TooltipProvider } from "./ui/tooltip";

type Props = {
  children: React.ReactNode;
  content: string;
};

const TooltipCodebox = ({ children, content }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent sideOffset={8}>
          <p className="text-lg bg-white rounded-xl text-black p-2">
            {content}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipCodebox;
