"use client";
import React from "react";
import { Spinner } from "@material-tailwind/react";
const loading = () => {
  return (
    <div className="h-screen w-screen fixed top-0 grid items-center justify-center bg-white overflow-y-hidden">
      <Spinner className="h-24 w-24 text-gray-900/50" />
    </div>
  );
};

export default loading;
