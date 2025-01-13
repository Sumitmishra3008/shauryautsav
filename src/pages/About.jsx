import React from "react";

const Card = ({ image, designation, linkedinUrl, instagramUrl }) => {
  return (
    <div className="bg-gray-800/80 rounded-lg p-4 shadow-md flex flex-col items-center backdrop-blur-sm border border-gray-700">
      <div className="w-24 h-24 md:w-32 md:h-32 mb-3">
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

const MessageCard = ({ image, message, name, designation }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-800/30 rounded-xl p-4 md:p-8 backdrop-blur-sm mb-8">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4 text-white">Message!</h3>
        <p className="text-lg text-white/90 leading-relaxed">
          {message}
          <br />
          Warm regards,
          <br />
          {name}
          {designation && (
            <>
              <br />
              {designation}
            </>
          )}
        </p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="relative py-16 bg-gray-900 min-h-screen w-full">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url(/images/hero_image.jpg)",
          filter: "brightness(1)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="aspect-[16/9] w-full mb-6">
            <img
              src="/images/image.png"
              alt="sports fest"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white drop-shadow-lg">
            Welcome to Shouryotsava
          </h1>
          <p className="text-lg md:text-xl text-center text-white/90">
            A celebration of sportsmanship and teamwork
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white drop-shadow-lg">
            About Us
          </h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            {/* About text content */}
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <MessageCard
            image="images/faculty_advisor.jpg"
            message="Dear Students, Shauryotsava is a celebration of athleticism, teamwork, and determination. As you participate in this exciting fest, remember that every challenge is an opportunity to grow, collaborate, and give your best. May this event inspire you to achieve new heights, both on and off the field."
            name="Prof. J.P. Pandey"
            designation="Vice Chancellor, Dr. A.P.J. Abdul Kalam Technical University, Lucknow"
          />

          <MessageCard
            image="images/vineet_kansal.jpg"
            message="I am thrilled to see you all gear up for Shauryotsava 2025! This is your chance to showcase your skills, test your limits, and compete with passion and pride. Push your boundaries, and experience the thrill of victory. Best of luck to all—let the game begin!"
            name="Prof. Vineet Kansal"
            designation="Director, IET Lucknow"
          />

          <MessageCard
            image="images/satyendra_singh.jpg"
            message="Welcome to Shauryotsava, the annual sports fest of IET Lucknow. This event celebrates sportsmanship, teamwork, and excellence. My best wishes to all participants—play hard, play fair, and make it memorable!"
            name="Dr. Satyendra Singh"
            designation="ISSAC Chairman, IET Lucknow"
          />

          <MessageCard
            image="images/pkt.png"
            message="Shauryotsava 2024, a celebration of excellence, teamwork, and sportsmanship. It is an opportunity to push boundaries, build connections, and inspire through determination and integrity. To all participants, wishing them success—let the games commence!"
            name="Dr. Pawan Kumar Tiwari"
            designation="Sports Faculty Advisor and Shauryotsava Chairman, IET Lucknow"
          />
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
            Coordinators
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Card
              image="images/sandeep.jpg"
              designation="Team Lead"
              linkedinUrl="https://www.linkedin.com/in/sandeep-patel-086a68299/"
              instagramUrl="https://www.google.com"
            />
            <Card
              image="images/abhishek.jpg"
              designation="Coordinator"
              linkedinUrl="https://www.linkedin.com/in/abhishek-mishra-702170293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              instagramUrl="https://www.instagram.com/mishra_abhiunstopable318/profilecard/?igsh=MTJxYnU2dHZ3dTJ5ZQ=="
            />
            <Card
              image="images/mansi.jpg"
              designation="Coordinator"
              linkedinUrl="https://www.google.com"
              instagramUrl="https://www.google.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
