import React from "react";
import "@/styles/CustomerReview.css";
import { CustomCarousel } from "@/components/components/shared-ui/custom-carousel";

const CustomerReview = () => {
  const Reviews = [
    {
      review:
        "Flyaway Parking made my trip stress-free. The Meet & Greet service was prompt, and the staff was so polite. Highly recommended for anyone flying out of London!",
      name: "Emma R",
    },
    {
      review:
        "Flyaway Parking made my trip stress-free! The Meet & Greet service was fantastic, and the team was so polite. Highly recommended!",
      name: "Sarah J",
    },
    {
      review:
        "This was my first time using Flyaway Parking, and I’m impressed! It was convenient and saved me a lot of time. Will book again for sure.",
      name: "James L",
    },
    {
      review:
        "Affordable rates and excellent service! The team handled my car with care, and I returned to find it just as I left it. Thank you!",
      name: "Sophia T",
    },
    {
      review:
        "I was running late for my flight, but Flyaway Parking’s team was super quick and efficient. Amazing service in London!",
      name: "Daniel K",
    },
    {
      review:
        "Top-notch Meet & Greet experience! Flyaway Parking is a game-changer for frequent travelers like me.",
      name: "Olivia P",
    },
    {
      review:
        "Flyaway Parking made my trip stress-free! The Meet & Greet service was fantastic, and the team was so polite. Highly recommended!",
      name: "Sarah J",
    },
    {
      review:
        "Punctual, professional, and affordable. The best parking experience I’ve had near Heathrow!",
      name: "David M",
    },
    {
      review:
        "Loved how smooth the process was. Handing over my car saved me so much time!",
      name: "Priya R",
    },
    {
      review:
        "Exceptional service! The staff went above and beyond to ensure I had a great experience. Will definitely book again!",
      name: "Tom L",
    },
  ];
  return (
    <div className="customer-review-container py-10">
      <div className="">
        <h2 className="text-h2 leading-h2 font-bold">
          What Our
          <span className="text-primary-highlight font-bold"> Customers </span>
          Are Saying About Us
        </h2>
        <p className="text-p leading-p mt-4 font-semibold">
          Find the best parking options for your convenience and peace of mind.
        </p>
      </div>

      <div className="max-w-container mx-auto my-6 max-sm:px-[2vh]">
        <CustomCarousel data={Reviews} type={"customer-review"} />
      </div>
    </div>
  );
};

export default CustomerReview;
