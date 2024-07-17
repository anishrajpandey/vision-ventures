"use client";
import { db } from "@/firebase/firebase-config";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import ManageOrder from "./ManageOrder";
import AddWorks from "./AddWorks";
import AddTestimonial from "./AddTestimonial";
import UserMessages from "./UserMessages";
import UploadImageToGallery from "./UploadImageToGallery";
const Page = () => {
  const [orders, setOrders] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const USERID = "Vision";
  const PASS = "Vision@2081";
  const handleSubmit = (e) => {
    e.preventDefault();
    const elements = e.target.elements;

    if (elements[0].value == USERID && elements[1].value == PASS) {
      setIsAdmin(true);
      toast.success("Logged in as admin. Welcome , Mr. Dilip Shrestha", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setIsAdmin(false);
      toast.error("Invalid Credentials", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    console.log(isAdmin);
  };

  // _____________________________________
  let collectionRef = collection(db, "orders");
  async function getOrders() {
    let data = await getDocs(collectionRef);
    setOrders((order) =>
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  }

  //for tabs data
  const data = [
    {
      label: "Manage orders",
      value: "orders",
      desc: <ManageOrder />,
    },
    {
      label: "Add works",
      value: "works",
      desc: <AddWorks />,
    },
    {
      label: "Add Testimonials",
      value: "testimonials",
      desc: <AddTestimonial />,
    },
    {
      label: "Upload Gallery Image",
      value: "gallery",
      desc: <UploadImageToGallery />,
    },
    {
      label: "See User Messages",
      value: "messages",
      desc: <UserMessages />,
    },
  ];

  useEffect(() => {
    getOrders();
    console.log(orders);
  }, []);
  //delete the orders

  //details page component

  return (
    <>
      {!isAdmin ? (
        <div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center pt-8">
          <div className="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl">
            <h2 className="text-2xl text-center mt-2 font-semibold">
              Admin Login Page
            </h2>
            <form className="p-12 md:p-24" onSubmit={handleSubmit}>
              <div className="flex items-center text-lg mb-6 md:mb-8">
                <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                  <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
                </svg>
                <input
                  type="text"
                  id="username"
                  className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                  placeholder="Username"
                />
              </div>
              <div className="flex items-center text-lg mb-6 md:mb-8">
                <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                  <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                </svg>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                  placeholder="Password"
                />
              </div>
              <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full">
                Login
              </button>
            </form>
          </div>
        </div>
      ) : (
        <>
          <Tabs value="html" className="min-h-screen pt-0 md:pt-32">
            <TabsHeader
              indicatorProps={{
                className: "bg-gray-900/10 shadow-none !text-gray-900",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className="h-fit overflow-y-scroll overflow-x-hidden ">
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value} className="h-fit">
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </>
      )}

      {/* login page ends here */}

      {/* <ShowDetailsPage /> */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Page;
