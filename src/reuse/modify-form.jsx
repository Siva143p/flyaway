import React, { useState } from "react";
import useStore from "@/store/store";
import { Button } from "@/components/components/ui/button";
import { CustomSelect } from "@/components/components/shared-ui/custom-select";
import { DatePickerDemo } from "@/components/components/shared-ui/date-picker";
import TimePicker from "@/pages/home/components/TimePicker";
import { format } from "date-fns";
import { Label } from "@/components/components/ui/label";

const ModifyForm = ({ from }) => {
  const {
    airport,
    dropTime,
    setDropTime,
    dropDate,
    setDropDate,
    pickUPTime,
    setPickUPTime,
    pickUPDate,
    setPickUpDate,
    searchResults,
    airports,
  } = useStore();
  const [isOpen, setOpen] = useState(from === "Booking" ? true : false);
  console.log("====================================");
  console.log("search results : ", searchResults);
  console.log("====================================");
  return (
    <div>
      {from !== "Booking" ? (
        <div className="max-[991px]:w-[90%] max-md:w-full flex max-[991px]:flex-col gap-5 justify-between items-center p-6 border-2 border-black rounded-3xl mx-auto">
          <p className="text-p leading-p font-semibold">{`You Have Searched: ${
            airport.name
          } Airport from: ${
            dropDate && format(dropDate, "dd-MM-yyyy")
          } - ${dropTime} to: ${
            pickUPDate && format(pickUPDate, "dd-MM-yyyy")
          } - ${pickUPTime}`}</p>
          <Button
            onClick={() => setOpen(!isOpen)}
            className="w-[200px] py-6 m-0 bg-primary-highlight text-lg font-bold rounded-sm hover:bg-blue-900"
          >
            Modify Search
          </Button>
        </div>
      ) : (
        ""
      )}
      {isOpen ? (
        <div className="flex max-[991px]:w-[90%] max-md:w-full mx-auto flex-col items-center lg:p-8 max-lg:pb-8 border-2 border-black rounded-3xl mt-10 text-left transition-all duration-1000 bg-blue-300">
          {" "}
          <div className="flex max-[991px]:flex-col justify-between gap-5 items-center p-6 text-left w-full">
            <div className="md:flex gap-5 justify-between lg:w-[33.33%] w-full">
              <div className="max-[991px]:w-[50%] max-md:w-full w-[50%]">
                <Label>Traveling From</Label>
                <CustomSelect
                  className={"text-black text-base m-0 w-full"}
                  data={airports ? airports : []}
                  title={"Airport"}
                />
              </div>
              <div className="max-[991px]:w-[50%] max-md:w-full max-sm:mt-4 w-[50%]">
                <Label>Drop Off Date</Label>
                <DatePickerDemo
                  initialDate={dropDate}
                  onclick={setDropDate}
                  className="bg-white !border-none m-0"
                />
              </div>
            </div>
            <div className="md:flex gap-5 justify-between lg:w-[33.33%] w-full">
              <div className="max-[991px]:w-[50%] max-md:w-full w-[50%]">
                <Label>Time</Label>
                <TimePicker onTimeSelect={setDropTime} className="!m-0" />
              </div>
              <div className="max-[991px]:w-[50%] max-md:w-full max-sm:mt-4 w-[50%]">
                <Label>Pick Up Date</Label>
                <DatePickerDemo
                  initialDate={pickUPDate}
                  onclick={setPickUpDate}
                  className="bg-white !border-none m-0"
                />
              </div>
            </div>
            <div className="md:flex gap-5 justify-between lg:w-[33.33%] w-full">
              <div className="max-[991px]:w-[50%] max-md:w-full lg:w-[50%]">
                <Label>Time</Label>
                <TimePicker onTimeSelect={setPickUPTime} className="!m-0" />
              </div>
              <div className="max-[991px]:w-[50%] max-md:w-full max-sm:mt-4 w-[50%]">
                <Label>Promo Code</Label>
                <input
                  className="text-black py-1.5"
                  type="text"
                  id=""
                  placeholder="Enter Promo Code"
                />
              </div>
            </div>
          </div>
          <Button className="w-auto py-6 px-8 m-0 rounded-sm bg-primary-highlight">
            UPDATE
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ModifyForm;
