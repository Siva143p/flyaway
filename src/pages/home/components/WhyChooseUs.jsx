import React from "react";
import "@/styles/WhyChooseParking.css";
import {
  FaSmile,
  FaParking,
  FaShuttleVan,
  FaHandshake,
  FaTag,
  FaLock,
} from "react-icons/fa";

function WhyChooseParking() {
  const features = [
    {
      title: "Meet And Greet",
      description:
        "For individuals looking for convenient time-saving parking services.",
      icon: (props) => <FaHandshake {...props} />,
    },
    {
      title: "Park And Ride",
      description:
        "Reliable and budget-friendly parking with shuttle service to the airport.",
      icon: (props) => <FaShuttleVan {...props} />,
    },
    {
      title: "On-Site Parking",
      description:
        "Get direct access to the terminal with secure on-site parking.",
      icon: (props) => <FaParking {...props} />,
    },
    {
      title: "Best Price Guaranteed",
      description: "We ensure the best rates for all types of parking options.",
      icon: (props) => <FaTag {...props} />,
    },
    {
      title: "Secure Payment",
      description: "Safe and secure payment options for a seamless experience.",
      icon: (props) => <FaLock {...props} />,
    },
    {
      title: "Customer Satisfaction",
      description:
        "Dedicated to ensuring a satisfying experience for every customer.",
      icon: (props) => <FaSmile {...props} />,
    },
  ];

  return (
    <div className="why-choose-parking">
      <h2 className="text-h2 leading-h2 font-bold">
        Why Choose Airport Cheap Parking
      </h2>
      <p className="text-p leading-p">
        Find the best parking options for your convenience and peace of mind.
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            className="bg-white p-5 rounded-lg shadow-lg text-left border-b-2 border-b-orange-400 hover:scale-105 transition-all group hover:bg-gradient-to-tl from-blue-200"
            key={index}
          >
            <div className="w-[6rem] h-[6rem] flex justify-center items-center rounded-full group-hover:border-2 border-[#1E3A8A] border-dashed">
              <div className="bg-[#1E3A8A] w-[4rem] h-[4rem] rounded-full flex justify-center items-center">
                {feature.icon({
                  className: "h-10 w-10",
                })}
              </div>
            </div>{" "}
            <h3 className="text-blue-800 font-semibold mb-2 mt-2 text-p leading-p">
              {feature.title}
            </h3>
            <p className="text-neutral-700 !m-0 text-p leading-p">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseParking;
