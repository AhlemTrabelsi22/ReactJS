import React, { useEffect, useState } from "react";
import Event from "./Event";
import data from "../data/events.json";

function Events() {
    const [events, setEvents] = useState([]);

    const handleLike = (id) => {
        setEvents((prevEvents) =>
            prevEvents.map((event) =>
                event.id === id ? { ...event, like: !event.like } : event  // Toggle like/dislike based on the id
            )
        );
    };

    const handleClick = (name) => {
        setEvents(events.map((event) =>
            event.name === name
                ? { ...event, nbTickets: event.nbTickets - 1, nbParticipants: event.nbParticipants + 1 }
                : event
        ));
    };

    useEffect(() => {
        setEvents(data);
    }, []);

    return (
        <div className="d-flex flex-lg-column flex">
            {events.map((event, index) => (
                <Event key={event.id} event={event} handleClick={handleClick} handleLike={handleLike} />
                // Passed handleLike prop to each Event component
            ))}
        </div>
    );
}

export default Events;