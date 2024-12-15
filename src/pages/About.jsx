import React from "react";
import { Card } from "flowbite-react";

const AboutUs = () => {
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

      <div className="relative container mx-auto px-4 bg-transparent">
        {/* Page Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
          About Us
        </h2>

        {/* Hero Image Section */}
        <div className="mb-16 max-w-4xl mx-auto">
          <Card
            className="group overflow-hidden border-0 bg-transparent"
            imgAlt="Sports Fest Hero Image"
            imgSrc="/api/placeholder/1200/600"
          >
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
              <img
                className="w-full h-full object-cover transition-transform duration-500"
                src="/api/placeholder/1200/600"
                alt="Sports Fest Hero"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-100 group-hover:opacity-95 transition-opacity duration-500" />
            </div>
          </Card>
        </div>

        {/* Introduction Text */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-gray-200 text-lg leading-relaxed backdrop-blur-md bg-gray-900/30 p-6 rounded-lg shadow-lg">
            Welcome to our Sports Fest, where passion meets competition! We
            believe in bringing together athletes, enthusiasts, and community
            members to celebrate the spirit of sportsmanship. Our mission is to
            create an inclusive, exciting environment that promotes teamwork,
            personal growth, and the joy of athletic achievement.
          </p>
        </div>

        {/* Image and Text Section */}
        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto gap-8 mb-16">
          {/* Image */}
          <div className="w-full md:w-1/2 group">
            <Card
              className="overflow-hidden border-0 bg-transparent h-96"
              imgAlt="Sports Fest Event"
              imgSrc="/api/placeholder/600/600"
            >
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                <img
                  className="w-full h-full object-cover transition-transform duration-500"
                  src="/api/placeholder/600/600"
                  alt="Sports Fest Event"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-100 group-hover:opacity-95 transition-opacity duration-500" />
              </div>
            </Card>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-white">
            <div className="backdrop-blur-md bg-gray-900/30 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Our Vision
              </h3>
              <p className="text-gray-200 leading-relaxed">
                At Sports Fest, we're more than just an event - we're a
                community dedicated to promoting athletic excellence, personal
                development, and the transformative power of sports. Our
                carefully curated events bring together diverse talents,
                fostering an environment of mutual respect, learning, and
                celebration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
