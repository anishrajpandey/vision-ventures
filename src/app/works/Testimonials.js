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
  // dfsdf

  return (
    <section className="my-8">
      <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
        <h1 className="p-4 text-4xl font-semibold leadi text-center">
          What our customers are saying about us
        </h1>
      </div>
      <div className="flex flex-col items-center flex-wrap justify-center w-full gap-4p-8 mb-8 md:flex-row md:mb-0 flex-between">
        {orders[0] &&
          orders.map(({ Name, Post, Testimonial, ImageURL, id }) => {
            return (
              <Fade key={id}>
                <div className="bg-orange-100 hover:scale-105 pointer w-72 shadow-lg mx-auto my-2 rounded-xl p-4">
                  <p className="text-gray-800 font-medium text-md ">
                    <span className="text-lg font-bold text-orange-500">“</span>
                    {Testimonial}
                    <span className="text-lg font-bold text-orange-500">”</span>
                  </p>
                  <div className="flex items-center mt-4">
                    <a href="#" className="relative block">
                      <Image
                        width={100}
                        height={100}
                        alt="profil"
                        src={ImageURL}
                        className="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a>
                    <div className="flex flex-col justify-between ml-2">
                      <span className="text-md font-semibold text-indigo-800">
                        {Name}{" "}
                      </span>
                      <span className="flex items-center text-sm font-semibold ">
                        {Post}{" "}
                      </span>
                    </div>
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
