import Image from "next/image";
import Link from "next/link";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const serviceList = [
    {
      id: 1,
      title: "Photography and Videography",
      description:
        "Our team of experts specialize in photography and videography services, providing stunning visuals that tell your brands story and connect with your target audience.",
      url: "/services/photography",
      img1: "/images/photography1.jpg",
      img2: "/images/photography2.jpg",
    },
    {
      id: 2,
      title: "Event management ",
      description:
        "We also provide event management services to help plan and execute successful events, from corporate meetings to product launches and everything in between. Our office infrastructure services help businesses optimize their workspace for maximum efficiency and productivity.",
      url: "/services/eventmanagement",
      img1: "/images/event1.jpg",
      img2: "/images/event2.jpg",
    },
    {
      id: 3,
      title: " Hardware and Software Solutions ",
      description:
        "We provide hardware and network services to ensure your business runs smoothly, including computer and network setup, troubleshooting, and maintenance. Our software development team can also create custom solutions to address your specific business needs",
      url: "/services/hardware",
      img1: "/images/hardwarenetwork1.jpg",
      img2: "/images/hardwarenetwork2.png",
    },
    {
      id: 4,
      title: " Graphic Design/ Animation & Logo Design ",
      description:
        " Our graphic designers create visually appealing marketing assets, including logos, brochures, and marketing collateral that convey your brand's message effectively.",
      url: "/services/graphic",
      img1: "/images/graphic1.jpg",
      img2: "/images/graphic2.jpg",
    },
    {
      id: 5,
      title: "SEO and Web Development",
      description:
        "Our SEO services help your website rank higher in search engine results, driving more traffic and leads to your business. Additionally, our website design and development services create user-friendly and visually appealing websites that align with your brand's identity.",
      url: "/services/seo",
      img1: "/images/seo1.jpeg",
      img2: "/images/seo2.jpg",
    },
    {
      id: 6,
      title: " Digital Media management -marketing ",
      description:
        "We also offer digital media management services, including social media management and online advertising campaigns. Our graphic designers create visually appealing marketing assets, including logos, brochures, and marketing collateral that convey your brand's message effectively.",
      url: "/services/marketing",
      img1: "/images/marketing1.jpg",
      img2: "/images/marketing2.jpg",
    },
    {
      id: 7,
      title: "Software and Website Design & Development ",
      description:
        "Are you looking for a web development agency that can help you take your business to the next level? Look no further! We are a team of experienced web developers who are passionate about helping businesses succeed. We have a proven track record of creating high-quality websites that are both functional and visually appealing",
      url: "/services/webdev",
      img1: "/images/webdev2.jpg",
      img2: "/images/seo2.jpg",
    },
    {
      id: 8,
      title: "Software and Website Design & Development ",
      description:
        "Are you looking for a web development agency that can help you take your business to the next level? Look no further! We are a team of experienced web developers who are passionate about helping businesses succeed. We have a proven track record of creating high-quality websites that are both functional and visually appealing",
      url: "/services/webdev",
      img1: "/images/officeinfrastructure.png",
      img2: "/images/event1.jpg",
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-stretch ">
          {serviceList.map((options) => (
            <ServiceItem key={options.id} {...options} title={options.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
