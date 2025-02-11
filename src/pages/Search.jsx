import React, { useState } from "react";
import useStore from "@/store/store";
// import { Button } from "@/components/components/ui/button";
// import { CustomSelect } from "@/components/components/shared-ui/custom-select";
// import { DatePickerDemo } from "@/components/components/shared-ui/date-picker";
// import TimePicker from "./home/components/TimePicker";
// import { format } from "date-fns";
// import { Label } from "@/components/components/ui/label";
import { dummyData } from "@/data/dummy-api";
import { Card, CardContent, CardHeader } from "@/components/components/ui/card";
// import SearchCard from "@/reuse/render-searchcard";
import Booking from "./Booking";
import ModifyForm from "@/reuse/modify-form";

const Search = () => {
  const {
    // airport,
    // dropTime,
    // setDropTime,
    // dropDate,
    // setDropDate,
    // pickUPTime,
    // setPickUPTime,
    // pickUPDate,
    // setPickUpDate,
    searchResults,
    // airports,
  } = useStore();
  // const [isOpen, setOpen] = useState(false);
  console.log("====================================");
  console.log("search results : ", searchResults);
  console.log("====================================");

  return (
    <div className="w-container-fluid bg-gradient-to-b from-blue-300 py-16">
      <div className="max-w-container p-[6vh]">
        <ModifyForm />

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

                {/* <SearchCard html={item} /> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* <Booking /> */}
    </div>
  );
};

export default Search;
