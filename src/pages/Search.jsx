import React, { useState } from "react";
import useStore from "@/store/store";
import { Button } from "@/components/components/ui/button";
import { CustomSelect } from "@/components/components/shared-ui/custom-select";
import { DatePickerDemo } from "@/components/components/shared-ui/date-picker";
import TimePicker from "./home/components/TimePicker";
import { format } from "date-fns";
import { Label } from "@/components/components/ui/label";
import { dummyData } from "@/data/dummy-api";
import { Card, CardContent, CardHeader } from "@/components/components/ui/card";

const Search = () => {
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
  const [isOpen, setOpen] = useState(false);
  console.log("====================================");
  console.log("search results : ", searchResults);
  console.log("====================================");

  return (
    <div>
      <div className="max-w-container p-[6vh]">
        <div className="flex justify-between items-center p-6 border-2 border-black rounded-3xl">
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
        {/* flex justify-between gap-5 items-center p-8 border-2 border-black rounded-3xl mt-10 text-left */}
        {isOpen ? (
          <div className="flex flex-col items-center p-8 border-2 border-black rounded-3xl mt-10 text-left transition-all duration-1000">
            {" "}
            <div className="flex justify-between gap-5 items-center p-8 mt-10 text-left">
              <div>
                <Label>Traveling From</Label>
                <CustomSelect
                  className={"text-black text-base m-0"}
                  data={airports ? airports : []}
                  title={"Airport"}
                />
              </div>
              <div>
                <Label>Drop Off Date</Label>
                <DatePickerDemo
                  initialDate={dropDate}
                  onclick={setDropDate}
                  className="bg-white !border-none m-0"
                />
              </div>
              <div>
                <Label>From</Label>
                <TimePicker onTimeSelect={setDropTime} className="!m-0" />
              </div>
              <div>
                <Label>From</Label>
                <DatePickerDemo
                  initialDate={pickUPDate}
                  onclick={setPickUpDate}
                  className="bg-white !border-none m-0"
                />
              </div>
              <div>
                <Label>From</Label>
                <TimePicker onTimeSelect={setPickUPTime} className="!m-0" />
              </div>
              <div className="promo-code !m-0">
                {/* <label htmlFor="promo-code">Promo Code</label> */}
                <input
                  className="promo-code-input text-black"
                  type="text"
                  id="promo-code"
                  placeholder="Enter Promo Code"
                />
              </div>
            </div>
            <Button>UPDATE</Button>
          </div>
        ) : (
          ""
        )}

        <div className="flex flex-wrap gap-10 my-10">
          {dummyData.data.map((item, index) => (
            <Card
              key={index}
              className="w-[30%] bg-white shadow-lg rounded-3xl"
            >
              <CardHeader>
                <h2 className="text-card-hearder leading-card-hearder font-bold">
                  Premium Meet and greet Manchester
                </h2>
                <p className="text-p leading-p">Meet And Greet</p>
                <div>
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-[10rem] object-cover"
                  />
                </div>
              </CardHeader>

              <CardContent>
                <p>Cancellation Cover Available</p>

                <div
                  key={index}
                  className="text-p leading-p my-4 max-md:text-left"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />

                {/* <div dangerouslySetInnerHTML={{ __html: item.term }} /> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
