import React, { useEffect, useState } from "react";
import "@/styles/Form.css";
import TimePicker from "./TimePicker";
import { DatePickerDemo } from "@/components/components/shared-ui/date-picker";
import { CustomSelect } from "@/components/components/shared-ui/custom-select";
import { useAppContext } from "@/context/AppContext";
import { addDays } from "date-fns";
import { fetchAirports, findParkingDeals } from "@/api/api";
const GetAQuote = () => {
  const { airport } = useAppContext();
  const [dropTime, setDropTime] = useState("00:00");
  const [pickUPTime, setPickUPTime] = useState("00:00");
  const [dropDate, setDropDate] = useState();
  const [pickUPDate, setPickUpDate] = useState();

  const [airports, setAirports] = useState();

  // const Airports = [
  //   { id: "BHX", name: "Birmingham" },
  //   { id: "BRS", name: "Bristol" },
  //   { id: "DVP001", name: "Dover Port" },
  //   { id: "EMA", name: "East Midlands" },
  //   { id: "LGW", name: "Gatwick" },
  //   { id: "LHR", name: "Heathrow" },
  //   { id: "LBA", name: "Leeds Bradford" },
  //   { id: "GLA", name: "Glasgow" },
  //   { id: "LPL", name: "Liverpool" },
  //   { id: "LCY", name: "London City Airport" },
  //   { id: "LTN", name: "Luton" },
  //   { id: "MAN", name: "Manchester" },
  //   { id: "SOU", name: "Southampton" },
  //   { id: "SOU002", name: "Southampton Port" },
  //   { id: "STN", name: "Stansted" },
  // ];

  const today = new Date();
  const futureDate = addDays(today, 7);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!airport || !airport.id) {
      alert("Please Select Airport");
      return;
    }

    const requestData = {
      airport_id: airport.id,
      drop_off_date: dropDate,
      drop_off_time: dropTime,
      pick_up_date: pickUPDate,
      pick_up_time: pickUPTime,
      phone_number: "",
      discount_code: airport.discount_code,
    };

    findParkingDeals({ requestData });
  };

  useEffect(() => {
    fetchAirports(setAirports);
  }, []);

  useEffect(() => {
    // const formattedURL = `${airport.name}`.replace(/ /g, "-");
    airport.name !== undefined
      ? history.pushState({}, "", `/${airport.name}`)
      : "";
  }, [airport]);

  return (
    <div className="container w-[636px] max-lg:w-[70%]  max-sm:w-[96%] overflow-hidden bg-slate-400">
      <div className="bg-[#ff7f32] py-2 text-2xl font-bold">
        <h2 className="text-[32px] font-bold py-3">GET A QUOTE</h2>
      </div>
      <div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="airport-selection">
              <label htmlFor="airport-select">Travelling Form</label>

              <CustomSelect
                className={"text-black text-base"}
                data={airports ? airports : []}
                title={"Airport"}
              />
            </div>
            <div className="flex gap-5 items-center">
              <div className="flex flex-col w-[50%]">
                <label htmlFor="drop-off-date">Drop Off</label>

                <DatePickerDemo initialDate={today} onclick={setDropDate} />
              </div>
              <div className="drop-off w-[50%]">
                <label htmlFor="drop-off-time">Time</label>

                <TimePicker onTimeSelect={setDropTime} />
              </div>
            </div>
            <div className="flex my-4 gap-5 items-center">
              <div className="flex flex-col w-[50%]">
                <label htmlFor="">Pick Up Date</label>
                <DatePickerDemo
                  initialDate={futureDate}
                  onclick={setPickUpDate}
                />
              </div>
              <div className="w-[50%]">
                <label htmlFor="pick-up-time">Time</label>

                <TimePicker onTimeSelect={setPickUPTime} />
              </div>
            </div>
            <div className="promo-code">
              <label htmlFor="promo-code">Promo Code</label>
              <input
                className="promo-code-input text-black"
                type="text"
                id="promo-code"
                placeholder="Enter Promo Code"
              />
            </div>

            <button className="submit py-3 my-6" type="submit">
              FIND PARKING DEALS
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetAQuote;
