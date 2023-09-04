import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div class="flex justify-center pt-0 md:pt-0 md:pt-32 ">
      <div class="flex flex-col justify-center items-center">
        <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
          <div class="overflow-hidden w-2/3 m-4 flex justify-center ">
            <div class="flex  items-center justify-center  ">
              <div class="  items-center justify-center flex flex-col lg:flex-row ">
                <div class="flex items-center justify-around h-60  w-full lg:text-left text-center ">
                  <div class="flex flex-col md:flex-row items-center  ">
                    <img
                      src="https://source.unsplash.com/100x100/?man,boy"
                      alt=""
                      class="rounded-full"
                    />
                    <div>
                      <div class="font-bold text-gray-600 mx-4">John Doe</div>
                      <div class="text-sm font-medium text-gray-500 hover:text-stone-500 mx-4">
                        <a href="#">SEO Executive, Tailblocks</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-gray-600 text-xl font-medium lg:text-left text-center ">
                  {" "}
                  Tailblocks provides best Tailwind CSS Components and Blocks to
                  create an unique websites within minutes. It has upto 60+ free
                  components for front-end Web Development.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <main className="flex flex-wrap w-screen bg--600">
    //   <section className="flex items-center pt-20  xl:h-screen  ">
    //     <div className="justify-center flex-1 max-w-6xl px-4 mx-auto lg:py-6 md:px-6 h-fit bg-slate-100 rounded-xl">
    //       <address class="flex items-center mb-6 not-italic">
    //         <div class="inline-flex  items-center mr-3 text-sm text-gray-900  h-36 ">
    //           <div class="inline-flex relative items-center mr-3 text-sm text-gray-900 w-24 h-24">
    //             <Image
    //               fill
    //               class="mr-4 w-16 h-16 rounded-full"
    //               src="/images/founder.jpg"
    //               alt="Unable to load image"
    //             />
    //           </div>
    //           <div>
    //             <a
    //               href="https://www.facebook.com/profile.php?id=100016064358963"
    //               rel="founder"
    //               target="_blank"
    //               class="text-xl font-bold text-gray-900 "
    //             >
    //               Mr. Dilip Shrestha
    //             </a>
    //             <p class="text-base font-semibold text-gray-500 ">
    //               Founder & CEO,
    //             </p>
    //             <p class="text-base font-light text-gray-500 ">
    //               Vision Ventures Branding Company Private Limited
    //             </p>
    //           </div>
    //         </div>
    //       </address>
    //     </div>
    //   </section>
    // </main>
  );
};

export default About;
