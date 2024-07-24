"use client"
import { useState } from "react";
import { Counter } from "./count/components/count";
import { RenderFc } from "./render/components/render";

export default function Home() {

  return (
   <div className="w-full h-full flex items-center justify-center flex-col ">
      <Counter/>
      <RenderFc/>
   </div>
  );
}
