import React from "react";
import "@/styles/About.css";
import SEO from "@/SEO/SEO";

const AboutUs = () => {
  const Aboutus = [
    ` Welcome to <b>Flyaway Parking</b>, your trusted partner in stress-free
          airport parking across the United Kingdom. With over a decade of
          experience, we've established ourselves as a reliable solution for
          travelers looking for convenience, affordability, and peace of mind
          when parking their vehicles.`,
    ` At <b>Flyaway Parking</b>, we understand that airport travel can be
          hectic, which is why we designed our services to take one major hassle
          off your list—parking. We offer a variety of parking options tailored
          to suit your needs, including Park & Ride and Meet & Greet services at
          all major UK airports. Whether you're traveling for business or
          leisure, our team is dedicated to ensuring your journey begins
          smoothly from the moment you arrive at our parking facilities.`,
    ` Our <b>Park & Ride</b> service allows you to park your vehicle in our
          secure lot, and we’ll shuttle you to the airport terminal in a matter
          of minutes. For those looking for a more personalized experience, our{" "}
          <b>Park & Ride</b>.`,
    `Safety and security are at the core of what we do. All of our parking
          facilities are equipped with round-the-clock surveillance, ensuring
          your vehicle is protected throughout your trip. Our team of trained
          professionals is committed to providing excellent customer service,
          from drop-off to pick-up.`,
    `At <b>Flyaway Parking</b>, we believe in making airport travel as
          seamless as possible. With competitive rates, secure facilities, and
          unmatched convenience, we’re here to make your journey more
          comfortable.`,
  ];
  return (
    <div className="w-container-fluid bg-gradient-to-b from-blue-300">
      <SEO
        title="About Us - Flyaway Parking"
        description="Learn more about Flyaway Parking and our mission to provide secure and affordable airport parking."
        keywords="about flyaway parking, airport parking services"
        canonical="https://flyawayparking.co.uk/AboutUs"
      />

      <div className="max-w-container px-[6vh] xl:px-[15vh] mx-auto pt-10">
        <div className="">
          <h1 className="text-primary-highlight text-h1 leading-h1 font-bold">
            About Us
          </h1>
          {Aboutus.map((item, index) => (
            <p
              key={index}
              className="text-p leading-p my-4 max-md:text-left"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </div>

        <div className="bg-[#22487F] rounded-lg p-4 text-white mt-10">
          <p className="text-primary-highlight text-h2 leading-h2 font-bold">
            Our Mission
          </p>
          <p className="my-2 max-md:text-left text-p leading-p">
            Book your parking with us now and let us do the rest. We offer a
            cost-effective, comprehensive service, supported by a helpful and
            efficient customer service team, who handle queries, questions, and
            complaints promptly and professionally.
          </p>
          <p className="about-text max-md:text-left">
            Thank you for your continued support and loyalty. We aim to reward
            you with <b className="text-primary-highlight">special discounts</b>{" "}
            every time.
          </p>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default AboutUs;
