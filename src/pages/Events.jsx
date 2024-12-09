import React, { useState } from "react";
import { Card, Button, Modal } from "flowbite-react";

const eventsData = [
  {
    id: 1,
    name: "Basketball Slam",
    description: "Exciting basketball games featuring top teams.",
    date: "15-16 March",
    image:
      "data:image/png;base64,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",
  },
  {
    id: 2,
    name: "Volleyball Showdown",
    description: "Competitive volleyball matches showcasing athletic skills.",
    date: "22-23 March",
    image: "/images/volleyball.jpg",
    details:
      "High-energy volleyball competition with strategic gameplay and team collaboration.",
  },
  {
    id: 3,
    name: "Chess Championship",
    description: "Strategic mind sports tournament for chess enthusiasts.",
    date: "5-6 April",
    image: "/images/chess.jpg",
    details:
      "Intense chess matches testing mental prowess and strategic thinking.",
  },
  {
    id: 4,
    name: "Track and Field",
    description:
      "Athletic competition featuring various track and field events.",
    date: "12-13 April",
    image: "/images/track.jpg",
    details:
      "Showcase of speed, strength, and athletic excellence across multiple disciplines.",
  },
];

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <section className="relative py-16 bg-gray-900 min-h-screen w-full">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-fixed bg-center"
        style={{
          backgroundImage: "url(/images/hero_image.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(1)",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
          Sports Fest Events
        </h2>

        {/* Events Container - Flex Wrap */}
        <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-6xl">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="flex justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2"
              onClick={() => handleEventClick(event)}
            >
              <div className="group relative h-64 w-full max-w-xs rounded-lg shadow-md cursor-pointer bg-gray-800 p-2">
                {/* Padding Container */}
                <div className="relative h-full w-full overflow-hidden rounded-md bg-gray-700">
                  {/* Event Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${event.image})`,
                    }}
                  ></div>
                </div>
                {/* Event Name */}
                <div className="absolute bottom-2 left-2 right-2 bg-black/40 p-2 text-center rounded-md">
                  <h3 className="text-white font-bold">{event.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Details Modal */}
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
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    Date: {selectedEvent.date}
                  </span>
                  <Button color="blue" onClick={handleCloseModal}>
                    Close
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
