import React from "react";
import "@/styles/AboutFlyawayParking.css";

function AboutFlyawayParking() {
  return (
    <div className="about-flyaway-parking py-10 sm:py-20 w-full">
      <div className="max-w-container mx-auto flex gap-5 max-lg:flex-col lg:px-[8vh] items-center">
        <div className="xl:w-[45%] lg:w-[50%] md:w-[90%] max-sm:w-full mx-auto max-md:px-[4vh]">
          <h6 className="font-bold mb-4 text-p">About Flyaway Parking</h6>
          <h2 className="text-h2 font-bold leading-h2">
            Experience the world <br /> with our{" "}
            <span className="text-primary-highlight font-bold">Service</span>
          </h2>
          <p className="mt-7 text-p leading-p">
            With{" "}
            <span className="text-[#003366] font-bold">Flyaway Parking,</span>{" "}
            reserving secure and convenient airport parking has never been
            easier. Choose from our Meet and Greet service, Park and Ride, or
            On-site Airport Parking to suit your needs. Our options offer
            flexibility, security, and competitive pricing, making your travel
            experience smooth and worry-free. Trust Flyaway Parking to handle
            your vehicle with care, so you can focus on enjoying your journey.
          </p>
          <div className="bg-[#003366] font-semibold text-white rounded-md mt-4 inline-flex items-center gap-4 p-4">
            {/* Smiley! */}
            <svg
              width="61"
              height="61"
              viewBox="0 0 61 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 35.5046V25.2055C0.922922 24.2914 0.82618 23.0171 1.188 21.8996C3.08028 16.0432 6.18957 10.9789 11.0015 7.04746C14.5326 4.16379 18.4584 2.0819 22.9086 0.964451C23.6593 0.776596 24.7409 1.03417 25.182 0H35.2007C35.3671 0.367963 35.6515 0.505465 36.052 0.538388C37.6792 0.672017 39.2271 1.2104 40.715 1.78753C51.7436 6.06364 58.4343 14.0872 60.5336 25.6993C61.6191 31.7068 60.8084 37.6639 58.117 43.2124C53.7055 52.305 46.6317 58.1033 36.6731 60.2801C30.7312 61.5796 24.9073 61.1303 19.3349 58.847C9.79613 54.9388 3.60849 47.9669 0.938401 37.9157C0.727502 37.1236 0.926792 36.0584 0 35.5046ZM43.3212 42.1531C45.1535 40.7103 46.5215 38.8821 47.7733 36.9338C48.346 36.041 47.5005 35.8609 47.1677 35.4329C46.7923 34.9507 46.5602 35.3651 46.3493 35.644C44.5402 38.0513 42.2009 39.8097 39.5657 41.2061C37.8514 42.093 35.8817 42.1298 34.121 42.8561C31.7721 43.1853 29.4232 43.1117 27.0743 42.8348H27.053C22.1482 41.7464 17.8741 39.5715 14.6391 35.6111C14.4107 35.3303 14.1573 34.972 13.809 35.4426C13.4994 35.8628 12.5765 36.1049 13.0757 36.8041C14.4475 38.7233 15.7168 40.7568 17.8083 42.0311L18.1024 42.2983C20.0973 44.0549 22.3049 45.4279 24.9092 46.0883C28.8873 47.5118 32.8595 47.4924 36.8259 46.0399C38.9968 45.4551 40.8253 44.266 42.5105 42.8232C42.7814 42.6004 43.0523 42.3758 43.3232 42.1531H43.3212ZM18.888 21.8357C18.8222 22.684 19.0312 23.7898 19.5478 24.8065C20.1069 25.9085 20.848 27.0588 22.1791 27.0608C23.7619 27.0608 25.2227 26.5359 25.8844 24.791C26.8692 22.192 26.8789 19.7189 25.1743 17.393C23.9341 15.7004 21.8928 15.5629 20.43 17.089C19.2362 18.3342 18.9073 19.8855 18.888 21.8396V21.8357ZM41.9668 20.8945C41.9668 19.779 41.8798 19.4575 41.0594 17.9953C39.6102 15.4138 37.0039 15.3344 35.4096 17.823C33.8869 20.1992 34.0514 23.7859 35.7831 25.9453C37.0891 27.5759 39.3703 27.543 40.6608 25.891C41.6921 24.5722 41.99 23.05 41.9668 20.8945Z"
                fill="white"
              ></path>
            </svg>
            <div className="text-p leading-p font-bold">
              <p>
                Trusted by
                <br /> 2,32,600+
                <br /> Happy Customers
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-[45%] w-[90%] h-[23rem] mx-auto max-md:px-[4vh] bg-white rounded-lg">
          <img
            src="/src/assets/imgs/Airport Parking.svg"
            alt=""
            className="object-cover w-full h-full shadow-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutFlyawayParking;
