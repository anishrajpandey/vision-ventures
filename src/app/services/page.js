import React from "react";
import Services from "@/components/Services";
const page = () => {
  return (
    <main className="pt-2 md:pt-32">
      {" "}
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">
        Services We Provide
      </h1>
      <Services />;
    </main>
  );
};

export default page;
