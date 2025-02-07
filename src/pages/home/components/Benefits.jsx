import React from "react";
import "@/styles/Benefits.css";

const Benefits = () => {
  const Benefits = [
    { img: "/src/assets/imgs/checkbox.svg", text: "Few Easy Booking Steps" },
    { img: "/src/assets/imgs/euro.svg", text: "Competitive Parking Price" },
    { img: "/src/assets/imgs/shield.svg", text: "Secure Payment Option" },
    {
      img: "/src/assets/imgs/customercare.svg",
      text: "24/7 Customer Support",
    },
  ];
  return (
    <div className="w-full m-0 mt-6">
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
