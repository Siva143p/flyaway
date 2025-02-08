import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "@/styles/Navbar.css";
import { LuClock3 } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [status, setStatus] = useState({ isMenuOpen: false, active: "Home" });
  const [hover, setHover] = useState("");

  useEffect(() => {
    if (status.isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [status.isMenuOpen]);

  const Menus = [
    { menu: "Home", path: "/" },
    { menu: "About Us", path: "/AboutUs" },
    { menu: "Faq's", path: "/FAQ" },
    { menu: "Contact Us", path: "/ContactUs" },
  ];

  const Social = [
    {
      name: "Facebook",
      img: "/src/assets/imgs/facebook.png",
      link: "https://www.facebook.com/share/18BUJNE388/",
    },
    {
      name: "X",
      img: "/src/assets/imgs/x.png",
      link: "https://x.com/ParkingFlyaway",
    },
    {
      name: "Instagram",
      img: "/src/assets/imgs/insta.png",
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

  return (
    <div className="w-container-fluid">
      <div className="bg-[#22487F]">
        <div className="links max-w-container mx-auto py-1 max-lg:!justify-center max-lg:py-2">
          <div className={`left ${status.isMenuOpen ? "hide-left" : ""}`}>
            <span className="flex items-center gap-3">
              <IoMdMail className="w-5 h-5" />

              <a
                href="mailto:info@flyawayparking.co.uk"
                className="text-gray-200 hover:text-white"
              >
                info@flyawayparking.co.uk &nbsp; | &nbsp;
              </a>
            </span>
            <span className="flex items-center">
              <LuClock3 className="w-5 h-5" />
              &nbsp; Mon - Fri 9:00 A.M - 5:00 P.M
            </span>
          </div>
          <div className="right">
            <span>Follow On</span>
            {Social.map((item, index) => (
              <div key={item.name} className="flex gap-2 items-center">
                <a
                  href={item.link}
                  className={`${
                    item.name === "X" ? "block bg-white rounded-full" : ""
                  }`}
                >
                  {item.img ? (
                    <img src={item.img} alt={item.name} />
                  ) : (
                    <span
                      className={`${
                        item.name === "Linkedin"
                          ? "bg-[#0A66c2]"
                          : "bg-[#FF0000]"
                      } w-6 h-6 flex justify-center items-center`}
                    >
                      {item.icon({ className: "" })}
                    </span>
                  )}
                </a>
                {index === Social.length - 1 ? "" : "|"}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="nav-links max-w-container mx-auto">
        <nav className="Navbar">
          <img
            src="/src/assets/imgs/Flyaway Logo.png"
            className="w-20 h-16 object-contain"
            alt="Logo"
          />
          <ul
            className={`menu ${
              status.isMenuOpen
                ? "active !flex gap-4 justify-start !items-start"
                : ""
            }`}
          >
            {Menus.map((Menu, index) => (
              <li key={index} className="relative">
                <Link
                  to={Menu.path}
                  className={`py-2 custom-link relative text-white transition-all duration-300 font-semibold ${
                    status.active === Menu.menu
                      ? "text-primary-highlight"
                      : "hover:text-primary-highlight"
                  } hover:text-primary-highlight`}
                  onClick={() =>
                    setStatus({
                      active: Menu.menu,
                      isMenuOpen: false,
                    })
                  }
                  onMouseEnter={() => setHover(Menu.menu)}
                  onMouseLeave={() => setHover("")}
                >
                  {Menu.menu}

                  <span
                    className={`absolute left-0 bottom-0 h-[3px] bg-orange-500 transition-all duration-300`}
                    style={{
                      width:
                        status.active === Menu.menu
                          ? "100%"
                          : hover === Menu.menu
                          ? "100%"
                          : "0%",
                      transition: "width 0.3s ease-in-out",
                    }}
                  />
                </Link>
              </li>
            ))}

            {!status.isMenuOpen && (
              <li className="phone-container">
                <a href="tel:+91963868389" className="relative">
                  <img
                    src="/src/assets/imgs/call.png"
                    className="w-9 h-9"
                    alt="Call Icon"
                  />
                  <div className="animate-ping w-9 h-9 bg-[#1E3A8A] absolute top-0 left-0 rounded-full"></div>
                </a>
                <span>
                  {" "}
                  <p className="text-sm text-neutral-600 text-left !font-normal">
                    Phone Number
                  </p>
                  <a
                    href="tel:+91963868389"
                    className="text-left text-lg font-bold"
                  >
                    0196 386 8389
                  </a>
                </span>
              </li>
            )}
          </ul>
          <div
            className="hamburger"
            onClick={() =>
              setStatus({
                active: status.active,
                isMenuOpen: !status.isMenuOpen,
              })
            }
          >
            {status.isMenuOpen ? (
              <IoMdClose className="w-5 h-5" />
            ) : (
              <>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
