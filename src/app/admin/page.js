"use client";
import { db } from "@/firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";

import { useState } from "react";
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
  }
  return (
    <>
      <div className="h-screen"></div>
      <button onClick={getOrders}>log it </button>
    </>
  );
};

export default Page;
