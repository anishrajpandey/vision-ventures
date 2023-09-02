"use client";
import React from "react";
import { Spinner } from "@material-tailwind/react";
const loading = () => {
  return (
    <div className="h-screen w-screen  top-0 grid items-center justify-center bg-white overflow-y-hidden">
      {/* <Spinner className="h-24 w-24 text-gray-900/50" /> */}
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    </div>
  );
};

export default loading;
