"use client";
import React from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import dynamic from "next/dynamic";

type Props = {};
const SplitterLayout = dynamic(() => import("react-splitter-layout"), {
  ssr: false,
});

const CodeEditor = (props: Props) => {
  return (
    <SandpackProvider template="static" style={{ height: "100vh" }}>
      <SandpackLayout style={{ height: "100%" }}>
        <SandpackCodeEditor style={{ height: "100%" }} />
        <SandpackPreview style={{ height: "100%" }} />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default CodeEditor;
