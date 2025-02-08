import React from "react";
import "@/styles/ContactUs.css";
import { Card, CardContent } from "@/components/components/ui/card";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
//
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { Label } from "@/components/components/ui/label";
import { Input } from "@/components/components/ui/input";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/components/ui/radio-group";
import { Button } from "@/components/components/ui/button";
import SEO from "@/SEO/SEO";
const ContactUs = () => {
  const Social = [
    { icon: (props) => <RiTwitterXFill {...props} />, link: "#" },
    { icon: (props) => <FaInstagram {...props} />, link: "#" },
    { icon: (props) => <FaFacebookF {...props} />, link: "#" },
    { icon: (props) => <FaLinkedin {...props} />, link: "#" },
  ];
  const Contact = [
    {
      icon: (props) => <BiSolidPhoneCall {...props} />,
      link: "#",
      content: "0196 386 8389",
    },
    {
      icon: (props) => <IoMdMail {...props} />,
      link: "#",
      content: "info@flyawayparking.co.uk",
    },
    {
      icon: (props) => <HiLocationMarker {...props} />,
      link: "#",
      content: "2022 Marsh Road, London, England N1 7DU",
    },
  ];
  return (
    <div className="w-container-fluid bg-gradient-to-b from-blue-300 pt-4">
      <SEO
        title="Contact Us - Flyaway Parking"
        description="Get in touch with Flyaway Parking for any inquiries or support."
        keywords="contact flyaway parking, customer support"
        canonical="https://flyawayparking.co.uk/ContactUs"
      />

      <div className="max-w-[80rem] mx-auto">
        <h1 className="text-h1 leading-h1 font-bold">Contact Us</h1>
        <p className="text-p leading-p text-gray-600">
          Any question or remarks? Just write us a message!
        </p>

        {/* card */}
        <Card className="w-[80%] max-xl:w-[90%] max-lg:w-[80%] max-md:w-[90%] lg:!h-[88vh] xl:h-[36rem] bg-white shadow-lg rounded-lg mx-auto overflow-hidden mt-4">
          <CardContent className="w-full h-full p-0 flex max-lg:flex-col">
            <section className="w-[40%] max-lg:w-full max-lg:h-[80vh] max-md:items-center h-full bg-[#3354E5] rounded-r-lg p-8 flex flex-col justify-between text-left text-white relative overflow-hidden">
              <div>
                <h2 className="text-card-hearder leading-card-hearder font-bold">
                  Contact Information
                </h2>
                <p className="text-gray-400">
                  Say somthing to start a live chat!
                </p>
              </div>

              <ul>
                {Contact.map((item, index) => (
                  <li className="flex gap-8 items-center my-6" key={index}>
                    {item.icon({ className: "w-6 h-6" })}

                    <p>{item.content}</p>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 max-lg:justify-center z-10 w-full">
                {Social.map((item, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 bg-black text-white hover:bg-gray-100 hover:text-black flex justify-center items-center rounded-full cursor-pointer"
                  >
                    {item.icon({ className: "w-4 h-4" })}
                  </div>
                ))}
              </div>

              <div className="absolute w-[7rem] h-[7rem] rounded-full bottom-16 right-12 bg-[#74739780] z-10"></div>
              <div className="absolute w-[12rem] h-[12rem] rounded-full -bottom-12 -right-16 bg-[#9E82BF]"></div>
            </section>

            <section className="w-[60%] max-lg:w-full p-14 max-sm:p-10">
              <div className="md:flex text-left gap-10">
                <div className="md:w-[45%]">
                  <Label>First Name</Label>
                  <Input className="outline-none" />
                </div>
                <div className="md:w-[45%] max-md:my-6">
                  <Label>Second Name</Label>
                  <Input />
                </div>
              </div>

              <div className="md:flex text-left gap-10 my-10 max-sm:my-0">
                <div className="md:w-[45%] max-md:my-6">
                  <Label>Email</Label>
                  <Input className="outline-none" />
                </div>
                <div className="md:w-[45%] max-md:my-6">
                  <Label>Phone Number</Label>
                  <Input />
                </div>
              </div>

              <h2 className="text-left mb-3 text-base font-semibold">
                Select the subject?
              </h2>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">General Inquiry</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Booking Cancel</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-three">Extend Booking</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-four" id="option-four" />
                  <Label htmlFor="option-four">Shift The Parking</Label>
                </div>

                <input
                  type="radio"
                  className="appearance-none checked:bg-blue-500"
                />
              </RadioGroup>

              <div className="my-8 text-left">
                <Label className="text-sm text-gray-600">Message</Label>
                <Input placeholder="Write your message..." />
              </div>

              <div className="flex justify-end">
                <Button className="bg-black">Send Message</Button>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;
