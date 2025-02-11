import React from "react";
import GetAQuote from "./components/GetAQuote";
import ParkingInfo from "./components/ParkingInfo";
import AboutFlyawayParking from "./components/AboutFlyawayParking";
import WhyChooseParking from "./components/WhyChooseUs";
import Service from "./components/Service";
import CheapestAirport from "./components/CheapestAirport";
import FlyawayParking from "./components/FlyawayParking";
import CustomerReview from "./components/CustomerReview";
import { useAppContext } from "@/context/AppContext";
import SEO from "@/SEO/SEO";
// import Search from "../Search";
import bgImg from "@/assets/imgs/poster.png";
const Home = () => {
  const { topComponentRef } = useAppContext();

  return (
    <div
      className="homepage-container max-w-container-fluid mx-auto"
      ref={topComponentRef}
    >
      {/* For SEO */}
      <SEO
        title="Flyaway Parking - Affordable & Secure Airport Parking"
        description="Book affordable and secure airport parking with Flyaway Parking. Hassle-free reservations and 24/7 customer support."
        keywords="airport parking, secure parking, book parking, cheap airport parking"
        canonical="https://flyawayparking.co.uk/"
      />

      <div
        className="w-full"
        style={{
          background: `linear-gradient(to right, rgba(13, 1, 54, 0.6), rgba(11, 1, 46, 0.6)), url(${bgImg})`,
        }}
      >
        <div className="get-quote-parking flex justify-between items-center pr-[2vh] max-[990px]:!flex-col-reverse py-4 max-w-container mx-auto">
          <GetAQuote />
          <ParkingInfo />
        </div>
      </div>
      <div className="p-0">
        <AboutFlyawayParking />
        <WhyChooseParking />
        <Service />
        <CheapestAirport />
        <FlyawayParking />
        <CustomerReview />
        {/* <Search /> */}
      </div>
    </div>
  );
};

export default Home;
