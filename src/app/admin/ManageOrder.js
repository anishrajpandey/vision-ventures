"use client";
import { db } from "@/firebase/firebase-config";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  Alert,
  Button,
  Card,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

const ManageOrder = () => {
  const TABLE_HEAD = ["OrderID", "First Name", "Last Name", "Type"];
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState({});
  //   const [isAdmin, setIsAdmin] = useState(false);
  //   const USERID = "admin";
  //   const PASS = "admin";

  // _____________________________________
  let collectionRef = collection(db, "orders");
  async function getOrders() {
    let data = await getDocs(collectionRef);
    setOrders((order) =>
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  }

  //for tabs data

  useEffect(() => {
    getOrders();
    // console.log(orders);
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
  function ShowDetailsPage() {
    return (
      <div
        className={`${
          selectedOrder.show ? "block" : "hidden"
        }  z-50 absolute top-0 left-0 bg-slate-200`}
      >
        <div className="flex flex-wrap h-full overflow-y-scroll justify-start">
          <div className="w-full lg:w-3/12  lg:order-2 flex justify-start"></div>
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
        <div className="text-left px-7 mt-12 w-screen">
          <h3 className="text-4xl font-semibold text-red-600 leading-normal text-blueGray-700 mb-2">
            {selectedOrder.Type}
          </h3>
          <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
            Name: {selectedOrder.FirstName} {selectedOrder.LastName}
          </h3>
          <div className="leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase text-xl">
            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
            Address: {selectedOrder.Address}
          </div>
          <div className="mb-2 text-blueGray-600 mt-10">
            <i className="fas fa-briefcase mr-2 text-xl font-semibold text-blueGray-400"></i>
            Email: {selectedOrder.Email}{" "}
          </div>
          <div className="mb-2 text-blueGray-600">
            <i className="fas fa-university mr-2 text-xl font-semibold text-blueGray-400"></i>
            Phone: {selectedOrder.Phone}{" "}
          </div>
        </div>
        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex flex-wrap justify-start lg:w-9/12 px-4">
              <div className="flex justify-center w-screen m-3 ">
                {selectedOrder.Url && (
                  <Image
                    src={selectedOrder.Url}
                    width={500}
                    height={500}
                    alt="Unable to load the file. Click on the button below"
                  />
                )}
              </div>
              <p className="mb-4 text-md text-center  leading-relaxed text-blueGray-700">
                {selectedOrder.Description}
              </p>
            </div>
            <div>
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
              <Button
                // startIcon={<DeleteIcon />}
                onClick={() => {
                  handleDeleteOrder(selectedOrder.id);
                  getOrders();
                  setSelectedOrder({ ...selectedOrder, show: false });
                }}
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete the order
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen h-fit overflow-scroll">
        <h2 className="text-center text-4xl text-orange-700 font-sans font-semibold pb-2">
          Welcome To Admin Panel({orders.length} orders)
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
                <Button
                  variant="contained"
                  onClick={getOrders}
                  className="bg-green-500"
                >
                  Refresh
                </Button>
              </tr>
            </thead>

            <tbody>
              {!orders[0] && (
                <Alert
                  severity="error"
                  className="w-full  my-4 p-2 bg-red-700 flex justify-center py-5"
                >
                  {/* <AlertTitle>Error</AlertTitle> */}
                  <strong>Error :</strong> No Orders Available Right Now !!
                </Alert>
              )}
              {orders.map(({ FirstName, LastName, id, Type }, index) => (
                <tr
                  key={id}
                  className="even:bg-blue-gray-50/50 border rounded-sm"
                >
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
                        className="font-medium bg-blue-800 py-2 px-6 flex justify-center hover:bg-transparent transition-all hover:text-black hover:outline-2 outline-black text-white "
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
      <ShowDetailsPage />
    </>
  );
};

export default ManageOrder;
