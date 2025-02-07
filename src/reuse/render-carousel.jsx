import React, { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { Card, CardContent } from "../components/components/ui/card";
import "@/styles/CustomerReview.css";
import { FaQuoteRight } from "react-icons/fa6";
import { useAppContext } from "@/context/AppContext";

// eslint-disable-next-line react/prop-types
const AirportCard = ({ item }) => {
  const { scrollToTop, setAirport } = useAppContext();
  const [expandedCard, setExpandedCard] = useState(null);

  const clickHandler = (Airport) => {
    scrollToTop();
    setAirport(Airport);
    scrollToTop();
  };

  return (
    <Card className="bg-transparent border-none h-full">
      <CardContent className="bg-white rounded-3xl overflow-hidden p-0 group h-full relative">
        <div className="h-[13rem] overflow-hidden">
          <img
            src={item.img}
            alt=""
            className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className="py-2 px-4 text-left flex flex-col justify-between">
          <div>
            <h4 className="text-card-hearder leading-card-hearder mt-2 font-bold text-[#485FA0]">
              {item.name}
            </h4>
            <div className="h-[7.5rem] max-xl:h-[8.5rem] overflow-y-scroll scroll-smooth scrollbar">
              <p className="my-2 text-p leading-p">
                {expandedCard === item.name
                  ? item.about
                  : item.about.slice(0, 150) + "..."}
                <span
                  className="text-sm text-gray-600 cursor-pointer hover:text-blue-700"
                  onClick={() =>
                    setExpandedCard(
                      expandedCard === item.name ? null : item.name
                    )
                  }
                >
                  {expandedCard === item.name ? " Read less" : " Read more"}
                </span>
              </p>
            </div>
          </div>
          {/*  */}
          <div className="">
            <div className="flex gap-5 items-center mt-3">
              <div className="flex gap-2 items-center">
                <div className="flex">
                  {Array.from({ length: item.ratings }).map((_, index) => (
                    <FaStar key={index} className="text-[#F57419] w-5 h-5" />
                  ))}
                  {!Number.isInteger(item.ratings) && (
                    <FaStarHalf className="text-[#F57419] w-5 h-5" />
                  )}
                </div>
                <span className="mt-1 text-blue-900 font-semibold">
                  {item.ratings}
                </span>
              </div>
              <>|</>
              <span className="text-p font-semibold">
                {" "}
                Bookings: {item.bookings}+{" "}
              </span>
            </div>
            <div className="">
              <button
                onClick={() => clickHandler(item.name)}
                className="bg-primary-highlight w-full py-3 rounded-lg text-p font-semibold"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ReviewCard = ({ item }) => {
  return (
    <Card>
      <CardContent className="p-8 text-white rounded-lg relative h-[18rem] flex flex-col justify-between shadow-lg bg-gradient-to-tl from-[#0C1E38] to-[#22487F]">
        {" "}
        <div className="absolute top-0 right-8">
          <FaQuoteRight className="w-10 h-10 text-primary-highlight" />
        </div>
        <p className="text-p leading-p mt-4 font-normal text-left">
          {item.review}
        </p>
        <p className="text-card-hearder leading-card-hearder text-primary-highlight font-bold text-end">
          {item.name}
        </p>
      </CardContent>
    </Card>
  );
};

const RenderCarousel = ({ data, onclick, type }) => {
  return (
    <>
      {type === "airport-card" ? (
        <AirportCard item={data} onclick={onclick} />
      ) : (
        <ReviewCard item={data} />
      )}
    </>
  );
};

export default RenderCarousel;
