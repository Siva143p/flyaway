import { useState } from "react";
import { Clock } from "lucide-react";
import "@/styles/TimePicker.css";

const TimePicker = ({ onTimeSelect }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const generateTimeSlots = () => {
    const times = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 15) {
        const hour = h.toString().padStart(2, "0");
        const minute = m.toString().padStart(2, "0");
        times.push(`${hour}:${minute}`);
      }
    }
    return times;
  };

  const timeSlots = generateTimeSlots();

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setShowDropdown(false);
    if (onTimeSelect) {
      onTimeSelect(time);
    }
  };

  return (
    <div
      className="timepicker-container mt-2"
      onClick={() => setShowDropdown(!showDropdown)}
    >
      <div className="input-wrapper">
        <input
          className="time-input !py-1.5"
          type="text"
          placeholder="HH:MM:SS"
          value={selectedTime}
          readOnly
        />
        <Clock className="clock-icon" />
      </div>
      {showDropdown && (
        <div className="dropdown">
          {timeSlots.map((time, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleTimeSelect(time)}
            >
              {time}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimePicker;
