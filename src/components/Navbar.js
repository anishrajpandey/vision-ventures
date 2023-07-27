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
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-black hover:text-gray-600"
      >
        <div class="group relative text-md md:text-xl">
          <button class=" text-black rounded inline-flex items-center group hover:text-gray-600">
            <span class="">Services</span>
            <svg
              class="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
          </button>
          <ul class="rounded absolute hidden z-30 text-gray-700 pt-1 w-fit group-hover:block   ">
            <li class="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
              Photography
            </li>
            <li class="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer">
              Digital Marketing
            </li>
            <li class="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer w-fit">
              Event Management
            </li>
            <li class="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer w-fit">
              SEO and Web Development
            </li>
            <li class="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer w-fit">
              Graphics Design
            </li>
            <li class="bg-gray-200 hover:bg-gray-400 py-4 px-4 cursor-pointer w-fit">
              Hardware and Network
            </li>
          </ul>
        </div>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="text-md md:text-xl p-1 font-medium text-black hover:text-gray-600"
      >
        <a href="#" className="flex items-center">
          Works
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="text-md md:text-xl p-1 font-medium text-black hover:text-gray-600"
      >
        <a href="#" className={`flex items-center`}>
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="text-md md:text-xl p-1 font-medium text-black hover:text-gray-600"
      >
        <a href="#_" class=" inline-block text-lg group scale-75 md:scale-100">
          <span class="hidden lg:block relative z-10  px-5 py-3 overflow-hidden font-medium leading-tight  text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 md:bg-gray-900 group-hover:-rotate-180 ease"></span>{" "}
            <span class="relative text-base md:text-xl">
              Send message &#x2709;
            </span>
          </span>
          <button
            type="button"
            class=" block ml-auto lg:hidden focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Send Message
          </button>

          <span
            class="hidden lg:block absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="lg:absolute top-0 bg-transparent border-0 z-10 h-max max-w-full w-screen rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-semibold text-lg  flex items-center gap-2"
          >
            {" "}
            <div className="relative inline-block rounded-full overflow-hidden">
              <Image
                src="/assets/logo.jpeg"
                width={80}
                height={80}
                alt={"logo"}
              ></Image>
            </div>
            <div
              className={`${logoFont.className} h-5 flex font-extrabold text-lg md:text-xl lg:text-3xl align-middle text-black`}
            >
              Vision Ventures
            </div>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            {/* <Button
              variant="gradient"
              size="sm"
              className="hidden  bg-blue-600 text-white lg:inline-block"
            >
              Connect with us
            </Button> */}
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
