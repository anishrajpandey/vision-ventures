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
    const fileref = ref(storage, `gallery/${FileName.name + uuidv4()} `);
    await uploadBytes(fileref, FileName);
    let url = await getDownloadURL(fileref);

    return url;
  };

  async function handleSubmitOrder(e) {
    setLoading(true);
    e.preventDefault();

    let url = (await uploadImage()) || null;
    //posting to the database

    const addWorksref = collection(db, "gallery");
    let response = await addDoc(addWorksref, {
      ...addedDetails,
      ImageURL: url,
    });
    // console.log(response);
    setLoading(false);
    toast.success("Uploaded Successfully. Check the website 💖", {
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
        <Typography variant="h2" className="mt-4 text-center">
          Add Images to Gallery
        </Typography>
        <Typography variant="h4" className="text-center">
          Upload the image{" "}
        </Typography>
        <div className="mb-6 w-96 mx-auto">
          <label
            htmlFor="base-input"
            className="block mb-2 text-md font-medium text-gray-900 "
          >
            Title
          </label>
          <Input
            onChange={(e) => {
              setaddedDetails({ ...addedDetails, Title: e.target.value });
            }}
            type="text"
            className="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Enter Title Here"
          />
        </div>
        <div className="w-96 mx-auto mb-6">
          {" "}
          <label
            htmlFor="base-input"
            className="block mb-2 text-md font-medium text-gray-900 "
          >
            Date
          </label>
          <Input
            type="date"
            onChange={(e) => {
              let date = new Date(e.target.value);

              let dateArr = date.toString().split(" ");
              let year = dateArr[3];
              let month = dateArr[1];
              let fullDate = month + ", " + year;
              console.log(fullDate);
              setaddedDetails({ ...addedDetails, Date: fullDate });
            }}
            size="lg"
            placeholder="Date "
          />
        </div>
        <div className="w-96 mx-auto mb-6 ">
          <div className="flex gap-2 flex-col justify-center w-full pt-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs pl-4 font-bold mb-2"
              htmlFor="grid-state"
            >
              Choose File to Upload*
            </label>
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-100 dark:hover:bg-bray-800  hover:bg-gray-100 "
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                {FileName?.name ? (
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {FileName.name}
                  </p>
                ) : (
                  <>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </>
                )}
              </div>
              <input
                required
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(e) => {
                  setFileName(e.target.files[0]);
                  console.log(e.target.files[0].name);
                }}
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="inline-block py-4 text-xl mx-auto text-white bg-gray-800 px-7 hover:bg-gray-700 rounded-xl"
        >
          Add Image
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
