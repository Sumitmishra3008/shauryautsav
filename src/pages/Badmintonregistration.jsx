import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Badmintonregistration = () => {
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_API1;
  const Url = import.meta.env.VITE_API2;
  const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [isLoading, setIsLoading] = useState(false);
  const [players, setPlayers] = useState([
    {
      name: "",
      aadharNo: "",
    },
  ]);
  const [teamInfo, setTeamInfo] = useState({
    collegeName: "",
    captainName: "",
    captainEmail: "",
    captainPhone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      emailjs.init(EMAIL_PUBLIC_KEY);
      console.log("EmailJS initialized successfully");

      // Verify environment variables are loaded
      if (!EMAIL_SERVICE_ID || !EMAIL_TEMPLATE_ID || !EMAIL_PUBLIC_KEY) {
        console.error("Missing required EmailJS environment variables");
      }
    } catch (error) {
      console.error("Error initializing EmailJS:", error);
    }
  }, []);

  const sendConfirmationEmail = async () => {
    const templateParams = {
      to_email: teamInfo.captainEmail,
      to_name: teamInfo.captainName,
      college_name: teamInfo.collegeName,
      team_size: players.length,
      player_list: players
        .map((player, index) => `${index + 1}. ${player.name}`)
        .join("\n"),
    };

    try {
      console.log("Sending email with params:", templateParams); // Debug log

      const response = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        templateParams
      );

      console.log("Email sent successfully:", response); // Log success response
    } catch (error) {
      console.error(
        "Error sending confirmation email:",
        error.text || error.message
      );
      throw error; // Re-throw to handle in handleSubmit
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const teamData = new FormData();
      teamData.append("timestamp", new Date().toISOString());
      teamData.append("captainEmail", teamInfo.captainEmail);
      teamData.append("captainName", teamInfo.captainName);
      teamData.append("captainPhone", teamInfo.captainPhone);
      teamData.append("collegeName", teamInfo.collegeName);
      teamData.append("event", "Badminton");

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: teamData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      for (const player of players) {
        const playerData = new FormData();
        playerData.append("event", "Badminton");
        playerData.append("teamName", teamInfo.collegeName);
        playerData.append("playerNumber", players.indexOf(player) + 1);
        playerData.append("name", player.name);
        playerData.append("aadharNo", player.aadharNo);

        const playerResponse = await fetch(Url, {
          method: "POST",
          body: playerData,
        });
      }

      try {
        await sendConfirmationEmail();
        console.log("Email sent successfully");
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
        alert(
          "Registration successful but failed to send confirmation email. Please check your email settings."
        );
        // Continue with form reset despite email failure
      }

      setSubmitted(true);
      setTeamInfo({
        collegeName: "",
        captainName: "",
        captainEmail: "",
        captainPhone: "",
      });
      setPlayers([
        {
          name: "",
          aadharNo: "",
        },
      ]);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting registration. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleTeamInfoChange = (e) => {
    setTeamInfo({
      ...teamInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlayerChange = (index, field, value) => {
    const newPlayers = [...players];
    newPlayers[index] = {
      ...newPlayers[index],
      [field]: value,
    };
    setPlayers(newPlayers);
  };

  const addPlayer = () => {
    if (players.length < 5) {
      setPlayers([
        ...players,
        {
          name: "",
          aadharNo: "",
        },
      ]);
    }
  };

  const removePlayer = (index) => {
    if (players.length > 1) {
      const newPlayers = players.filter((_, i) => i !== index);
      setPlayers(newPlayers);
    }
  };

  return (
    <section className="relative py-16 bg-gray-900 min-h-screen w-full">
      <div
        className="bg-fixed min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: "url(/images/hero_image.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(1)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-#264d8c mb-4">
              Badminton Team Registration
            </h1>
            <p className="text-#264d8c-300">
              Register your team for Shauryotsava 2025
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-8 bg-gray-800 p-8 rounded-lg shadow-xl"
          >
            {/* Team Information Section */}
            <div className="bg-gray-700 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-white mb-6">
                Team Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">
                    College Name
                  </label>
                  <input
                    type="text"
                    name="collegeName"
                    value={teamInfo.collegeName}
                    onChange={handleTeamInfoChange}
                    className="w-full bg-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">
                    Captain's Name
                  </label>
                  <input
                    type="text"
                    name="captainName"
                    value={teamInfo.captainName}
                    onChange={handleTeamInfoChange}
                    className="w-full bg-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">
                    Captain's Email
                  </label>
                  <input
                    type="email"
                    name="captainEmail"
                    value={teamInfo.captainEmail}
                    onChange={handleTeamInfoChange}
                    className="w-full bg-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">
                    Captain's Phone
                  </label>
                  <input
                    type="tel"
                    name="captainPhone"
                    value={teamInfo.captainPhone}
                    onChange={handleTeamInfoChange}
                    className="w-full bg-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Players Section */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white">
                  Player Details
                </h2>
                <button
                  type="button"
                  onClick={addPlayer}
                  disabled={players.length >= 5}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
                >
                  Add Player ({players.length}/5)
                </button>
              </div>

              {players.map((player, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-6 rounded-lg relative"
                >
                  <div className="absolute top-4 right-4">
                    <button
                      type="button"
                      onClick={() => removePlayer(index)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      disabled={players.length <= 1}
                    >
                      ✕
                    </button>
                  </div>

                  <h3 className="text-lg font-medium text-white mb-4">
                    Player {index + 1}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={player.name}
                        onChange={(e) =>
                          handlePlayerChange(index, "name", e.target.value)
                        }
                        className="w-full bg-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">
                        Aadhar Number
                      </label>
                      <input
                        type="text"
                        value={player.aadharNo}
                        onChange={(e) =>
                          handlePlayerChange(index, "aadharNo", e.target.value)
                        }
                        className="w-full bg-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br text-white px-8 py-3 rounded-lg font-medium text-lg focus:ring-4 focus:ring-blue-300 disabled:opacity-50 flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  "Submit Registration"
                )}
              </button>
            </div>
          </form>

          {/* Previous form fields remain unchanged */}

          {/* Loading Overlay */}
          {isLoading && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-800 font-medium text-lg">
                  We are submitting your form...
                </p>
              </div>
            </div>
          )}

          {/* Success Message */}
          {submitted && (
            <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
              <span>✓</span>
              <span>Registration submitted successfully!</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Badmintonregistration;
