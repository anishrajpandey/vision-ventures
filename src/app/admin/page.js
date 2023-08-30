"use client";
import { db } from "@/firebase/firebase-config";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Card, Typography } from "@material-tailwind/react";
import Image from "next/image";
const Page = () => {
  const TABLE_HEAD = ["OrderID", "First Name", "Last Name", "Type"];
  const [orders, setOrders] = useState({});
  const [selectedOrder, setSelectedOrder] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const USERID = "admin";
  const PASS = "admin";
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

  useEffect(() => {
    getOrders();
  }, []);
  //delete the orders
  async function handleDeleteOrder(id) {
    let document = doc(db, "orders", id);
    deleteDoc(document)
      .then(() => {
        toast.success("Deleted Successfully");
      })
      .catch(() => {
        toast.error("Some Error Occured");
      });
  }

  //details page component
  function ShowDetailsPage({
    id,
    FirstName,
    LastName,
    Type,
    // Email,
    // Phone,
    // Description,
    // Url,
    // Address,
  }) {
    return (
      <div
        className={`${
          selectedOrder.show ? "block" : "hidden"
        }  z-50 absolute top-1/4 bg-blue-300`}
      >
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-3/12  lg:order-2 flex justify-center"></div>
          <div className="w-full lg:w-4/12 lg:order-3 lg:text-right lg:self-center">
            <div className="py-6  mt-32 sm:mt-0">
              <button
                onClick={() => {
                  setSelectedOrder({ ...selectedOrder, show: false });
                }}
                className="bg-red-500 active:bg-red-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Close
              </button>
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4 text-center text-blue-700 flex justify-end text-3xl font-bold"></div>
        </div>
        <div className="text-center mt-12 w-screen">
          <h3 className="text-4xl font-semibold text-red-600 leading-normal text-blueGray-700 mb-2">
            {selectedOrder.Type}
          </h3>
          <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
            Name: {selectedOrder.FirstName} {selectedOrder.LastName}
          </h3>
          <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
            {selectedOrder.Address}
          </div>
          <div className="mb-2 text-blueGray-600 mt-10">
            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
            {selectedOrder.Email}{" "}
          </div>
          <div className="mb-2 text-blueGray-600">
            <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
            {selectedOrder.Phone}{" "}
          </div>
        </div>
        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-9/12 px-4">
              <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                {selectedOrder.Description}
              </p>
              <div className="flex justify-center w-screen m-3 ">
                <Image
                  src={selectedOrder.Url}
                  width={500}
                  height={500}
                  alt="Unable to load the file. Click on the button below"
                />
              </div>

              <a
                href={selectedOrder.Url}
                target="blank"
                className="font-normal text-pink-500"
              >
                <button
                  type="button"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Get Access to the Shared File
                </button>
              </a>
              <button
                onClick={() => {
                  handleDeleteOrder(selectedOrder.id);
                }}
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete the order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
          <div className="h-screen pt-32">
            <h2 className="text-center text-4xl text-orange-700 font-sans font-semibold pb-2">
              Welcome To Admin Panel.{" "}
            </h2>

            {/* --------------------- */}
            <Card className="min-h-full w-full overflow-scroll">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {orders.map(({ FirstName, LastName, id, Type }, index) => (
                    <tr key={id} className="even:bg-blue-gray-50/50">
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {id}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {FirstName}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {LastName}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Type}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => {
                            setSelectedOrder((prev) => ({
                              ...prev,
                              ...orders[index],
                              show: true,
                            }));
                            console.log(selectedOrder);
                          }}
                        >
                          <Typography
                            as="a"
                            href="#"
                            variant="small"
                            color="blue-gray"
                            className="font-medium bg-blue-800 py-2 px-6 flex justify-center hover:bg-transparent transition-all hover:text-black hover:outline-2 text-white "
                          >
                            Details
                          </Typography>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
            {/* --------------------- */}
            {/* {orders.map((order) => (
            <div key={order.id}>hek</div>
          ))} */}
          </div>
        </>
      )}

      {/* login page ends here */}
      <button onClick={getOrders}>log it </button>
      <ShowDetailsPage />

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
