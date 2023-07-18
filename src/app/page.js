"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./../../styles/Home.module.css";
import TextTransition, { presets } from "react-text-transition";

import Navbar from "../components/Navbar";
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

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <main className="">
      <Navbar />
      <section className="landingPage">
        <div className="background"></div>
        <div className="content flex">
          <div className="left flex-1 pt-20">
            {/* fgfdg df */}
            {/* <section className="my-12 text-5xl font-bold tracking-tight">
              We help with &nbsp;
              <TextTransition
                style={{ margin: "2px 4px" }}
                className=" flex justify-center text-green-800 uppercase"
                inline
              >
                {TEXTS[index]} &nbsp;
              </TextTransition>
              to your business
            </section> */}
            <h2 class="mt-20 text-4xl font-bold tracking-tight text-center min-h-40 max-h-40">
              We help with &nbsp;
              {/* <div className="flex justify-center">Solution For</div> */}
              <span class="text-primary dark:text-primary-400">
                <TextTransition
                  className=" flex justify-center text-green-800 uppercase"
                  springConfig={{ mass: 1, tension: 140, friction: 30 }}
                  inline
                >
                  {TEXTS[index % TEXTS.length]} &nbsp;
                </TextTransition>
              </span>
              for your business
            </h2>
            {/* --------- */}
            <section class="mb-5 text-center">
              <div class="px-6 py-5 md:px-12">
                <p class="text-black ">
                  Our company offers a comprehensive range of services to help
                  businesses establish and enhance their brand image. We
                  specialize in photography and videography, digital media
                  management, graphic design, SEO, website design and
                  development, event management, office infrastructure, hardware
                  and network services, and software development. We are
                  dedicated to helping businesses succeed by creating a strong
                  and memorable brand identity.
                </p>
              </div>
              <a
                href="#_"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Get Started
                </span>
              </a>{" "}
            </section>

            {/* <button class="flex items-center w-auto bg-red-700 hover:bg-red-800 mx-auto focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-white px-5 py-2.5 text-center dark:focus:ring-primary-900">
              {" "}
              <a href="#">Get started</a>{" "}
              <svg
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button> */}
          </div>

          <div className="right relative flex-1 pt-24">
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
            <div className={`absolute top-0 left-0 ${styles.blob}`}></div>
          </div>
        </div>
      </section>
    </main>
  );
}
