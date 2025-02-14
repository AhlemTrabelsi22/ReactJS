import React from "react";
import { Card, Button } from "react-bootstrap";
import placeholder from "componente/assets/images/placeholder.jpg";

function Event({ event, handleClick, handleLike }) {
    const images = import.meta.glob("../assets/images/*", { eager: true });

    const getImagePath = (img) => {
        return images[`../assets/images/${img}`]?.default || placeholder;
    };

    return (
        <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Img src={getImagePath(event.img)} />
            <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>
                    Price: ${event.price} <br />
                    Tickets Available: {event.nbTickets}
                </Card.Text>
                <Button variant="primary" disabled={event.nbTickets === 0} onClick={() => handleClick(event.name)}>
                    Book an event
                </Button>
                <Button
                    variant={event.like ? "danger" : "success"}
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleLike(event.id)}  
                >
                    {event.like ? "Dislike" : "Like"}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default Event;