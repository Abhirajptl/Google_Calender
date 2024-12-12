import React from "react";

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      <h2>All Events</h2>
      {events.length === 0 ? (
        <p>No events to display.</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <strong>{event.name}</strong> ({event.date}) - {event.startTime} to{" "}
              {event.endTime}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
