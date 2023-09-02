import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "@/firebase/firebase-config";
import Fade from "react-reveal/Fade";
import Image from "next/image";
const Testimonials = () => {
  const [orders, setOrders] = useState([]);
  let collectionRef = collection(db, "testimonials");

  async function getOrders() {
    let data = await getDocs(collectionRef);
    setOrders((order) =>
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  }
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <section className="my-8">
      <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
        <h1 className="p-4 text-4xl font-semibold leadi text-center">
          What our customers are saying about us
        </h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        {orders[0] &&
          orders.map(({ Name, Post, Testimonial, ImageURL, id }) => {
            return (
              <Fade key={id}>
                <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                  <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                    <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 dark:text-violet-400"
                      >
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                      </svg>
                      {Testimonial}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="absolute right-0 w-8 h-8 dark:text-violet-400"
                      >
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                      </svg>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-8 rounded-b-lg ">
                    <Image
                      src={ImageURL}
                      alt=""
                      className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full"
                      height={50}
                      width={50}
                    />
                    <p className="text-xl font-semibold leadi">{Name}</p>
                    <p className="text-sm uppercase">{Post}</p>
                  </div>
                </div>
              </Fade>
            );
          })}
      </div>
    </section>
  );
};

export default Testimonials;
