"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./../../styles/Home.module.css";
import TextTransition, { presets } from "react-text-transition";
import { Permanent_Marker } from "next/font/google";
import Navbar from "../components/Navbar";
import Svg1 from "@/components/svgs/svg1";
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
const font = Permanent_Marker({
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
      <Navbar />
      <section className="landingPage w-full overflow-hidden  ">
        {/* <div className=" w-full overflow-x-hidden"></div> */}
        <div className="content flex flex-col md:flex-row min-h-fit ">
          <div className="left flex-1 pt-4 md:pt-20">
            <h2 class="lg:mt-20 text-3xl md:text-4xl font-bold tracking-tight text-center min-h-fit pb-4">
              We help your Business with
              {/* <div className="flex justify-center">Solution For</div> */}
              <span class="text-primary dark:text-primary-400">
                <TextTransition
                  className={`flex justify-center text-yellow-300 uppercase ${font.className}`}
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
              <a class="text-center text-white font-semibold z-10 pointer-events-none flex justify-content items-center">
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
              </a>
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

        <div className="w-full  flex flex-col md:flex-row">
          <div className="leftSide flex-1 pl-20 ">
            <h2 className="title p-4 font-semibold">
              <Image
                className="inline-block"
                width="24"
                height="24"
                src="/assets/starIcon.png"
                alt="star-half-empty"
              />
              <span className="text-md md:text-lg ">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. .
              </span>
            </h2>
            <div class=" px-5 mt-22 md:mt-1 md:px-12">
              <p class="text-black text-sm ">
                Our company offers a comprehensive range of services to help
                businesses establish and enhance their brand image. We
                specialize in photography and videography, digital media
                management, graphic design, SEO, event management, and software
                development.
              </p>
            </div>
          </div>
          <div className="rightSide flex-1 md:pl-16 flex justify-center ">
            <Svg1 />
          </div>
        </div>
      </section>
    </main>
  );
}
