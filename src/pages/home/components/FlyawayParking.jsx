import React from "react";
import "@/styles/FlyawayParking.css";
//
import SaveMoney from "@/assets/imgs/save_money.png";
import SaveTime from "@/assets/imgs/save_time.png";
import SecureParking from "@/assets/imgs/secure_parking.png";

const FlyawayParking = () => {
  const Reasons = [
    {
      id: 1,
      title: "Save Money",
      text: "Compare our parking rates with on-airport parking rates and save upto 70%",
      img: SaveMoney,
    },
    {
      id: 2,
      title: "Save Time",
      text: ` Comparing parking options at all major airports has never been
            easier. You can make a reservation in just a few clicks!`,
      img: SaveTime,
    },
    {
      id: 3,
      title: "Secure Parking",
      text: "Make a reservation in advance to ensure a parking spot.",
      img: SecureParking,
    },
  ];
  return (
    <div className="flyaway-container px-[6vh] py-10">
      <div className="max-w-container mx-auto">
        <div className="">
          <p className="text-h2 font-bold leading-h2">
            Why
            <span className="text-primary-highlight font-bold"> Flyaway </span>
            Parking
          </p>
          <p className="text-p leading-p font-semibold mt-4">
            What Can You Save With Our Website
          </p>
        </div>

        <div className="w-[90%] flex flex-wrap mx-auto justify-between mt-28 pb-10">
          {Reasons.map((reason) => (
            <div
              className="lg:w-[30%] xl:w-[26%] group max-sm:w-[100%] md:w-[45%] max-sm:my-10 max-h-[25rem] pb-10 bg-white hover:bg-orange-50 relative rounded-lg shadow-md p-6 border-2 border-b-orange-400 mx-auto last:md:mt-20 last:lg:mt-0 flex justify-center"
              key={reason.id}
            >
              <div className="absolute -top-16">
                <div className="w-32 h-32 rounded-full border-2 border-dashed border-orange-400 relative flex justify-center items-center group-hover:animate-spin"></div>

                <div className="w-32 h-32 rounded-full flex justify-center items-center absolute top-0 left-0">
                  <div className="bg-[#22487F] h-[70%] w-[70%] rounded-full flex justify-center items-center">
                    <img src={reason.img} alt="" className="w-14 h-14" />
                  </div>

                  <span className="w-7 h-7 bg-orange-400 rounded-full absolute top-0.5 right-2 text-p leading-p flex justify-center items-center text-white font-semibold">
                    {reason.id}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-16">
                <p className="text-3xl text-orange-400 font-bold">
                  {reason.title}
                </p>
                <p className="mt-3 text-p leading-p">{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlyawayParking;
