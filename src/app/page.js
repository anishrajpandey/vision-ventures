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
import Link from "next/link";
import { Fade } from "react-reveal";
import Numbers from "@/components/Numbers";
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
    <main className="max-w-full overflow-x-hidden">
      <section className="landingPage w-full overflow-hidden  ">
        {/* <div className=" w-full overflow-x-hidden"></div> */}
        <div className="content flex flex-col md:flex-row min-h-fit ">
          <div className="left flex-1 pt-4 md:pt-20">
            <h2 className="lg:mt-20 text-3xl md:text-4xl font-bold tracking-tight text-center min-h-fit pb-4">
              We help your Business with
              {/* <div className="flex justify-center">Solution For</div> */}
              <span className="text-primary ">
                <TextTransition
                  className={`flex justify-center text-orange-700 uppercase  tracking-wider  ${font.className}`}
                  springConfig={presets.stiff}
                >
                  {TEXTS[index % TEXTS.length]} &nbsp;
                </TextTransition>
              </span>
            </h2>

            {/* --------- */}
            <section className="mb-5 text-center">
              <div className=" p-5 mt-22 md:mt-2 md:px-12">
                <p className="text-black ">
                  Our company offers a comprehensive range of services to help
                  businesses establish and enhance their brand image. We
                  specialize in photography and videography, digital media
                  management, graphic design, SEO, event management, and
                  software development.
                </p>
              </div>
            </section>
            <Link href={"/services"}>
              <div className="b animate-bounce mx-auto h-16 w-64 flex justify-center items-center">
                <div className="i h-16 w-64 bg-gradient-to-br from-yellow-400 to-red-600 items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
                <div className="text-center text-white font-semibold z-10 pointer-events-none flex justify-content items-center">
                  Explore Our Services
                  <span className="pl-3 ">
                    <svg
                      className="w-5 h-5  right-1.5 relative -rotate-90"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
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

      <section className={`${styles.whyUs} flex flex-col w-72  `}>
        <div className={`${styles.heading} p-5 `}>
          <h1>WHY VISION VENTURES?</h1>
        </div>

        <Fade>
          <div className="item  flex flex-col md:flex-row">
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
                  WE HELP YOU BUILD A&nbsp;
                  <span className="font-bold text-orange-700">
                    TECHNICAL ECOSYSTEM
                  </span>
                </span>
              </h2>
              <div className=" px-5 mt-22 md:mt-1 md:px-12">
                <p className="text-black text-base md:text-lg  ">
                  Do you want to build a successful technology business? If so,
                  you need to build a strong technical ecosystem around your
                  company.We are a team of experienced ecosystem builders who
                  can help you build a successful technical ecosystem for your
                  business. We have a proven track record of success, and we are
                  passionate about helping businesses grow and succeed.
                </p>
              </div>
            </div>
            <div className="rightSide flex-1 md:pl-16 flex justify-start ">
              <Svg1 />
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="w-full mt-12  flex flex-col md:flex-row-reverse">
            <div className="leftSide flex-1 pl-2 md:pl-20 flex flex-col justify-center ">
              <h2 className="title p-4 font-semibold flex gap-2 items-center ">
                <Image
                  className="inline-block"
                  width="40"
                  height="40"
                  src="/assets/starIcon.png"
                  alt="star-half-empty"
                />{" "}
                <span className=" text-xl md:text-3xl ">
                  {" "}
                  WE MAKE YOUR BUSINESS
                  <span className="font-bold text-orange-700">
                    &nbsp;STAND OUT{" "}
                  </span>
                </span>
              </h2>
              <div className=" px-5 mt-22 md:mt-1 md:px-12">
                <p className="text-black text-base md:text-lg  ">
                  By working with us, you can be sure that your business will
                  stand out from the competition and achieve its full potential.
                  We understand the challenges that businesses face, and we are
                  committed to providing you with the solutions you need to
                  succeed. If you are ready to take your business to the next
                  level, contact us today to learn more about it.
                </p>
              </div>
            </div>
            <div className="rightSide flex-1 md:pl-16 flex justify-center ">
              <Photography />
            </div>
          </div>
        </Fade>
        {/* itm 3 */}
        <Fade>
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
                  <span className=" text-xl md:text-3xl ">
                    {" "}
                    WE OFFER YOU THE&nbsp;
                    <span className="font-bold text-orange-700">FREEDOM </span>
                    &nbsp;OF FULL
                    <span className="font-bold text-orange-700">
                      &nbsp;CUSTOMIZATION
                    </span>
                  </span>
                </span>
              </h2>
              <div className=" px-5 mt-22 md:mt-1 md:px-12">
                <p className="text-black text-base md:text-lg  ">
                  If you are looking for a way to stand out from the
                  competition, then custom made software is the answer. Contact
                  us today to learn more about how we can help you create custom
                  made software that will give you a competitive advantage.
                </p>
              </div>
            </div>
            <div className="rightSide flex-1 md:pl-16 flex justify-center mt-4 ">
              <Manwithphone />
            </div>
          </div>
        </Fade>
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
      <section className="services bg-gradient-to-b from-white to-blue-600 bg-cover">
        <SectionHome />
      </section>

      <div className="w-screen relative h-56">
        <Image src={"/assets/wave-haikei.png"} fill alt="wave" />
      </div>

      <section className="moreServices w-full md:w-3/4">
        <div className="item w-full  flex  md:flex-row">
          <div className="leftSide flex-1 pl-2 md:pl-20 flex  justify-start md:justify-end ">
            <Image
              className="inline-block"
              width={200}
              height={200}
              src={"/assets/monkey.jpeg"}
              alt="star-half-empty"
              placeholder="blur"
              blurDataURL={"/assets/monkey.png"}
            />
          </div>
          <div className="rightSide flex-1 flex flex-col gap-4 bg-slate-700 rounded-lg justify-center text-white md:pl-16 mt-4 ">
            <h2 className="title p-4 text-xl md:text-4xl font-semibold flex gap-2 items-center ">
              Dont see what you are looking for?
            </h2>

            <div className="relative inline-flex w-fit group">
              <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <Link
                href="/services"
                title="View All Services"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Fade>
        <Numbers />
      </Fade>
    </main>
  );
}
// fsdf
