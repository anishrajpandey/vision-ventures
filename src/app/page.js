"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./../../styles/Home.module.css";
import TextTransition, { presets } from "react-text-transition";
import { Anton } from "next/font/google";

import Svg1 from "@/components/svgs/svg1";
import Photography from "@/components/svgs/Photography";
import Manwithphone from "@/components/svgs/Manwithphone";

import SectionHome from "@/components/SectionHome";
const TEXTS = [
  "Photography  ",
  "Digital Media Management",
  "Videography",
  "SEO ",
  "Event Management",
  "Hardware Services",
  "Software Solution",
  "Digital Marketing",
];
const font = Anton({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <main className="">
      <section className="landingPage w-full overflow-hidden  ">
        {/* <div className=" w-full overflow-x-hidden"></div> */}
        <div className="content flex flex-col md:flex-row min-h-fit ">
          <div className="left flex-1 pt-4 md:pt-20">
            <h2 class="lg:mt-20 text-3xl md:text-4xl font-bold tracking-tight text-center min-h-fit pb-4">
              We help your Business with
              {/* <div className="flex justify-center">Solution For</div> */}
              <span class="text-primary dark:text-primary-400">
                <TextTransition
                  className={`flex justify-center text-orange-700 uppercase  tracking-wider  ${font.className}`}
                  springConfig={presets.stiff}
                >
                  {TEXTS[index % TEXTS.length]} &nbsp;
                </TextTransition>
              </span>
            </h2>

            {/* --------- */}
            <section class="mb-5 text-center">
              <div class=" p-5 mt-22 md:mt-2 md:px-12">
                <p class="text-black ">
                  Our company offers a comprehensive range of services to help
                  businesses establish and enhance their brand image. We
                  specialize in photography and videography, digital media
                  management, graphic design, SEO, event management, and
                  software development.
                </p>
              </div>
            </section>
            <div class="b animate-bounce mx-auto h-16 w-64 flex justify-center items-center">
              <div class="i h-16 w-64 bg-gradient-to-br from-yellow-400 to-red-600 items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
              <div class="text-center text-white font-semibold z-10 pointer-events-none flex justify-content items-center">
                Explore Our Services
                <span class="pl-3 ">
                  <svg
                    class="w-5 h-5  right-1.5 relative -rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="right b0 min-h-fit md:relative flex-1 pt-24">
            <div>
              <Image
                src="/assets/manwithcomputer.gif"
                className="ml-auto mt-4"
                width={650}
                height={650}
                loading="lazy"
                alt="image"
              />
            </div>
            <div className="overflow-hidden w-32 md:w-1/2">
              <div
                className={`absolute top-0 left-0 overflow-x-hidden ${styles.blob}`}
              ></div>
            </div>
          </div>
        </div>
      </section>
      {/* why choose us */}

      <section className={`${styles.whyUs} flex flex-col`}>
        <div className={`${styles.heading} p-5 `}>
          <h1>WHY VISION VENTURES?</h1>
        </div>

        <div className="item w-full  flex flex-col md:flex-row">
          <div className="leftSide flex-1 pl-2 md:pl-20 flex flex-col justify-center ">
            <h2 className="title p-4 font-semibold flex gap-2 items-center ">
              <Image
                className="inline-block"
                width="40"
                height="40"
                src="/assets/starIcon.png"
                alt="star-half-empty"
              />
              <span className=" text-xl md:text-3xl ">
                {" "}
                We make your Business{" "}
                <span className="font-bold text-orange-700">Stand Out</span>
              </span>
            </h2>
            <div class=" px-5 mt-22 md:mt-1 md:px-12">
              <p class="text-black text-base md:text-lg  ">
                Our company offers a comprehensive range of services to help
                businesses establish and enhance their brand image. We
                specialize in photography and videography, digital media
                management, graphic design, SEO, event management, and software
                development.
              </p>
            </div>
          </div>
          <div className="rightSide flex-1 md:pl-16 flex justify-start ">
            <Svg1 />
          </div>
        </div>
        <div className="w-full mt-12  flex flex-col md:flex-row-reverse">
          <div className="leftSide flex-1 pl-2 md:pl-20 flex flex-col justify-center ">
            <h2 className="title p-4 font-semibold flex gap-2 items-center ">
              <Image
                className="inline-block"
                width="40"
                height="40"
                src="/assets/starIcon.png"
                alt="star-half-empty"
              />
              <span className=" text-xl md:text-3xl ">
                {" "}
                We make your Business{" "}
                <span className="font-bold text-orange-700">Stand Out</span>
              </span>
            </h2>
            <div class=" px-5 mt-22 md:mt-1 md:px-12">
              <p class="text-black text-base md:text-lg  ">
                Our company offers a comprehensive range of services to help
                businesses establish and enhance their brand image. We
                specialize in photography and videography, digital media
                management, graphic design, SEO, event management, and software
                development.
              </p>
            </div>
          </div>
          <div className="rightSide flex-1 md:pl-16 flex justify-center ">
            <Photography />
          </div>
        </div>
        {/* itm 3 */}
        <div className="item w-full  flex flex-col md:flex-row">
          <div className="leftSide flex-1 pl-2 md:pl-20 flex flex-col justify-center ">
            <h2 className="title p-4 font-semibold flex gap-2 items-center ">
              <Image
                className="inline-block"
                width="40"
                height="40"
                src={"/assets/starIcon.png"}
                alt="star-half-empty"
                placeholder="blur"
                blurDataURL={"/assets/starIcon.png"}
              />
              <span className=" text-xl md:text-3xl ">
                {" "}
                We make your Business{" "}
                <span className="font-bold text-orange-700">Stand Out</span>
              </span>
            </h2>
            <div class=" px-5 mt-22 md:mt-1 md:px-12">
              <p class="text-black text-base md:text-lg  ">
                Our company offers a comprehensive range of services to help
                businesses establish and enhance their brand image. We
                specialize in photography and videography, digital media
                management, graphic design, SEO, event management, and software
                development.
              </p>
            </div>
          </div>
          <div className="rightSide flex-1 md:pl-16 flex justify-center mt-4 ">
            <Manwithphone />
          </div>
        </div>
      </section>

      {/* Services
       */}
      <div className="flex flex-col text-center items-center w-full mb-20 bg-cover h-64 mt-12 bg-black bg-opacity-70 relative ">
        <div className="absolute w-full h-full opacity-90 bg-gray -z-20">
          <Image
            src={"/images/blackbg.jpg"}
            className=" object-cover object-center"
            fill
            alt="bg"
          />
        </div>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg md:text-2xl h-full flex items-center  text-white ">
          We offer a great value to our Godlike customers. Apart from
          materialistic service, we owe you the trust and belief, which makes
          our services more cherished.
        </p>
      </div>
      <div className={`${styles.heading} p-5 uppercase `}>
        <h1>Our Services</h1>
      </div>
      <section className="services bg-[url('/assets/circlepattern.svg')] bg-cover">
        <SectionHome />
      </section>
      <div className="w-screen relative h-56">
        <Image src={"/assets/wave-haikei.png"} fill alt="wave" />
      </div>
    </main>
  );
}
