"use client";
import { db } from "@/firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import AdminLoginPage from "@/components/AdminLoginPage";
const Page = () => {
  const [orders, setOrders] = useState({});
  let collectionRef = collection(db, "orders");
  async function getOrders() {
    let data = await getDocs(collectionRef);
    //   setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setOrders((order) =>
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    console.log(orders);
    toast.success("🦄got orders", {
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

  return (
    <>
      <h1 className="text-center">Login with admin credentials</h1>
      <AdminLoginPage />
      <button onClick={getOrders}>log it </button>
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
