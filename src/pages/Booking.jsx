import { Label } from "@/components/components/ui/label";
import React, { useState } from "react";
import SelectR from "@/reuse/select";
import { Button } from "@/components/components/ui/button";
import { Checkbox } from "@/components/components/ui/checkbox";
import ModifyForm from "@/reuse/modify-form";

const Booking = () => {
  const [title, setTitle] = useState("Mr");
  const titles = ["Mr", "Miss", "Mrs"];
  const [people, setPeople] = useState(1);
  const [departureTerminal, setDepartureTerminal] = useState("Select Terminal");
  const [arrivalTerminal, setArrivalTerminal] = useState("Select Terminal");
  const [flightDetails, setFlightDetails] = useState(false);
  const terminal = ["Select Terminal", "Main Terminal"];
  const [addExtra, setAddExtra] = useState(0);
  const [modify, setModify] = useState(false);

  return (
    <div className="w-container-fluid bg-gradient-to-b from-blue-300">
      <div className="max-w-[90rem] mx-auto px-[8vh] max-md:px-[2vh] max-[991px]:flex-col max-[991px]:items-center">
        {/*  */}
        {modify && <ModifyForm from={"Booking"} />}
        {/*  */}
        <div className="flex gap-8 mt-10">
          {" "}
          <div className="w-[70%] max-[850px]:w-full">
            {/* Contact Details */}
            <div className="bg-white shadow-lg rounded-3xl p-8 w-full text-left">
              <h3 className="text-card-hearder font-bold mb-10">
                Contact Details
              </h3>
              <div className="md:flex gap-6 items-center">
                <div className="w-[50%] max-md:w-full">
                  <Label className="text-p font-bold">Title*</Label>
                  <SelectR data={titles} value={title} onclick={setTitle} />
                </div>

                <div className="w-[50%] max-md:w-full max-md:mt-6">
                  <Label className="text-p font-bold">First Name*</Label>

                  <input
                    type="text"
                    placeholder="Enter First Name Here"
                    className="w-full px-4 py-2 border-none hover:border-none bg-slate-100 outline-none 
             focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2"
                  />
                </div>
              </div>
              {/*  */}
              <div className="md:flex gap-6 items-center my-6">
                <div className="w-[50%] max-md:w-full">
                  <Label className="text-p font-bold">Last Name*</Label>
                  <input
                    type="text"
                    placeholder="Enter Last Name Here"
                    className="w-full px-4 py-2 border-none hover:border-none bg-slate-100 outline-none 
             focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2"
                  />
                </div>

                <div className="w-[50%] max-md:w-full max-md:mt-6">
                  <Label className="text-p font-bold">Email*</Label>
                  <input
                    type="text"
                    placeholder="Enter Email Here"
                    className="w-full px-4 py-2 border-none hover:border-none bg-slate-100 outline-none 
             focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2"
                  />
                </div>
              </div>

              {/*  */}
              <div className="md:flex gap-6 items-center my-6">
                <div className="w-[50%] max-md:w-full">
                  <Label className="text-p font-bold">Mobile Number*</Label>
                  <input
                    type="text"
                    placeholder="Enter Mobile Number Here"
                    className="w-full px-4 py-2 border-none hover:border-none bg-slate-100 outline-none 
             focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2"
                  />
                </div>

                <div className="w-[50%] max-md:w-full max-md:mt-6">
                  <Label className="text-p font-bold">People*</Label>
                  <SelectR
                    data={Array.from({ length: 10 }).map(
                      (_, index) => index + 1
                    )}
                    value={people}
                    onclick={setPeople}
                  />
                </div>
              </div>
            </div>
            {/* Flight Details */}
            <div className="bg-white shadow-lg rounded-3xl p-8 w-full text-left my-10">
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <h3 className="text-card-hearder font-bold leading-card-hearder">
                    Flight Details
                  </h3>
                  <p className="text-p leading-p">
                    Do you have Terminal and flight details?
                  </p>
                </div>

                <Button onClick={() => setFlightDetails(!flightDetails)}>
                  yes
                </Button>
              </div>

              {flightDetails ? (
                <>
                  <div className="md:flex gap-6 items-center">
                    <div className="w-[50%] max-md:w-full">
                      <Label className="text-p font-bold">
                        Departure Terminal*
                      </Label>
                      <SelectR
                        data={terminal}
                        value={departureTerminal}
                        onclick={setDepartureTerminal}
                      />
                    </div>

                    <div className="w-[50%] max-md:w-full max-md:mt-6">
                      <Label className="text-p font-bold">
                        Select Terminal Departure Flight No.
                      </Label>
                      <input
                        type="text"
                        placeholder=""
                        className="w-full px-4 py-2 border-none hover:border-none bg-slate-100 outline-none 
             focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2"
                      />
                    </div>
                  </div>

                  <div className="md:flex gap-6 items-center mt-8">
                    <div className="w-[50%] max-md:w-full">
                      <Label className="text-p font-bold">
                        Arrival Terminal
                      </Label>
                      <SelectR
                        data={terminal}
                        value={arrivalTerminal}
                        onclick={setArrivalTerminal}
                      />
                    </div>

                    <div className="w-[50%] max-md:w-full max-md:mt-6">
                      <Label className="text-p font-bold">
                        Arrival Flight No.
                      </Label>
                      <input
                        type="text"
                        placeholder=""
                        className="w-full px-4 py-2 border-none hover:border-none bg-slate-100 outline-none 
             focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2"
                      />
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            {/* Vehicle Details */}
            <div className="bg-white shadow-lg rounded-3xl p-8 w-full text-left my-10">
              <div className="mb-10 md:flex items-center justify-between">
                <div>
                  <h3 className="text-card-hearder font-bold leading-card-hearder">
                    Vehicle Details
                  </h3>
                </div>

                <Button
                  className="text-lg bg-primary-highlight py-7 px-8 w-auto"
                  onClick={() => setAddExtra(addExtra + 1)}
                >
                  ADD EXTRA CAR
                </Button>
              </div>

              <>
                <div className="md:flex gap-6 items-center">
                  <div className="w-[50%] max-md:w-full">
                    <Label className="text-p font-bold">Make*</Label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full px-4 py-2 border-none hover:border-none bg-slate-100 outline-none 
             focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2"
                    />
                  </div>

                  <div className="w-[50%] max-md:w-full max-md:mt-6">
                    <Label className="text-p font-bold">Model*</Label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full px-4 py-2 border-none hover:border-none bg-slate-100 outline-none 
             focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2"
                    />
                  </div>
                </div>

                <div className="md:flex gap-6 items-center mt-8">
                  <div className="w-[50%] max-md:w-full">
                    <Label className="text-p font-bold">Color*</Label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full px-4 py-2 border-none hover:border-none bg-slate-100 outline-none 
             focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2"
                    />
                  </div>

                  <div className="w-[50%] max-md:w-full max-md:mt-6">
                    <Label className="text-p font-bold">Reg No*</Label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full px-4 py-2 border-none hover:border-none bg-slate-100 outline-none 
             focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2"
                    />
                  </div>
                </div>
              </>
            </div>
            <>
              {Array.from({ length: addExtra }).map((_, index) => (
                <div
                  className="bg-white shadow-lg rounded-3xl p-8 w-full text-left my-10"
                  key={index}
                >
                  <div className="mb-10 md:flex items-center justify-between">
                    <div>
                      <h3 className="text-card-hearder font-bold leading-card-hearder">
                        Vehicle Details
                      </h3>
                    </div>

                    <div className="md:flex gap-5">
                      <Button
                        className="text-lg bg-primary-highlight py-7 px-8 w-auto"
                        onClick={() =>
                          setAddExtra(addExtra > 0 ? addExtra - 1 : addExtra)
                        }
                      >
                        REMOVE CAR
                      </Button>

                      <Button
                        className="text-lg bg-primary-highlight py-7 px-8 w-auto"
                        onClick={() => setAddExtra(addExtra + 1)}
                      >
                        ADD EXTRA CAR
                      </Button>
                    </div>
                  </div>

                  <>
                    <div className="md:flex gap-6 items-center">
                      <div className="w-[50%] max-md:w-full">
                        <Label className="text-p font-bold">Make*</Label>
                        <input
                          type="text"
                          placeholder=""
                          className="w-full px-4 py-2 border-none hover:border-none bg-slate-100 outline-none 
             focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2"
                        />
                      </div>

                      <div className="w-[50%] max-md:w-full max-md:mt-6">
                        <Label className="text-p font-bold">Model*</Label>
                        <input
                          type="text"
                          placeholder=""
                          className="w-full px-4 py-2 border-none hover:border-none bg-slate-100 outline-none 
             focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2"
                        />
                      </div>
                    </div>

                    <div className="md:flex gap-6 items-center mt-8">
                      <div className="w-[50%] max-md:w-full">
                        <Label className="text-p font-bold">Color*</Label>
                        <input
                          type="text"
                          placeholder=""
                          className="w-full px-4 py-2 border-none hover:border-none bg-slate-100 outline-none 
             focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2"
                        />
                      </div>

                      <div className="w-[50%] max-md:w-full max-md:mt-6">
                        <Label className="text-p font-bold">Reg No*</Label>
                        <input
                          type="text"
                          placeholder=""
                          className="w-full px-4 py-2 border-none hover:border-none bg-slate-100 outline-none 
             focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2"
                        />
                      </div>
                    </div>
                  </>
                </div>
              ))}
            </>
            {/*  */}
            <div className="bg-white shadow-lg rounded-3xl p-8 w-full text-left my-20">
              <div className="flex items-center gap-4">
                <input type="checkbox" id="TMC" className="block w-4 h-4" />
                <label
                  htmlFor="TMC"
                  className="text-p leading-p font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Text Message Confirmation - (UK mobiles only) £0.99
                </label>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <input type="checkbox" id="CC" className="block w-4 h-4" />
                <label
                  htmlFor="CC"
                  className="text-p leading-p font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Cancellation Cover - Protect your booking if you need to
                  cancel or amend in future £2.00
                </label>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-[35%] max-[991px]:w-[70%] max-[850px]:w-full">
            <div className="bg-blue-300 w-full shadow-2xl rounded-3xl overflow-hidden">
              <div className="p-6 bg-primary-highlight">
                <h3 className="text-card-hearder leading-card-hearder font-bold">
                  Booking Details
                </h3>
              </div>

              <div className="px-6 pb-6">
                <div className="flex justify-center my-6">
                  <img
                    src="/src/assets/imgs/Birmingham Airport.svg"
                    alt=""
                    className="w-[60%]"
                  />
                </div>
                <p className="text-[20px] font-bold">
                  Bristol Airport Parking Meet & Greet
                </p>

                <div className="flex gap-5 justify-center items-center my-4">
                  <p className="text-p leading-p">Meet And Greet</p>
                  <Button
                    className="bg-primary-highlight !m-0 rounded-3xl w-auto px-6 !py-0"
                    onClick={() => setModify(!modify)}
                  >
                    Change
                  </Button>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-black text-p">
                  <p className="font-[500]">DROP OFF</p>
                  <p>12/02/2025 AT 12:00</p>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-black text-p">
                  <p className="font-[500]">PICK UP</p>
                  <p>19/02/2025 AT 12:00</p>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-t border-black text-p">
                  <p className="font-[500]">AIRPORT</p>
                  <p>Birmingham</p>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-blue-300 w-full shadow-2xl rounded-3xl overflow-hidden mt-10">
              <div className="p-6 bg-primary-highlight">
                <h3 className="text-card-hearder leading-card-hearder font-bold">
                  Order Summary
                </h3>
              </div>

              <div className="px-5 pb-6 mt-8">
                <div className="flex justify-between items-center py-2 border-t border-black text-p">
                  <p className="font-semibold">Quote Amount:</p>
                  <p>£ 69.00</p>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-black text-p">
                  <p className="font-semibold">Discount Amount</p>
                  <p>-£ 0.00</p>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-black text-p">
                  <p className="font-semibold">Booking Charges</p>
                  <p>£ 1.95</p>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-black text-p">
                  <p className="font-semibold">Cancellations Charges</p>
                  <p>£ 0.00</p>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-t border-black text-p">
                  <p className="font-semibold">Sms Charges</p>
                  <p>£ 0.00</p>
                </div>

                <div className="flex justify-between items-center py-2 text-p">
                  <p className="font-bold">Total</p>
                  <p className="font-bold">£ 70.95</p>
                </div>

                <div className="flex gap-4 mt-4 items-center">
                  <input type="checkbox" id="IG" className="block w-4 h-4" />
                  <label
                    htmlFor="IG"
                    className="text-p text-left leading-p font-semibold peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I decleare that I have read, understood and accept the{" "}
                    <span>
                      <a href="" className="text-teal-700 font-bold">
                        Terms & Conditions,
                      </a>
                      <a href="" className="text-teal-700 font-bold">
                        Cancellation policy,
                      </a>
                      <a href="" className="text-teal-700 font-bold">
                        Refund/Return policy
                      </a>
                    </span>
                  </label>
                </div>

                <div className="mt-6">
                  <Button className="w-full py-8 text-p font-semibold bg-blue-900">
                    PAY BY CARD
                  </Button>
                  <Button className="w-full py-8 bg-yellow-500">
                    <img
                      src="/src/assets/imgs/paypal.svg"
                      alt=""
                      className="object-contain w-[25%]"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
