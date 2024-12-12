import React from "react";
import { getMonthDays, isToday } from "../utils/dateUtils";

const Calendar = ({ events, onSelectDate, currentMonth }) => {
  const monthDays = getMonthDays(currentMonth);

  return (
    <div className="calendar-grid">
      {monthDays.map((day) => (
        <div
          key={day.date.toISOString()} // Use ISO string for unique keys
          className={`calendar-day ${isToday(day.date) ? "today" : ""}`}
          onClick={() => onSelectDate(day.date.toISOString())} // Send date in string format
        >
          <div className="date-number">{day.number}</div>
          <div className="events">
            {events
              .filter((event) => event.date === day.date.toISOString())
              .map((event) => (
                <div key={event.id} className="event-indicator" style={{ backgroundColor: event.color }} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
