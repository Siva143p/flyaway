import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Check } from "lucide-react";

import { cn } from "@/components/lib/utils";

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("flex items-center flex-wrap gap-5", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex items-center justify-center h-5 w-5 rounded-full border-2 !border-black bg-gray-300 checked:!bg-blue-500 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {/* Inner dot + tick only when selected */}
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center w-3.5 h-3.5 rounded-full">
        <Check className="h-4 w-4 text-black" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
