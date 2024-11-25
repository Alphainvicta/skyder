import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { es } from "date-fns/locale"; // Import Spanish locale
import "react-datepicker/dist/react-datepicker.css";
import "./gCalendar.css";

const GCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="g_calendar_cont">
      <p>
        {selectedDate
          ? selectedDate.toLocaleString("es-ES", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })
          : "Fecha y hora"}
      </p>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showTimeSelect
        timeIntervals={60}
        inline
        minDate={new Date()}
        locale={es}
        timeFormat="hh:mm aa"
      />
    </div>
  );
};

export default GCalendar;
