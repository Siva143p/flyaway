import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export function DatePickerDemo({ className, initialDate, onclick }) {
  const [date, setDate] = React.useState(initialDate);

  React.useEffect(() => {
    // const selectedDtae = date.toISOString().split("T")[0];
    onclick(date);
  }, [date]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "text-left font-normal text-gray-300 border-2 border-gray-300 !border-solid text-base justify-between bg-transparent hover:bg-transparent w-full p-3",
            !date && "text-muted-foreground",
            className
          )}
        >
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
