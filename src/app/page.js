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
            <h2 class="mt-20 text-5xl font-bold tracking-tight text-center">
              We help with &nbsp;
              {/* <div className="flex justify-center">Solution For</div> */}
              <span class="text-primary dark:text-primary-400">
                <TextTransition
                  className=" flex justify-center text-green-800 uppercase"
                  springConfig={presets.wobbly}
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
            </section>
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
