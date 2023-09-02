import React from "react";

const Works = () => {
  return (
    <>
      <div class="flex justify-center">
        <div class="flex justify-center">
          <div class="flex flex-col justify-center">
            <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
              <div class="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
                <div class="flex flex-col md:flex-row items-center">
                  <div class=" w-full overflow-hidden">
                    {" "}
                    <img
                      src="https://source.unsplash.com/700x350/?city"
                      alt=""
                      class=""
                    />{" "}
                  </div>
                  <div class="md:w-2/3 m-4 ">
                    <div class="flex text-gray-500 text-sm m-2">
                      <div class="m-1 font-bold">Vlog,</div>
                      <div class="m-1">31 March, 2023</div>
                    </div>
                    <div class="font-bold text-black text-xl m-2">
                      The 8 Best City Lights In The World!{" "}
                    </div>
                    <div class="text-sm text-gray-500 mt-4 m-2">
                      <a href="#"></a>
                    </div>
                    <div class="flex cursor-pointer">
                      <div class="m-2">
                        {" "}
                        <img
                          src="https://source.unsplash.com/50x50/?man"
                          alt=""
                          class=" rounded-full"
                        />{" "}
                      </div>
                      <div class="grid m-1">
                        <div class="font-bold text-sm hover:text-gray-600 mt-2">
                          Jason Bourne
                        </div>
                        <div class=" text-sm hover:text-gray-600">
                          Student, Los Angeles
                        </div>
                      </div>
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
