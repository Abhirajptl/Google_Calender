import React, { useState } from "react";

const EventModal = ({ date, events, onAddEvent, onDeleteEvent, onClose }) => {
  const [eventData, setEventData] = useState({
    name: "",
    startTime: "",
    endTime: "",
    description: "",
    color: "#ccc",
  });

  const handleAdd = () => {
    const newEvent = { ...eventData, date, id: Date.now() };
    onAddEvent(newEvent);
    setEventData({ name: "", startTime: "", endTime: "", description: "", color: "#ccc" });
  };

  return (
    <div className="event-modal">
      <h2>Events for {new Date(date).toLocaleDateString()}</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.name}</strong> ({event.startTime} - {event.endTime})
            <button onClick={() => onDeleteEvent(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="add-event">
        <input
          type="text"
          placeholder="Event Name"
          value={eventData.name}
          onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
        />
        <input
          type="time"
          value={eventData.startTime}
          onChange={(e) => setEventData({ ...eventData, startTime: e.target.value })}
        />
        <input
          type="time"
          value={eventData.endTime}
          onChange={(e) => setEventData({ ...eventData, endTime: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={eventData.description}
          onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
        />
        <input
          type="color"
          value={eventData.color}
          onChange={(e) => setEventData({ ...eventData, color: e.target.value })}
        />
        <button onClick={handleAdd}>Add Event</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EventModal;
