"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import Works from "./Works";
import Testimonials from "./Testimonials";
import Gallery from "@/components/Gallery";

function TabsCustomAnimation() {
  const data = [
    {
      label: "Our Works",
      value: "works",
      desc: <Works />,
    },
    {
      label: "Testimonials",
      value: "testimonials",
      desc: <Testimonials />,
    },

    {
      label: "Gallery",
      value: "gallery",
      desc: <Gallery />,
    },
  ];

  return (
    <Tabs id="custom-animation" value="html" className="outline-1">
      <Typography variant="h4" className="text-center pb-3">
        Click on the respective Sections Below 👇
      </Typography>

      <TabsHeader
        className="text-black bg-transparent  "
        indicatorProps={{
          className: "bg-gray-900/10 shadow-none !text-gray-900",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className="font-semibold text-2xl text-orange-800"
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default function Page() {
  return (
    <>
      <section className="min-h-screen pt-0 md:pt-32">
        <TabsCustomAnimation />
      </section>
    </>
  );
}
