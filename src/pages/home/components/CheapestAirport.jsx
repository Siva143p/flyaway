import React from "react";
import "@/styles/CheapestAirport.css";
import { CustomCarousel } from "@/components/components/shared-ui/custom-carousel";

const CheapestAirport = () => {
  const Airports = [
    {
      name: "Gatwick Airport Parking",
      about: `Whether you're looking for Meet and Greet, Park and Ride, or On-Site Parking, Gatwick Airport Parking has you covered. Our flexible services are designed to suit every traveler. With the Meet and Greet option, simply drive to the terminal, and a professional valet will handle the parking. Alternatively, use our Park and Ride for secure, budget-friendly parking with fast shuttle service to the terminal.`,
      ratings: 5,
      bookings: 1500,
      img: "/src/assets/imgs/Gatwick Airport.svg",
    },
    {
      name: "Heathrow Airport Parking",
      about: `At Heathrow Airport, we offer a range of parking options to make your journey effortless. From the convenience of Meet and Greet valet parking to the cost-effective Park and Ride, we have solutions for every need. If you prefer parking close to the terminal, our On-Site Parking ensures you're just minutes away from check-in.`,
      ratings: 5,
      bookings: 1500,
      img: "/src/assets/imgs/Heathrow Airport.svg",
    },
    {
      name: "Manchester Airport Parking",
      about: `From Meet and Greet to Park and Ride and On-Site Parking, Manchester Airport Parking offers flexible solutions to match your travel style. Enjoy a quick and secure Park and Ride shuttle, or choose On-Site Parking for easy access to all terminals. If you want premium service, our Meet and Greet option will save you time and effort at the terminal.`,
      ratings: 5,
      bookings: 1500,
      img: "/src/assets/imgs/Manchester Airport.svg",
    },
    {
      name: "Birmingham Airport",
      about: `Choose from a variety of parking options at Birmingham Airport. Whether you're opting for Meet and Greet for ultimate convenience or Park and Ride for a budget-friendly option, we've got you covered. For those who prefer to park close to the terminal, On-Site Parking is available, making it easy to get to your flight without any delays.`,
      ratings: 4.5,
      bookings: 1500,
      img: "/src/assets/imgs/Birmingham Airport.svg",
    },
    {
      name: "Luton Airport Parking",
      about: `Luton Airport offers a wide variety of parking services designed to suit your travel needs. From Meet and Greet for a fast and easy airport experience, to Park and Ride for an affordable option, we have it all. Prefer parking closer to the terminal? On-Site Parking offers the utmost convenience with just a short walk to check-in.`,
      ratings: 5,
      bookings: 1500,
      img: "/src/assets/imgs/Luton Airport.svg",
    },
    {
      name: "Stansted Airport Parking",
      about: `Whether you need Meet and Greet, Park and Ride, or a Long-Stay Parking solution, Stansted Airport Parking offers it all. Our Park and Ride service provides quick shuttle access to the terminals, while On-Site Parking offers convenience and proximity. For those seeking the highest level of service, our Meet and Greet valet parking makes your airport experience a breeze.`,
      ratings: 4.5,
      bookings: 1500,
      img: "/src/assets/imgs/Stansted Airport.svg",
    },
  ];

  return (
    <div className="bg-[#22487f] py-[8vh]">
      <div className="header-cheapest-airport">
        <p className="text-h2 leading-h2 font-bold text-white">
          Find Cheapest Airport Parking{" "}
          <span className="text-primary-highlight font-bold">Flyway</span>
        </p>
        <div className="mb-5 mt-2 text-white">
          <p className="text-p leading-p mt-4">
            Find the best parking options for your convenience and peace of
            mind.
          </p>
        </div>
      </div>

      <div className="max-w-container mx-auto px-10 mt-10 flex justify-center">
        <CustomCarousel data={Airports} type="airport-card" />
      </div>
    </div>
  );
};

export default CheapestAirport;
