"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/firebase/firebase-config";
import { v4 as uuidv4 } from "uuid";
const Page = () => {
  // const [data, setData] = useState({
  //   name,
  //   email,
  //   phone,
  //   location,
  //   description,
  //   url,
  // });
  const [type, setType] = useState("Everything");
  const [FileName, setFileName] = useState(null);
  const categories = [
    "Photography and Videography  ",
    "Event Management",
    "Hardware and Software Solutions",
    "Graphic Design/ Animation & Logo Design ",
    " Website SEO Development",
    "Digital Media management -marketing",
    "Website Design & Development",
    "Office Infrastructure",
  ];
  function handleChangeData() {}
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.children);
  }
  let path = usePathname();
  useEffect(() => {
    let category = categories[path.split("/").at(-1)];
    setType(category);
  }, []);

  const uploadImage = async () => {
    if (FileName == null) return;
    const fileref = ref(storage, `files/${FileName.name}`);
    await uploadBytes(fileref, FileName);
    let url = await getDownloadURL(fileref);
    console.log(url);
    // console.log(message);
    alert("uploaded");
  };
  return (
    <main className="pt-2 md:pt-28">
      <div className="header w-screen relative h-60">
        <Image
          src={"/assets/working.gif"}
          className="absolute right-0 hidden md:-top-32 md:block"
          width={500}
          height={400}
          alt="workin"
          loading="lazy"
        ></Image>
        <div className="w-full md:w-1/2">
          <h1 className="text-center text-2xl md:text-5xl font-bold pt-12 text-slate-700">
            Book a service for - {type}
          </h1>
          <h2 className="text-center text-md mb-5  font-semibold  text-slate-700">
            You are one step away from getting our service{" "}
          </h2>
        </div>
      </div>

      {/* actual form starts from here */}
      <form className="w-full max-w-lg mx-auto " onSubmit={handleSubmit}>
        {/* email */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name*
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Raju"
              required
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Lama"
            />
          </div>
        </div>
        <div className=" w-full  mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email*
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="email"
            type="text"
            placeholder="abc@xyz.com"
            required
          />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Phone*
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="phone"
              type="num"
              placeholder="9866554782"
              required
            />
            <p className="text-gray-600 text-xs italic">
              Enter your correct number{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Location
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              City
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option defaultValue={"Kathmandu"}>Kathmandu</option>
              </select>
            </div>
          </div>
          <div className=" w-full  my-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description"
            >
              Explain Your Project{" "}
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="desc"
              type="text"
              placeholder="I want my project to be like..."
              rows={9}
              required
            ></textarea>
          </div>
          {/* file upload */}

          <div className="flex gap-2 flex-col justify-center w-full pt-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs pl-4 font-bold mb-2"
              htmlFor="grid-state"
            >
              Choose File to Upload
            </label>
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-100 dark:hover:bg-bray-800  hover:bg-gray-100 "
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(e) => setFileName(e.target.files[0])}
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className=" border-2 border-green-700 bg-green-700 text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2      w-48 h-22  hover:bg-transparent hover:text-green-700"
        >
          Submit
        </button>
        <button
          type="reset"
          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Clear
        </button>
      </form>
      <button
        onClick={uploadImage}
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
      >
        Upload Image
      </button>
    </main>
  );
};

export default Page;
