import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/components/ui/select";

const SelectR = ({ data, onclick, value }) => {
  console.log("====================================");
  console.log(value);
  console.log("====================================");
  return (
    <Select value={value} onValueChange={onclick} className="rounded-none">
      <SelectTrigger
        className="text-black w-full px-4 py-2 border-none hover:border-none bg-slate-100 outline-none 
             focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 rounded-none m-0"
      >
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {data.map((item, index) => (
          <SelectItem value={item} key={index}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectR;
