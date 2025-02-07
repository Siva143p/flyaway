import React from "react";
import Benefits from "./Benefits";
import "@/styles/App.css";

const ParkingInfo = () => {
  return (
    <div className="parking-info w-[45%] max-lg:w-[90%] max-sm:w-full">
      <h1 className="!text-h1 font-bold w-[70%] max-sm:w-full max-[1125px]:w-full leading-[5rem]">
        Let&apos;s Find Your Best{" "}
        <span className="text-primary-highlight font-bold">Parking</span>{" "}
        Lot&apos;s{" "}
      </h1>
      <Benefits />
    </div>
  );
};

export default ParkingInfo;
