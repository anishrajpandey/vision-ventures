import React from "react";
import Services from "@/components/Services";
const page = () => {
  return (
    <main className="pt-2 md:pt-0 md:pt-32">
      {" "}
      <h1 className="diagonal relative bg-[url('/images/group.jpeg')] flex justify-center pt-16 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">
        <span className="text-white">Services We Provide</span>
        <div className="w-screen absolute inset-0 h-auto bg-black bg-opacity-60 -z-10"></div>
      </h1>
      <Services />;
      <h1 className="diagonal bottom relative bg-[url('/images/bookshow.jpg')] flex justify-center items-end pt-16 mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl  text-center">
        <span className="text-white block py-6 ">
          We would love to work with you!!{" "}
          <span className="text-yellow-500">Cheers🥂</span>
        </span>
        <div className="w-screen absolute inset-0 h-auto bg-black bg-opacity-60 -z-10"></div>
      </h1>
    </main>
  );
};

export default page;
