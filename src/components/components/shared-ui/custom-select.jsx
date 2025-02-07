import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/components/lib/utils";
import { useAppContext } from "@/context/AppContext";

export function CustomSelect({ data, className, title }) {
  const { setAirport, airport } = useAppContext();

  const selectedAirport = airport ? JSON.stringify(airport) : "";

  const handleSelection = (value) => {
    const selectedItem = JSON.parse(value);
    setAirport(selectedItem);
  };

  return (
    <Select value={selectedAirport.name} onValueChange={handleSelection}>
      <SelectTrigger className={cn(className)}>
        <SelectValue placeholder={`Select ${title}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map((item) => (
            <SelectItem
              key={item.id}
              value={JSON.stringify(item)}
              className="text-[18px]"
            >
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
