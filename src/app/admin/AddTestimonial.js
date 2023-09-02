import { Input, Textarea, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";

import { db, storage } from "@/firebase/firebase-config";
const AddTestimonial = () => {
  const [FileName, setFileName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [addedDetails, setaddedDetails] = useState({});

  const uploadImage = async () => {
    if (FileName == null) return;
    const fileref = ref(storage, `files/${FileName.name + uuidv4()} `);
    await uploadBytes(fileref, FileName);
    let url = await getDownloadURL(fileref);

    return url;
  };

  async function handleSubmitOrder(e) {
    setLoading(true);
    e.preventDefault();

    let url = (await uploadImage()) || null;
    //posting to the database

    const addWorksref = collection(db, "testimonials");
    let response = await addDoc(addWorksref, {
      ...addedDetails,
      ImageURL: url,
    });
    // console.log(response);
    setLoading(false);
    toast.success("Added Successfully. Check the website", {
      position: "bottom-right",
      autoClose: 8000,
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
      <form className="flex flex-col items-center" onSubmit={handleSubmitOrder}>
        <Typography variant="h2" className="text-center">
          Add Testimonials
        </Typography>
        <Typography variant="h4" className="text-center">
          Fill In the details
        </Typography>
        <div class="mb-6 w-96 mx-auto">
          <label
            for="base-input"
            class="block mb-2 text-md font-medium text-gray-900 "
          >
            Name of Person
          </label>
          <Input
            onChange={(e) => {
              setaddedDetails({ ...addedDetails, Name: e.target.value });
            }}
            type="text"
            placeholder="Example Dilip Shrestha"
            class="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
        <div class="mb-6 w-96 mx-auto">
          <label
            for="base-input"
            class="block mb-2 text-md font-medium text-gray-900 "
          >
            Post of Person
          </label>
          <Input
            onChange={(e) => {
              setaddedDetails({ ...addedDetails, Post: e.target.value });
            }}
            type="text"
            class="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Example CEO, vision ventures"
          />
        </div>
        <div class="mb-6 w-96 mx-auto">
          <label
            for="base-input"
            class="block mb-2 text-md font-medium text-gray-900 "
          >
            Testimonial
          </label>
          <Textarea
            onChange={(e) => {
              setaddedDetails({ ...addedDetails, Testimonial: e.target.value });
            }}
            rows={8}
            type="text"
            class="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="I like this software because...."
          />
        </div>
        <div class="mb-6 w-96 mx-auto">
          <label
            for="base-input"
            class="block mb-2 text-md font-medium text-gray-900 "
          >
            Upload Image of the Person
          </label>
          <Input
            onChange={(e) => {
              setFileName(e.target.files[0]);
            }}
            type="file"
            accept=".png,.jpg,.svg,.jpeg"
            class="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
        <button class="inline-block py-4 text-xl mx-auto text-white bg-gray-800 px-7 hover:bg-gray-700 rounded-xl">
          Add Testimonial
        </button>
      </form>

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
    </>
  );
};

export default AddTestimonial;
