import { Chip } from "@material-tailwind/react";
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "@/firebase/firebase-config";
import Fade from "react-reveal/Fade";
const Works = () => {
  const [orders, setOrders] = useState([]);
  let collectionRef = collection(db, "works");

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
    <div>
      {orders[0] &&
        orders.map(
          ({
            ProjectName,
            ProjectType,
            Description,
            Date,
            URL,
            ImageURL,
            id,
          }) => {
            return (
              <Fade bottom key={id}>
                <div className="flex justify-center my-4 bg-slate-100 rounded-md shadow-xl ">
                  <div className="flex justify-center">
                    <div className="flex flex-col justify-center">
                      <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                        <div className="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
                          <div className="flex flex-col md:flex-row items-center">
                            <div className=" w-full overflow-hidden relative ">
                              {ImageURL && (
                                <Image
                                  width={600}
                                  height={400}
                                  src={ImageURL}
                                  alt="Image not available"
                                  className="contain"
                                />
                              )}
                            </div>
                            <div className="md:w-2/3 m-4 ">
                              <div className="flex text-gray-500 text-sm m-2">
                                <div className="m-1 font-bold">
                                  {Date}
                                  <Chip size="md" value={ProjectType} />
                                </div>
                              </div>
                              <div className="font-bold text-black text-xl m-2">
                                {ProjectName}
                              </div>
                              <div className="text-sm text-gray-500 mt-4 ">
                                {Description}
                              </div>
                              <div className="flex cursor-pointer my-2">
                                <a
                                  className="inline-flex"
                                  href={URL}
                                  target="blank"
                                >
                                  <span className="h-12 flex items-center justify-center uppercase font-semibold px-8 border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out">
                                    See Project
                                  </span>
                                  <span className="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-l-0 border-black hover:bg-black hover:text-white transition duration-500 ease-in-out">
                                    <svg
                                      aria-hidden="true"
                                      focusable="false"
                                      data-icon="chevron-right"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 256 512"
                                      className="svg-inline--fa h-3 w-3 fa-chevron-right fa-w-8 fa-9x"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                                      />
                                    </svg>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          }
        )}
    </div>
  );
};

export default Works;
