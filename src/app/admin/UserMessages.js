import {
  Chip,
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import React from "react";
import { db } from "@/firebase/firebase-config";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const UserMessages = () => {
  const [loading, setLoading] = useState(false);
  const [Messages, setMessages] = useState([]);
  let collectionRef = collection(db, "messages");
  async function deleteMessage(id) {
    setLoading(true);
    let document = doc(db, "messages", id);

    deleteDoc(document)
      .then(() => {
        toast.success("Deleted Successfully");
      })
      .catch(() => {
        toast.error("Some Error Occured");
      });
    getMessages();
    setLoading(false);
  }
  async function handleDeleteOrder(id) {}
  async function getMessages() {
    let data = await getDocs(collectionRef);
    setMessages((order) =>
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  }
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      {Messages?.map(({ Name, Email, Subject, Message, id }) => {
        return (
          <div
            key={id}
            className="mb-4 rounded-lg px-6 py-5 text-base bg-orange-100 text-gray-900"
            role="alert"
          >
            <h4 className=" flex justify-between mb-2 text-2xl font-medium leading-tight">
              <div>{Subject}</div>
              <div>
                <button
                  onClick={() => {
                    deleteMessage(id);
                  }}
                  type="button"
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Delete
                </button>
              </div>
            </h4>
            <div className="flex">
              {" "}
              <Chip value={Name} className="rounded-full" />.
              <Chip variant="outlined" value={Email} className="rounded-full" />
            </div>

            <hr className="border-success-600 opacity-30" />
            <p className="mb-0 mt-4 text-lg font-sans-serif font-semibold">
              {Message}
            </p>
          </div>
        );
      })}
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
      <Dialog
        open={loading}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="text-center">Loading...</DialogHeader>
        <DialogBody divider>
          <div className="flex w-full items-center justify-center bg-white overflow-y-hidden">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default UserMessages;
