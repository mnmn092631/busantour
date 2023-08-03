import React, { useState } from "react";
import Calendar from "react-calendar";
import { CalendarConatiner } from "src/styles/components/customCalendar";

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

const CustomCalendar = () => {
  const [value, onChange] = useState<ValuePiece | [ValuePiece, ValuePiece]>(new Date());

  return (
    <CalendarConatiner>
      <Calendar
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => date.toLocaleString("en", { day: "numeric" })}
      />
    </CalendarConatiner>
  );
};

export default CustomCalendar;
