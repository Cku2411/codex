"use client";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  Sandpack,
  useSandpack,
} from "@codesandbox/sandpack-react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { nightOwl } from "@codesandbox/sandpack-themes";
import { toast } from "sonner";

type Props = {
  onCompleteExecise: () => void;
};
const SplitterLayout = dynamic(() => import("react-splitter-layout"), {
  ssr: false,
});

const CodeEditorChildren = ({ onCompleteExecise }: Props) => {
  const { sandpack } = useSandpack();
  return (
    <div className="font-game absolute bottom-40 flex gap-5 right-5">
      <Button variant={"pixel"} onClick={() => sandpack.runSandpack()}>
        Run Code
      </Button>
      <Button
        variant={"pixel"}
        className="bg-[#a3e534]"
        onClick={() => onCompleteExecise()}
      >
        Mark Completed!
      </Button>
    </div>
  );
};

const CodeEditor = () => {
  const onCompleteExecise = () => {
    toast.success("Exercise completed!");
    console.log("Code completed");
  };
  return (
    <div className="h-full">
      <SandpackProvider
        template="static"
        style={{ height: "100vh" }}
        options={{ autorun: false, autoReload: false }}
        theme={nightOwl}
      >
        <SandpackLayout style={{ height: "100%" }}>
          <div className="flex flex-col h-full justify-between relative">
            <SandpackCodeEditor showTabs />
            <CodeEditorChildren onCompleteExecise={onCompleteExecise} />
          </div>
          <SandpackPreview
            style={{ height: "100%" }}
            showNavigator
            showOpenInCodeSandbox={false}
            showOpenNewtab
          />
        </SandpackLayout>
      </SandpackProvider>
    </div>

    // <Sandpack template="static" />
  );
};

export default CodeEditor;
