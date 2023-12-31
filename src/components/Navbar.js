"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Image from "next/image";
import { Overpass } from "next/font/google";
import Link from "next/link";

const logoFont = Overpass({
  subsets: ["latin"],
  weight: "400",
});

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <article
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-black hover:text-gray-600"
      >
        <div className="group relative text-md md:text-xl">
          <button className=" text-black rounded inline-flex items-center group hover:text-gray-600">
            <Link href={"/services"}>
              <span className="">Services</span>
            </Link>
            <svg
              className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
          </button>

          <ul className="rounded absolute hidden z-30 text-gray-700 pt-1 w-fit group-hover:block   ">
            <Link href={"/services/0"}>
              <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
                Photography
              </li>
            </Link>
            <Link href={"/services/5"}>
              <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
                Digital Marketing
              </li>
            </Link>
            <Link href={"/services/1"}>
              <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer w-fit">
                Event Management
              </li>
            </Link>
            <Link href={"/services/4"}>
              <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer w-fit">
                SEO and Web Development
              </li>
            </Link>
            <Link href={"/services/3"}>
              <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer w-fit">
                Graphics Design
              </li>
            </Link>
            <Link href={"/services/2"}>
              <li className="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer w-fit">
                Hardware and Network
              </li>
            </Link>
          </ul>
        </div>
      </article>
      <article
        as="li"
        variant="small"
        color="blue-gray"
        className="text-md md:text-xl p-1 font-medium text-black hover:text-gray-600"
      >
        <Link href="/works" className="flex items-center">
          <div>Works</div>
        </Link>
      </article>

      <article
        as="li"
        variant="small"
        color="blue-gray"
        className="text-md md:text-xl p-1 font-medium text-black hover:text-gray-600"
      >
        <Link href="/about" className={`flex items-center`}>
          <div>About Us</div>
        </Link>
      </article>
      <article
        as="li"
        variant="small"
        color="blue-gray"
        className="text-md md:text-xl p-1 font-medium text-black hover:text-gray-600"
      >
        {/* <div className=" inline-block text-lg group scale-75 md:scale-100">
          <span className="hidden lg:block relative z-10  px-5 py-3 overflow-hidden font-medium leading-tight  text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 md:bg-gray-900 group-hover:-rotate-180 ease"></span>{" "}
            <span className="relative text-base md:text-xl">
              Send message &#x2709;
            </span>
          </span>
          <button
            type="button"
            className=" block ml-auto lg:hidden focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Send Message
          </button>

          <span
            className="hidden lg:block absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </div> */}
        <Link
          href="/contact"
          className="relative inline-block px-4 py-2 font-medium group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">
            Send Message
          </span>
        </Link>
      </article>
    </ul>
  );

  return (
    <>
      <Navbar className="shadow-none  lg:absolute top-0 bg-transparent border-0 z-10 h-max scroll-m-9 max-w-full w-screen rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          {" "}
          <div
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-semibold text-lg  flex items-center gap-2"
          >
            <Link href="/">
              <div className="relative inline-block rounded-full overflow-hidden">
                <Image
                  src="/assets/logo.jpeg"
                  width={80}
                  height={80}
                  alt={"logo"}
                ></Image>
              </div>
            </Link>
            <div
              className={`${logoFont.className} h-5 flex font-extrabold text-lg md:text-xl lg:text-3xl align-middle text-black`}
            >
              <Link href={"/"}> Vision Ventures </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        <Collapse open={openNav}>
          {navList}

          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </Collapse>
      </Navbar>
    </>
  );
}
