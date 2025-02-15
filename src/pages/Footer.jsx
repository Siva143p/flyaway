import React from "react";
import "@/styles/Footer.css";
import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
//
import logo from "@/assets/imgs/Flyaway Logo.png";
import paypal from "@/assets/imgs/paypal.svg";
import visa from "@/assets/imgs/visa.svg";
import mastercard from "@/assets/imgs/mastercard.svg";
import AMEX from "@/assets/imgs/amex.svg";
import maestro from "@/assets/imgs/maestro.svg";
import facebook from "@/assets/imgs/facebook.png";
import X from "@/assets/imgs/x.png";
import insta from "@/assets/imgs/insta.png";
// import paypal from "@/assets/imgs/paypal.svg";
// import paypal from "@/assets/imgs/paypal.svg";

const Footer = () => {
  const navigate = useNavigate();
  const Footer_content = [
    {
      heading: "Airports",
      links: [
        { title: "Gatwick Airport", path: "/" },
        { title: "Heathrow Airport", path: "/" },
        { title: "Birmingham Airport", path: "/" },
        { title: "Manchester Airport", path: "/" },
        { title: "Stansted Airport", path: "/" },
        { title: "Luton Airport", path: "/" },
      ],
    },
    {
      heading: "Useful Links",
      links: [
        { title: "About Us", path: "/AboutUs" },
        { title: "Contact Us", path: "/" },
        { title: "Privacy Policy", path: "/" },
        { title: "Payment Policy", path: "/" },
        { title: "Terms & Conditions", path: "/" },
      ],
    },
  ];

  const PaymentLinks = [
    { img: paypal, link: "#", id: "Paypal" },
    { img: visa, link: "#", id: "Visa" },
    { img: mastercard, link: "#", id: "Mastercard" },
    { img: AMEX, link: "#", id: "AMEX" },
    { img: maestro, link: "#", id: "Maestro" },
  ];

  const Socials = [
    {
      name: "Facebook",
      img: facebook,
      link: "https://www.facebook.com/share/18BUJNE388/",
    },
    {
      name: "X",
      img: X,
      link: "https://x.com/ParkingFlyaway",
    },
    {
      name: "Instagram",
      img: insta,
      link: "https://www.instagram.com/flyaway.parking/",
    },
    {
      name: "Linkedin",
      icon: (props) => <FaLinkedin {...props} />,
      link: "https://linkedin.com/company/flyaway-parking",
    },
    {
      name: "Youtube",
      icon: (props) => <IoLogoYoutube {...props} />,
      link: "https://www.youtube.com/@FlyawayParking",
    },
  ];

  const ContactUs = [
    {
      detail: `20-22 Wenlock Road, London,
England N1 7GU`,
      icon: (props) => <FaAddressBook {...props} />,
    },
    {
      detail: `Reg No. 13178143`,
    },
    {
      detail: `info@flyawayparking.co.uk`,
      icon: (props) => <HiMail {...props} />,
    },
    {
      detail: `1963868389`,
      icon: (props) => <FaPhone {...props} />,
    },
  ];
  return (
    <footer className="mt-20 bg-[#22487F] text-white w-container-fluid">
      <div className="flex max-lg:flex-col lg:gap-5 max-w-container mx-auto p-[6vh]">
        <div className="!w-[30%] max-lg:!w-[70%] max-sm:!w-full flex flex-col xl:px-[6vh]">
          <img
            src={logo}
            alt="Logo"
            className="bg-white w-[12rem] rounded-lg"
          />
          <p className="text-p leading-p text-left mt-4 w-[70%]">
            Flyaway You provides highly efficient yet cheap services for your
            meet and greet valet parking requirements at Airports in UK
          </p>

          <div className="flex gap-5 items-center mt-6">
            {Socials.map((item) => (
              <a
                href={item.link}
                key={item.name}
                className={`${
                  item.name === "X" ? "bg-white rounded-full" : ""
                } block w-7 h-7`}
              >
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full !bg-transparent"
                  />
                ) : (
                  <span
                    className={`${
                      item.name === "Linkedin" ? "bg-[#0A66c2]" : "bg-[#FF0000]"
                    } w-6 h-6 flex justify-center items-center`}
                  >
                    {item.icon({ className: "" })}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="w-[60%] max-lg:w-full max-lg:mt-5 flex gap-5 max-sm:flex-col">
          {Footer_content.map((item, index) => (
            <ul
              className="w-[40%] max-sm:w-full text-left max-sm:my-2"
              key={index}
            >
              <h4 className="text-card-hearder leading-card-hearder font-bold text-primary-highlight">
                {item.heading}
              </h4>

              {item.links.map((link, index) => (
                <li
                  className="my-2 hover:underline cursor-pointer hover:text-primary-highlight text-p leading-p"
                  onClick={() => navigate(link.path)}
                  key={index}
                >
                  {link.title}
                </li>
              ))}
            </ul>
          ))}

          <div className="text-left text-base">
            <h4 className="text-2xl text-primary-highlight font-bold">
              Contact Us
            </h4>
            <div className="mt-4">
              {ContactUs.map((item, index) => (
                <div key={index} className="flex gap-4 items-center mb-4">
                  {item.icon ? (
                    item.icon({ className: "w-5 h-5 p-0 m-0" })
                  ) : (
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  )}
                  <p className="text-p leading-p">{item.detail}</p>
                </div>
              ))}
            </div>
            {/*  */}
            <div className="flex gap-8 flex-wrap mt-4">
              {PaymentLinks.map((item) => (
                <a key={item.id} href={item.link}>
                  <img
                    src={item.img}
                    alt=""
                    className="w-11 h-11 object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 text-p border-gray-600 mt-5 pt-4 pb-[6vh] text-gray-400">
        &copy; 2025 Flyaway. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
