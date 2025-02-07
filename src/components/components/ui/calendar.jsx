import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/components/lib/utils";
import { buttonVariants } from "@/components/components/ui/button";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      disabled={{ before: new Date() }}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: "h-9 w-9 p-0 font-normal text-gray-800 bg-transparent",
        day_selected:
          "bg-orange-500 text-white hover:bg-orange-600 focus:bg-orange-600",
        day_today: "border border-orange-400 text-orange-500",
        day_outside: "text-gray-400",
        day_disabled: "text-gray-300 opacity-50 cursor-not-allowed", // Disabled days (past dates)
        day_range_middle: "bg-orange-300 text-white",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft
            className={cn("h-4 w-4 text-black", className)}
            {...props}
          />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight
            className={cn("h-4 w-4 text-black", className)}
            {...props}
          />
        ),
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
