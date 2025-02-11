import React, { useState } from "react";
import "@/styles/Service.css";
import { FaLongArrowAltRight } from "react-icons/fa";
//
import MeetAndGreet from "@/assets/imgs/MeetandGreet.svg";
import ParkAndRide from "@/assets/imgs/ParkandRide.svg";
import OnsiteAirportParking from "@/assets/imgs/onsite_Parking.svg";

const Service = () => {
  const [hover, setHover] = useState("");
  const Services = [
    {
      img: MeetAndGreet,
      title: "Meet And Greet",
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum vel atque quas deserunt beatae. Ullam, aspernatur non odit magnam provident.`,
    },
    {
      img: ParkAndRide,
      title: "Park And Ride",
      text: `Enjoy convenient and cost-effective parking options with our Park and Ride service. Park in secure lots and take a quick shuttle to the airport.`,
    },
    {
      img: OnsiteAirportParking,
      title: "Onsite Airport Parking",
      text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum vel atque quas deserunt beatae. Ullam, aspernatur non odit magnam provident.`,
    },
  ];
  return (
    <div className="w-full px-[8vh] max-sm:px-[4vh] py-8">
      <div className="">
        <p className="text-h2 leading-h2 font-bold">
          We are Providing Excellent
          <span className="text-primary-highlight font-bold"> Service </span>for
          you.
        </p>
        <p className="text-p leading-p mt-2 font-semibold">
          Find the best parking options for your convenience and peace of mind.
        </p>
      </div>
      {/*  */}
      <div className="max-w-container mx-auto flex flex-wrap justify-between my-4 !w-full">
        {/*  */}
        {Services.map((service, index) => (
          <div
            className="w-[368px] max-sm:!w-full h-[450px] bg-white rounded-lg relative overflow-hidden shadow-md my-2 mx-auto group"
            onMouseEnter={() => setHover(service.title)}
            onMouseLeave={() => setHover("")}
            key={index}
          >
            <img
              src={service.img}
              alt=""
              className="w-full h-full object-contain group-hover:scale-125 transition-all duration-300"
            />

            <div
              className={`${
                hover === service.title ? "top-0 h-full" : "bottom-0 h-[48%]"
              }  w-full absolute left-0 transition-all`}
              style={{
                background: `linear-gradient(
             to right,
             rgba(0, 0, 0, 0.4),
             rgba(0, 0, 0, 0.6)
           )`,
              }}
            >
              {hover !== service.title ? (
                <>
                  {service.title.split(" ").map((text, index) => (
                    <p className="sub-header-service-grid-bottom" key={index}>
                      {text} <br />
                    </p>
                  ))}
                </>
              ) : (
                <div className="w-full h-full py-8 px-12">
                  <div className="text-white">
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-p leading-p">{service.text}</p>
                  </div>

                  <div className="absolute bottom-8 left-5 text-orange-400 text-p leading-p">
                    <p>Read More</p>
                    <FaLongArrowAltRight className="ml-8" />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
