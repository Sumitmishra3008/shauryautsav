import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { eventsData } from "../assets/data/EventData.js";
import { useNavigate } from "react-router-dom";

const EventsSection2 = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const handleRegister = (eventId) => {
    if (eventId == 11) {
      window.open("https://forms.gle/JDeUQHYahZruVUNh7", "_blank");
      return;
    }
    navigate(`/register/${eventId}`);
  };

  const handleRulebookClick = () => {
    if (selectedEvent && selectedEvent.rulebook) {
      window.open(selectedEvent.rulebook, "_blank");
      const link = document.createElement("a");
      link.href = selectedEvent.rulebook;
      link.download = `${selectedEvent.name}_Rulebook.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("Rulebook not available for this event.");
    }
  };

  return (
    <section className="relative py-16 bg-gray-900 min-h-screen w-full">
      <div
        className="absolute inset-0 bg-fixed bg-center"
        style={{
          backgroundImage: "url(/images/hero_image.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(1)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
          Sports Fest Events
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-6xl">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="flex justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2"
              onClick={() => handleEventClick(event)}
            >
              <div className="group relative h-64 w-full max-w-xs rounded-lg shadow-md cursor-pointer bg-gray-800 p-2">
                <div className="relative h-full w-full overflow-hidden rounded-md bg-gray-700">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${event.image})`,
                    }}
                  ></div>
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-black/40 p-2 text-center rounded-md">
                  <h3 className="text-white font-bold">{event.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedEvent && (
          <Modal
            show={!!selectedEvent}
            onClose={handleCloseModal}
            popup
            size="md"
            className="bg-gray-900/50 backdrop-blur-sm"
          >
            <Modal.Header className="bg-gray-800 text-white border-b border-gray-700">
              {selectedEvent.name}
            </Modal.Header>
            <Modal.Body className="bg-gray-800 text-white">
              <div className="space-y-4">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-300">{selectedEvent.details}</p>
                <div className="flex justify-between items-center gap-4">
                  <span className="text-sm text-gray-400">
                    Date: {selectedEvent.date}
                  </span>
                  <div className="flex gap-2">
                    <Button color="blue" onClick={handleRulebookClick}>
                      Rulebook
                    </Button>
                    <Button
                      color="green"
                      onClick={() => handleRegister(selectedEvent.id)}
                    >
                      Register Now
                    </Button>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default EventsSection2;
