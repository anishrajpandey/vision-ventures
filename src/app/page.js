"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./../../styles/Home.module.css";
import TextTransition, { presets } from "react-text-transition";
import { Permanent_Marker } from "next/font/google";
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
                  software development. We are dedicated to helping businesses
                  succeed by creating a strong and memorable brand identity.
                </p>
              </div>
            </section>
            <div class="b animate-bounce mx-auto h-16 w-64 flex justify-center items-center">
              <div class="i h-16 w-64 bg-gradient-to-br from-yellow-400 to-red-600 items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
              <a class="text-center text-white font-semibold z-10 pointer-events-none flex justify-content items-center">
                Connect with Us
                <span class="pl-3 ">
                  <svg
                    class="w-5 h-5  right-1.5 relative"
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, officiis
      illum soluta qui laborum facere quod similique vero dolore aliquid sed
      consectetur eos cupiditate modi quas voluptatibus minima quisquam error
      eius, nam aspernatur, eum recusandae sunt beatae? Commodi praesentium unde
      veniam laborum voluptates! Facere fugiat aliquid harum dolor. Ut aut
      eveniet inventore sed laudantium repellat. Aspernatur atque delectus
      incidunt harum officia repudiandae reiciendis ipsam ab, quod ipsum!
      Doloribus dolores dignissimos magnam, hic sint culpa animi iste tempore
      neque quia veniam ipsam? Neque tempora magni totam quis dolorum soluta
      laudantium, nesciunt, aperiam saepe, consequatur maiores ex sed error
      nulla placeat corporis laborum aliquid suscipit quaerat eveniet aliquam
      quod modi cumque nisi! Adipisci, totam aperiam optio molestiae asperiores
      illo veniam reprehenderit ipsa excepturi sunt repellendus aliquid enim
      beatae nemo corporis fuga quos ipsum commodi quas qui nulla assumenda
      atque delectus quae! Obcaecati cumque numquam eos atque quia. Nesciunt
      error accusantium ducimus quasi doloremque illum, consequatur veniam et id
      odit cupiditate. Quos aliquid minus provident, expedita pariatur odio
      veritatis debitis, laboriosam consectetur neque iure suscipit fuga amet,
      quo deleniti doloribus necessitatibus sed molestias iste eum sunt
      dignissimos? Odio soluta nam vel non aperiam?
    </main>
  );
}
