import React, { useState } from "react";
import Calendar from "react-calendar";
import { CalendarConatiner } from "src/styles/components/customCalendar";

const CustomCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <CalendarConatiner>
      <Calendar value={value} />
    </CalendarConatiner>
  );
};

export default CustomCalendar;
