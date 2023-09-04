import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      {" "}
      <h1 className="text-orange-600 md:pt-32  text-2xl md:text-4xl font-semibold my-4 text-center">
        About Vision Ventures
      </h1>
      <div className="flex  flex-wrap justify-center items-center rounded-lg p-10 md:py-16">
        <div className=" w-full md:w-1/2 py-4 shadow-lg  flex justify-center  max-w-7xl ">
          <div className="px-8">
            <div className="flex items-center justify-center space-x-10">
              <div className=" md:ml-[6px] flex flex-col items-center lg:flex-row  bg-white">
                <Image
                  src="/images/founder.jpg"
                  className=" rounded-full cover"
                  width={150}
                  height={150}
                  alt="Unable to load image"
                />

                <div className="px-5 py-10 text-black flex flex-col w-full lg:w-[70%] ">
                  <p className="text-md -mt-5 -ml-5 md:-ml-0  text-left">
                    Welcome to our company, where we offer a comprehensive range
                    of services to help businesses establish and enhance their
                    brand image
                  </p>
                  <div className="mt-5 text-left -ml-5 md:text-right ">
                    <a
                      href="https://www.facebook.com/profile.php?id=100016064358963"
                      target="blank"
                    ></a>
                    <h1 className="font-bold text-lg">Mr. Dilip Shrestha</h1>
                    <p className="text-sm text-semobold">Founder & CEO</p>
                    <p className="text-sm ">Vision Ventures Branding Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-12  w-5/6 ">
        <Image
          width={1000}
          height={500}
          className=" w-full rounded-lg object-contain object-center shadow-xl shadow-blue-gray-900/50"
          src={"/images/banner.jpg"}
          alt="banners"
        />
      </div>
    </>
  );
};

export default About;
