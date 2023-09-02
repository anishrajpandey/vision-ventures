import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "@/firebase/firebase-config";
import { ToastContainer, toast } from "react-toastify";
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";

export default function AddWorks() {
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

    const addWorksref = collection(db, "works");
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
    <Card
      className=" -screen flex  items-center"
      color="transparent"
      shadow={true}
    >
      <Typography variant="h4" color="blue-gray">
        Add Works
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form
        onSubmit={handleSubmitOrder}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input
            onChange={(e) => {
              setaddedDetails({ ...addedDetails, ProjectName: e.target.value });
            }}
            size="lg"
            placeholder="Name of the organization"
          />
          <Input
            onChange={(e) => {
              setaddedDetails({ ...addedDetails, ProjectType: e.target.value });
            }}
            size="lg"
            placeholder="Type of the project ( Eg: Digital Marketing, SEO , etc)"
          />
          <Input
            onChange={(e) => {
              setaddedDetails({ ...addedDetails, Date: e.target.value });
            }}
            size="lg"
            placeholder="Date "
          />
          <Input
            onChange={(e) => {
              setaddedDetails({ ...addedDetails, Description: e.target.value });
            }}
            size="lg"
            placeholder="Description "
          />
          <Input
            onChange={(e) => {
              setaddedDetails({ ...addedDetails, URL: e.target.value });
            }}
            size="lg"
            placeholder="URL of the project to showcase "
          />
          <Input
            onChange={(e) => {
              setFileName(e.target.files[0]);
            }}
            type="file"
            accept=".jpg, .png, .svg, .jpeg"
            label="Upload Image of the project"
          ></Input>
        </div>
        <br />
        <Typography
          variant="small"
          color="gray"
          className="flex items-center font-normal"
        >
          It will be reflected in the website
          <a
            href="#"
            className="font-medium transition-colors hover:text-gray-900"
          >
            &nbsp;shortly
          </a>
        </Typography>

        <Button className="mt-6" fullWidth type="submit">
          Register
        </Button>
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
    </Card>
  );
}
