import Image from "next/image";
import Link from "next/link";

const SectionHome = () => {
  return (
    <div className="h-[500vh] md:h-[145vh] ">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full w-4/5 mx-auto ">
        <div className=" relative group overflow-hidden">
          <Image
            className=" max-w-sm transition-all duration-300 cursor-pointer filter  md:grayscale group-hover:grayscale-0 group-hover:scale-105"
            fill
            src="/images/marketing1.jpg"
            alt="image description"
          />
          <div className=" absolute w-full  bottom-0 md:-bottom-full group-hover:bottom-0 bg-white bg-opacity-30 transition-all bg-gradient-to-t from-gray-900 via-gray-900/40">
            <h3 className="z-10 mt-3 text-3xl font-bold  text-center  text-black ">
              Digital Marketing
            </h3>
            <Link href={"/services/5"} className="w-full ">
              <div className="flex justify-center">
                <button className="bg-orange-600 hover:bg-transparent border w-1/2 mx-auto my-4 rounded-md text-white h-12">
                  Explore
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className=" relative group overflow-hidden">
          <Image
            className=" max-w-sm transition-all duration-300 cursor-pointer filter md:grayscale  group-hover:grayscale-0 group-hover:scale-105"
            fill
            src="/images/webdev.jpg"
            alt="image description"
          />
          <div className=" absolute w-full  bottom-0 md:-bottom-full group-hover:bottom-0 transition-all bg-gradient-to-t from-gray-900 via-gray-900/40 bg-white bg-opacity-30 ">
            <h3 className="z-10 mt-3 text-3xl font-bold  text-center text-black">
              Software and Website Development
            </h3>
            <Link href={"/services/6"} className="w-full ">
              <div className="flex justify-center">
                <button className="bg-orange-600 hover:bg-transparent border w-1/2 mx-auto my-4 rounded-md text-white h-12">
                  Explore
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className=" relative group overflow-hidden">
          <Image
            className=" max-w-sm transition-all duration-300 cursor-pointer filter md:grayscale  group-hover:grayscale-0 group-hover:scale-105"
            fill
            src="/images/seo.jpg"
            alt="image description"
          />
          <div className=" absolute w-full  bottom-0 md:-bottom-full group-hover:bottom-0 transition-all bg-gradient-to-t from-gray-900 via-gray-900/40 bg-white bg-opacity-30 ">
            <h3 className="z-10 mt-3 text-3xl font-bold  text-center text-black">
              Search Engine Optimization{" "}
            </h3>
            <Link href={"/services/4"} className="w-full ">
              <div className="flex justify-center">
                <button className="bg-orange-600 hover:bg-transparent border w-1/2 mx-auto my-4 rounded-md text-white h-12">
                  Explore
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className=" relative group overflow-hidden">
          <Image
            className=" max-w-sm transition-all duration-300 cursor-pointer filter  md:grayscale group-hover:grayscale-0 group-hover:scale-105"
            fill
            src="/images/eventmanagement.jpg"
            alt="image description"
          />
          <div className=" absolute w-full  bottom-0 md:-bottom-full group-hover:bottom-0 transition-all bg-gradient-to-t from-gray-900 via-gray-900/40 bg-white bg-opacity-30 ">
            <h3 className="z-10 mt-3 text-3xl font-bold  text-center text-black  ">
              Event Management
            </h3>
            <Link href={"/services/1"} className="w-full ">
              <div className="flex justify-center">
                <button className="bg-orange-600 hover:bg-transparent border w-1/2 mx-auto my-4 rounded-md text-white h-12">
                  Explore
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className=" relative group overflow-hidden">
          <Image
            className=" max-w-sm transition-all duration-300 cursor-pointer filter  md:grayscale group-hover:grayscale-0 group-hover:scale-105"
            fill
            src="/images/logodesign.jpg"
            alt="image description"
          />
          <div className=" absolute w-full  bottom-0 md:-bottom-full group-hover:bottom-0 transition-all bg-gradient-to-t from-gray-900 via-gray-900/40 bg-white bg-opacity-30 ">
            <h3 className="z-10 mt-3 text-3xl font-bold  text-center text-black  ">
              Graphics, Animation & Logo Design
            </h3>
            <Link href={"/services/3"} className="w-full ">
              <div className="flex justify-center">
                <button className="bg-orange-600 hover:bg-transparent border w-1/2 mx-auto my-4 rounded-md text-white h-12">
                  Explore
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className=" relative group overflow-hidden">
          <Image
            className=" max-w-sm transition-all duration-300 cursor-pointer filter  md:grayscale group-hover:grayscale-0 group-hover:scale-105"
            fill
            src="/images/officeinfrastructure.png"
            alt="image description"
          />
          <div className=" absolute w-full  bottom-0 md:-bottom-full group-hover:bottom-0 transition-all bg-gradient-to-t from-gray-900 via-gray-900/40 bg-white bg-opacity-30 ">
            <h3 className="z-10 mt-3 text-3xl font-bold  text-center text-black  ">
              Office Infrastructure
            </h3>
            <Link href={"/services/7"} className="w-full ">
              <div className="flex justify-center">
                <button className="bg-orange-600 hover:bg-transparent border w-1/2 mx-auto my-4 rounded-md text-white h-12">
                  Explore
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className=" relative group overflow-hidden">
          <Image
            className=" max-w-sm transition-all duration-300 cursor-pointer filter  md:grayscale group-hover:grayscale-0 group-hover:scale-105"
            fill
            src="/images/photography.jpg"
            alt="image description"
          />
          <div className=" absolute w-full  bottom-0 md:-bottom-full group-hover:bottom-0 transition-all bg-gradient-to-t from-gray-900 via-gray-900/40 bg-white bg-opacity-30 ">
            <h3 className="z-10 mt-3 text-3xl font-bold  text-center text-black  ">
              Photography & Videography
            </h3>
            <Link href={"/services/0"} className="w-full ">
              <div className="flex justify-center">
                <button className="bg-orange-600 hover:bg-transparent border w-1/2 mx-auto my-4 rounded-md text-white h-12">
                  Explore
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className=" relative group overflow-hidden">
          <Image
            className=" max-w-sm transition-all duration-300 cursor-pointer filter  md:grayscale group-hover:grayscale-0 group-hover:scale-105"
            fill
            src="/images/hardwarenetwork.jpg"
            alt="image description"
          />
          <div className=" absolute w-full  bottom-0 md:-bottom-full group-hover:bottom-0 transition-all bg-gradient-to-t from-gray-900 via-gray-900/40 bg-white bg-opacity-30 ">
            <h3 className="z-10 mt-3 text-3xl font-bold  text-center text-black  ">
              Hardware & Networking
            </h3>
            <Link href={"/services/2"} className="w-full ">
              <div className="flex justify-center">
                <button className="bg-orange-600 hover:bg-transparent border w-1/2 mx-auto my-4 rounded-md text-white h-12">
                  Explore
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHome;
