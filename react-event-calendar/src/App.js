import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import EventModal from "./components/EventModal";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import EventList from "./components/EventList";
import useCalendar from "./hooks/useCalendar";
import "./styles/main.css";

const App = () => {
  const { currentMonth, setCurrentMonth, getMonthDays } = useCalendar();
  const [selectedDate, setSelectedDate] = useState(null); // Stores the selected date
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  // Persist events in localStorage
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  // Add a new event
  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  // Delete an event by ID
  const deleteEvent = (eventId) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
  };

  return (
    <div className="app-container">
      <Header />
      <Navigation currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
      <Calendar
        events={events}
        onSelectDate={setSelectedDate} // Sets the selected date
        currentMonth={currentMonth}
      />
      {selectedDate && (
        <EventModal
          date={selectedDate}
          events={events.filter((event) => event.date === selectedDate)} // Filter events for the selected date
          onAddEvent={addEvent}
          onDeleteEvent={deleteEvent}
          onClose={() => setSelectedDate(null)} // Close modal on dismiss
        />
      )}
      <EventList events={events} />
    </div>
  );
};

export default App;
