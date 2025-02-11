import React from "react";
import "@/styles/Benefits.css";
import checkbox from "@/assets/imgs/checkbox.svg";
import euro from "@/assets/imgs/euro.svg";
import shield from "@/assets/imgs/shield.svg";
import help from "@/assets/imgs/customercare.svg";

const Benefits = () => {
  const Benefits = [
    { img: checkbox, text: "Few Easy Booking Steps" },
    { img: euro, text: "Competitive Parking Price" },
    { img: shield, text: "Secure Payment Option" },
    {
      img: help,
      text: "24/7 Customer Support",
    },
  ];
  return (
    <div className="w-full m-0 mt-6 max-lg:hidden">
      <p className="text-xl font-semibold">Explore New Places with</p>
      <div className="flex flex-wrap gap-[2%]">
        {Benefits.map((item, index) => (
          <div
            className="flex gap-4 items-center bg-white w-[48%] max-sm:w-full max-lg:w-[48%] max-xl:w-full rounded-md p-4 text-black text-base font-semibold my-2"
            key={index}
          >
            <img src={item.img} alt="" className="w-7 h-7 object-cover" />
            <p className="">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
