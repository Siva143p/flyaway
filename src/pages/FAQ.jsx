import React, { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/components/ui/accordion";

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  const faqData = [
    {
      question: "What is Flyaway Parking?",
      answer:
        "Flyaway Parking is a convenient parking service that offers secure and affordable parking spaces for travelers at various locations. Whether you're going on a trip or need long-term parking, Flyaway Parking provides easy access to secure lots, making parking hassle-free and stress-free.",
    },
    {
      question: "How can I book a parking spot?",
      answer:
        "Booking a parking spot with Flyaway Parking is simple! You can book online through our website or mobile app. Just select your location, preferred dates, and payment options. Once confirmed, you'll receive a booking confirmation with all the details.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept a variety of payment methods, including credit and debit cards (Visa, MasterCard, American Express), PayPal, and other popular online payment options for your convenience.",
    },
    {
      question: "Can I modify or cancel my reservation?",
      answer:
        "Yes, you can modify or cancel your reservation depending on the terms of your booking. Please refer to the confirmation email for instructions or contact our customer service team if you need assistance with changes or cancellations.",
    },
    {
      question: "Is my vehicle safe with Flyaway Parking?",
      answer:
        "Absolutely! Flyaway Parking prioritizes the safety of your vehicle. Our parking lots are equipped with 24/7 surveillance, well-lit areas, and regular security patrols. We also have fencing and access control systems in place to keep your vehicle secure while you're away.",
    },
    {
      question: "What should I do if I face an issue during booking?",
      answer:
        "If you encounter any issues while booking, don't hesitate to contact our customer support team. We're available by phone, email, or through our website chat to assist you with any problems you might face. We're here to help!",
    },
  ];

  return (
    <div className="w-container-fluid bg-gradient-to-b from-blue-300 pt-14">
      <div className="max-w-container mx-auto">
        <div className="w-[80%] max-md:w-[95%] bg-white mx-auto px-6 py-10 rounded-lg shadow-lg">
          <div className="">
            <h1 className="text-h1 max-sm:text-h2 max-sm:leading-h2 leading-h1 !font-extrabold">
              Frequently Asked Questions
            </h1>
            <div className="faq-subheader">
              <span>
                Have questions about our services? Click on a question to see
                the answer, or contact us for more details.
              </span>
            </div>

            <div className="faq-questions">
              {faqData.map((item, index) => (
                <div key={index}>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger
                        className="p-6 bg-[#DBEAFE] !text-[#223C61] text-card-hearder font-bold rounded-xl"
                        isOpen={openItem === `item-${index}`}
                        onClick={() => toggleItem(`item-${index}`)}
                      >
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="py-4 text-p leading-p px-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-p leading-p">
                Can&apos;t find the answer you&apos;re looking for? Contact us
                at
                <a
                  href="mailto:info@flyawayparking.co.uk"
                  className="text-blue-950 font-semibold"
                >
                  {" "}
                  support@flyawayparking.co.uk{" "}
                </a>
                , and our team will assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
