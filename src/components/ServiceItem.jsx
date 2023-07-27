import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceItem = ({ title, description, url, img1, img2 }) => {
  return (
    <div className="p-4 lg:w-1/2 w-screen shadow-lg border-4 rounded-md my-3 hover:bg-slate-200 hover:scale-95 group transition-all cursor-pointer">
      <div className="h-full  flex sm:flex-row flex-col items-center sm:justify-start w-full justify-center text-center sm:text-left relative overflow-hidden">
        <Image
          alt="team"
          className="flex-shrink-0 rounded-lg w-56 h-56 group-hover:scale-125 transition-all  object-cover object-center sm:mb-0 mb-4 group-hover:hidden "
          src={img1}
          width={600}
          height={400}
        />
        <Image
          alt="team"
          className="flex-shrink-0 rounded-lg hidden w-56 h-56 group-hover:block transition-all  object-cover object-center sm:mb-0 mb-4"
          src={img2}
          width={600}
          height={400}
        />
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-semibold font-large text-2xl text-gray-900">
            {title}
          </h2>
          {/* <h3 className="text-gray-500 mb-3">UI Developer</h3> */}
          <p className="mb-4">{description}</p>
          <span className="inline-flex">
            <div class="b hover:animate-pulse mx-auto h-16 w-64 flex justify-center items-center">
              <div class="i h-16 w-48 bg-orange-600 items-center rounded-2xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
              <Link
                href={url}
                class="text-center text-white font-semibold z-10 "
              >
                Book Sevice
              </Link>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
