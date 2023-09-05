import { Chip } from "@material-tailwind/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase-config";

const Gallery = () => {
  const [Images, setImages] = useState([]);
  let collectionRef = collection(db, "gallery");

  async function getImages() {
    let data = await getDocs(collectionRef);
    setImages((order) =>
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  }
  useEffect(() => {
    getImages();
  }, []);
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div class="flex items-center gap-12">
            <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">
              Gallery
            </h2>

            <p class="hidden max-w-screen-sm text-gray-500 md:block">
              Explore some of our Captivating Photos.
            </p>
          </div>

          <a
            href="#"
            class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            More
          </a>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {Images &&
            Images.map(({ Date, id, ImageURL, Title }) => (
              <div
                key={id}
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <Image
                  width={500}
                  height={500}
                  src={ImageURL || null}
                  loading="lazy"
                  alt="Unable to load image"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span class="relative flex ml-4 mb-3 flex-col text-sm text-white font-medium md:ml-5 md:text-lg w-full">
                  {Title}
                  <Chip
                    variant="outlined"
                    className="border-white max-w-fit text-white mx-2"
                    value={Date}
                  />
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
