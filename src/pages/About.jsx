import React from "react";

// Card Component
const Card = ({ image, designation, linkedinUrl, instagramUrl }) => {
  return (
    <div className="bg-gray-800/80 rounded-lg p-4 shadow-md flex flex-col items-center backdrop-blur-sm border border-gray-700">
      <div className="w-32 h-32 mb-3">
        <img
          src={image}
          alt={designation}
          className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <p className="text-lg font-medium text-white mb-3">{designation}</p>

      <div className="flex gap-4 text-sm">
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            LinkedIn
          </a>
        )}
        {instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300 transition-colors"
          >
            Instagram
          </a>
        )}
      </div>
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
            Welcome to Shouryotsava
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
            The countdown is over! Shauryotsava , the most electrifying sports
            fest of IET Lucknow, is BACK WITH A BANG after a pandemic-induced
            hiatus! It’s bigger, bolder, and more intense than ever! This is
            where talent meets passion, where every match is a battle, and every
            moment is packed with adrenaline. Get ready for epic showdowns in
            football, basketball, volleyball, badminton, table tennis, chess,
            and track & field – all designed to push you to perform like never
            before. Whether you're scoring goals on the football field or
            outsmarting opponents in chess, Shauryotsava challenges you to bring
            your A-game! At IET Lucknow, excellence is in our DNA. We don’t just
            excel in academics – we dominate in every field we step into.
            Shauryotsava reflects this spirit, celebrating teamwork, resilience,
            and the thrill of competition. It’s more than just a fest; it’s a
            movement uniting us all in the pursuit of greatness! With energy at
            an all-time high, Shauryotsava 2025 will be an EXPLOSIVE comeback,
            unleashing a torrent of athleticism, determination, and the true
            essence of IET Lucknow!
          </p>
        </div>

        {/* Middle Content */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                // style={{ height: "400px", width: "600px" }}
                src="images/vineet_kansal.jpg"
                alt="secondary image"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-white">Message!</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                I am thrilled to see you all gear up for Shauryotsava 2025!{" "}
                <br />
                This is your chance to showcase your skills, test your limits,
                and compete with passion and pride. Push your boundaries, and
                experience the thrill of victory. Best of luck to all—let the
                game begin!
                <br />
                Warm regards,
                <br />
                Vineet Kansal
                <br />
                Director, IET Lucknow
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
              <h3 className="text-2xl font-bold mb-4 text-white">Message</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Dear Students,
                <br />
                Shauryotsava is a celebration of athleticism, teamwork, and
                determination. As you participate in this exciting fest,
                remember that every challenge is an opportunity to grow,
                collaborate, and give your best. May this event inspire you to
                achieve new heights, both on and off the field.
                <br />
                Warm regards,
                <br />
                Dr. J.P. Pandey
                <br />
                Vice Chancellor,IET Lucknow.
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
              <h3 className="text-2xl font-bold mb-4 text-white">Message!</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Shauryotsava 2024, a celebration of excellence, teamwork, and
                sportsmanship. It is an opportunity to push boundaries, build
                connections, and inspire through determination and integrity. To
                all participants, wishing them success—let the games commence!
                <br />
                Warm regards,
                <br />
                Dr. Pawan Kumar Tiwari <br />
                ISSAC Chairman,
                <br />
                IET Lucknow
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                style={{
                  height: "600px",
                  width: "450px",
                  backgroundSize: "cover",
                }}
                src="images/satyendra_singh.jpg"
                alt="secondary image"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-white">Message</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Welcome to Shauryotsava, the annual sports fest of IET Lucknow.
                This event celebrates sportsmanship, teamwork, and excellence.
                My best wishes to all participants—play hard, play fair, and
                make it memorable!
                <br />
                Warm regards,
                <br />
                Dr. Satyendra Singh <br />
                ISSAC Chairman,
                <br />
                IET Lucknow
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
            Coordinators
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card
              image="images/sandeep.jpg"
              designation="Team Lead"
              linkedinUrl={"https://www.google.com"}
              instagramUrl={"https://www.google.com"}
            />
            <Card
              image="images/abhishek.jpg"
              designation="Coordinator"
              linkedinUrl={"https://www.google.com"}
              instagramUrl={"https://www.google.com"}
            />

            <Card
              image="images/mansi.jpg"
              designation="Coordinator"
              linkedinUrl={"https://www.google.com"}
              instagramUrl={"https://www.google.com"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
