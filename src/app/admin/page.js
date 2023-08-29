"use client";
import { db } from "@/firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Card, Typography } from "@material-tailwind/react";

const Page = () => {
  const TABLE_HEAD = ["OrderID", "First Name", "Last Name", "Type"];
  const [orders, setOrders] = useState({});

  const [isAdmin, setIsAdmin] = useState(false);
  const USERID = "admin";
  const PASS = "admin";
  const handleSubmit = (e) => {
    e.preventDefault();
    const elements = e.target.elements;
    console.log(elements[0].value);
    console.log(elements[1].value);
    if (elements[0].value == USERID && elements[1].value == PASS) {
      setIsAdmin(true);
      toast.success("Logged in as admin", {
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

  return (
    <>
      {!isAdmin ? (
        <div class="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center pt-8">
          <div class="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl">
            <h2 className="text-2xl text-center mt-2 font-semibold">
              Admin Login Page
            </h2>
            <form class="p-12 md:p-24" onSubmit={handleSubmit}>
              <div class="flex items-center text-lg mb-6 md:mb-8">
                <svg class="absolute ml-3" width="24" viewBox="0 0 24 24">
                  <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
                </svg>
                <input
                  type="text"
                  id="username"
                  class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                  placeholder="Username"
                />
              </div>
              <div class="flex items-center text-lg mb-6 md:mb-8">
                <svg class="absolute ml-3" viewBox="0 0 24 24" width="24">
                  <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                </svg>
                <input
                  type="password"
                  id="password"
                  class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                  placeholder="Password"
                />
              </div>
              <button class="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full">
                Login
              </button>
            </form>
          </div>
        </div>
      ) : (
        <>
          <div className="h-screen pt-32">
            <h2>Welcome Admin</h2>

            {/* --------------------- */}
            <Card className="h-full w-full overflow-scroll">
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
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium bg-blue-800 py-2 px-6 flex justify-center hover:bg-transparent transition-all hover:text-black hover:outline-2 text-white "
                        >
                          Details
                        </Typography>
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
      )}

      {/* login page ends here */}
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

function ShowDetailsPage({
  id,
  FirstName,
  LastName,
  Type,
  Email,
  Phone,
  Description,
  Url,
  Address,
}) {
  return (
    <div class="absolute top-1/2 flex flex-col pt-12 min-w-0 break-words bg-white w-screen mb-6 shadow-xl rounded-lg -mt-64">
      <div class="px-6">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"></div>
          <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
            <div class="py-6 px-3 mt-32 sm:mt-0">
              <button
                class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Connect
              </button>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4 lg:order-1">
            <div class="flex justify-center py-4 lg:pt-4 pt-8">
              <div class="mr-4 p-3 text-center">
                <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  22
                </span>
                <span class="text-sm text-blueGray-400">Friends</span>
              </div>
              <div class="mr-4 p-3 text-center">
                <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  10
                </span>
                <span class="text-sm text-blueGray-400">Photos</span>
              </div>
              <div class="lg:mr-4 p-3 text-center">
                <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  89
                </span>
                <span class="text-sm text-blueGray-400">Comments</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
            Jenna Stones
          </h3>
          <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
            <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
            Los Angeles, California
          </div>
          <div class="mb-2 text-blueGray-600 mt-10">
            <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
            Solution Manager - Creative Tim Officer
          </div>
          <div class="mb-2 text-blueGray-600">
            <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
            University of Computer Science
          </div>
        </div>
        <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-9/12 px-4">
              <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                An artist of considerable range, Jenna the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure. An artist of considerable
                range.
              </p>
              <a href="#pablo" class="font-normal text-pink-500">
                Show more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page;
