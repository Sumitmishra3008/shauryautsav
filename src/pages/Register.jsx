import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/events");
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

      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        {/* <header className="bg-blue-900 text-white py-8 sm:py-12 px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Rules of Registration
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg px-2 text-gray-300">
            Get ready to join the action! Follow the guidelines below.
          </p>
        </header> */}

        {/* Main Content */}
        <main className="px-4 sm:px-6 py-8 sm:py-12 max-w-5xl mx-auto">
          {/* Why Register Section */}
          <div className="text-center mt-8 sm:mt-12">
            <button
              className="w-full sm:w-auto px-6 py-3 mb-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-semibold"
              onClick={() => handleRegister()}
            >
              Register Now
            </button>
          </div>
          <header className="bg-blue-900 text-white py-8 sm:py-12 px-4 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Rules of Registration
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg px-2 text-gray-300">
              Get ready to join the action! Follow the guidelines below.
            </p>
          </header>
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-400">
              Why Register?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700">
                <h3 className="font-bold text-lg mb-2 text-blue-300">
                  Win Prizes
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Compete to win trophies, medals, and exclusive prizes.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700">
                <h3 className="font-bold text-lg mb-2 text-blue-300">
                  Network
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Connect with sports enthusiasts and build new friendships.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700">
                <h3 className="font-bold text-lg mb-2 text-blue-300">
                  Have Fun
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Experience the joy of participating in thrilling competitions.
                </p>
              </div>
            </div>
          </section>

          {/* Registration Rules Section */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-400">
              Registration Rules
            </h2>
            <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
              <li className="hover:text-blue-400 transition-colors">
                Participants must register before the deadline.
              </li>
              <li className="hover:text-blue-400 transition-colors">
                Provide valid ID proof during registration.
              </li>
              <li className="hover:text-blue-400 transition-colors">
                Each participant can register for a maximum of three events.
              </li>
              <li className="hover:text-blue-400 transition-colors">
                Teams must consist of specified number of members for group
                events.
              </li>
            </ul>
          </section>

          {/* Important Dates Section */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-400">
              Important Dates
            </h2>
            <div className="p-4 bg-gray-800 border-l-4 border-blue-500 text-sm sm:text-base rounded-r-lg">
              <div className="space-y-2">
                <p className="flex flex-col sm:flex-row sm:items-center text-gray-300">
                  <strong className="min-w-[140px] text-blue-300">
                    Registration Opens:
                  </strong>
                  <span className="sm:ml-2">January 18, 2025</span>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center text-gray-300">
                  <strong className="min-w-[140px] text-blue-300">
                    Early Bird Deadline:
                  </strong>
                  <span className="sm:ml-2">February 02, 2025</span>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center text-gray-300">
                  <strong className="min-w-[140px] text-blue-300">
                    Final Deadline:
                  </strong>
                  <span className="sm:ml-2">February 15, 2025</span>
                </p>
              </div>
            </div>
          </section>

          {/* Steps to Register */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-400">
              Steps to Register
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="p-3 sm:p-4 bg-gray-800 rounded-lg flex items-center space-x-3 sm:space-x-4 hover:bg-gray-700 transition-colors border border-gray-700">
                <span className="bg-blue-900 text-white w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full flex-shrink-0 text-sm sm:text-base">
                  1
                </span>
                <p className="text-sm sm:text-base text-gray-300">
                  Navigate to the events page and click on your desired event.
                </p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-800 rounded-lg flex items-center space-x-3 sm:space-x-4 hover:bg-gray-700 transition-colors border border-gray-700">
                <span className="bg-blue-900 text-white w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full flex-shrink-0 text-sm sm:text-base">
                  2
                </span>
                <p className="text-sm sm:text-base text-gray-300">
                  Read the rulebook of specified event and click on Register .
                </p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-800 rounded-lg flex items-center space-x-3 sm:space-x-4 hover:bg-gray-700 transition-colors border border-gray-700">
                <span className="bg-blue-900 text-white w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full flex-shrink-0 text-sm sm:text-base">
                  3
                </span>
                <p className="text-sm sm:text-base text-gray-300">
                  Fill the registration form .
                </p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-800 rounded-lg flex items-center space-x-3 sm:space-x-4 hover:bg-gray-700 transition-colors border border-gray-700">
                <span className="bg-blue-900 text-white w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full flex-shrink-0 text-sm sm:text-base">
                  4
                </span>
                <p className="text-sm sm:text-base text-gray-300">
                  The form for the whole team will be filled by the team captain
                  for Athletics too.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
        </main>
      </div>
    </section>
  );
};

export default Register;
