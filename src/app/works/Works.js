import { Chip } from "@material-tailwind/react";
import Image from "next/image";

const Works = () => {
  return (
    <>
      <div className="flex justify-center bg-slate-100 rounded-md shadow-xl ">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
              <div className="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
                <div className="flex flex-col md:flex-row items-center">
                  <div className=" w-full overflow-hidden relative ">
                    {" "}
                    <Image
                      width={600}
                      height={400}
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/files%2FGRADE-IX.jpgee7d687e-520c-4926-813c-681d4a9d8f39%20?alt=media&token=174b2875-160e-459c-8891-4102d2c00f5e"
                      }
                      alt="Image not available"
                      className="contain"
                    />{" "}
                  </div>
                  <div className="md:w-2/3 m-4 ">
                    <div className="flex text-gray-500 text-sm m-2">
                      <div className="m-1 font-bold">
                        Date Entered Here,
                        <Chip size="md" value="Type of project entered here" />
                      </div>
                    </div>
                    <div className="font-bold text-black text-xl m-2">
                      Title Entered Here
                    </div>
                    <div className="text-sm text-gray-500 mt-4 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid sapiente maiores maxime eius cupiditate sed soluta
                      facilis doloribus nemo quae cumque saepe sit impedit quam
                      molestias, quia aspernatur numquam. Quas? molestias, quia
                      molestias, quia aspernatur numquam. Quas? aspernatur
                      molestias, quia aspernatur numquam. Quas? molestias, quia
                      aspernatur numquam. Quas? numquam. Quas?
                    </div>

                    <div className="flex cursor-pointer my-2">
                      <a
                        className="inline-flex"
                        href="https://www.facebook.com/pages/Prolific-Schoolcollege-kathmandu-102397875002322/102397875002322/"
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
      </div>{" "}
    </>
  );
};

export default Works;
