import React from "react";

// Card Component
const Card = ({ image, designation }) => {
  return (
    <div className="bg-gray-800/80 rounded-lg p-4 shadow-md flex flex-col items-center backdrop-blur-sm border border-gray-700">
      <img
        src={image}
        alt={designation}
        className="w-24 h-24 object-cover rounded-full mb-2"
      />
      <p className="text-lg font-medium text-white">{designation}</p>
    </div>
  );
};

const About = () => {
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
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <img
            src="/images/image.png"
            alt="sports fest"
            className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
          />
          <h1 className="text-4xl font-bold text-center mb-4 text-white drop-shadow-lg">
            Welcome to Shourya-Utsav
          </h1>
          <p className="text-xl text-center text-white/90">
            A celebration of sportsmanship and teamwork
          </p>
        </div>

        {/* About Section */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-lg">
            About Us
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Shourya-Utsav is an annual sports fest that brings together
            participants from across the region to compete, celebrate, and
            showcase their athletic skills. Join us to experience the thrill,
            teamwork, and energy of sportsmanship.
          </p>
        </div>

        {/* Middle Content */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                style={{ height: "400px", width: "600px" }}
                src="images/vineet_kansal.jpg"
                alt="secondary image"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Join the Spirit
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Stay tuned for exciting matches, amazing performances, and the
                spirit of sports! Experience the thrill of competition and the
                joy of victory at Shourya-Utsav.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                style={{ height: "400px", width: "600px" }}
                src="images/faculty_advisor.jpg"
                alt="secondary image"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Join the Spirit
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Stay tuned for exciting matches, amazing performances, and the
                spirit of sports! Experience the thrill of competition and the
                joy of victory at Shourya-Utsav.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                style={{ height: "400px", width: "600px" }}
                src="images/pkt.jpg"
                alt="secondary image"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Join the Spirit
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Stay tuned for exciting matches, amazing performances, and the
                spirit of sports! Experience the thrill of competition and the
                joy of victory at Shourya-Utsav.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                style={{ height: "400px", width: "600px" }}
                src="images/satyendra_singh.jpg"
                alt="secondary image"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Join the Spirit
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Stay tuned for exciting matches, amazing performances, and the
              spirit of sports! Experience the thrill of competition and the joy
              of victory at Shourya-Utsav.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
            Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card
              image="https://via.placeholder.com/150"
              designation="Team Lead"
            />
            <Card
              image="https://via.placeholder.com/150"
              designation="Coordinator"
            />
            <Card
              image="https://via.placeholder.com/150"
              designation="Manager"
            />
            <Card
              image="https://via.placeholder.com/150"
              designation="Member"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
