import React, { useState } from "react";

const Chessregistration = () => {
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_API1;
  const Url = import.meta.env.VITE_API2; // Replace with your URL
  // Replace with your URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    // First submit team info
    const teamData = new FormData();
    teamData.append("timestamp", new Date().toISOString());
    teamData.append("captainEmail", teamInfo.captainEmail);
    teamData.append("captainName", teamInfo.captainName);
    teamData.append("captainPhone", teamInfo.captainPhone);
    teamData.append("collegeName", teamInfo.collegeName);
    teamData.append("event", "Chess");
    // const teamData = {
    //   timestamp: new Date().toISOString(),
    //   captainEmail: teamInfo.captainEmail,
    //   captainName: teamInfo.captainName,
    //   captainPhone: teamInfo.captainPhone,
    //   collegeName: teamInfo.collegeName,
    // };

    // await submitToGoogleSheets(teamData, "Teams");

    // Then submit each player's info
    // for (const player of players) {
    //   const playerData = {
    //     teamName: teamInfo.collegeName,
    //     ...player,
    //   };
    //   await submitToGoogleSheets(playerData, "Players");
    // }

    // Show success message
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: teamData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      for (const player of players) {
        const playerData = new FormData();
        playerData.append("event", "Chess");
        playerData.append("teamName", teamInfo.collegeName);
        playerData.append("playerNumber", players.indexOf(player) + 1);
        playerData.append("name", player.name);

        // playerData.append("age", player.age);
        // playerData.append("role", player.role);
        // playerData.append("email", player.email);
        // playerData.append("mobile", player.mobile);
        // playerData.append("enrollmentNo", player.enrollmentNo);
        playerData.append("aadharNo", player.aadharNo);
        const playerResponse = await fetch(Url, {
          method: "POST",
          body: playerData,
        });
      }

      setSubmitted(true);

      // Reset form
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

      // Reload after delay
      //   setTimeout(() => {
      //     window.location.reload();
      //   }, 3000);
      // }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting registration. Please try again.");
    }
  };

  // const submitToGoogleSheets = async (data, sheetName) => {
  //   const response = await fetch(GOOGLE_SCRIPT_URL, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       data: data,
  //       sheet: sheetName,
  //     }),
  //   });

  //   if (!response.ok) {
  //     throw new Error("Failed to submit data");
  //   }

  //   return response.json();
  // };

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
    if (players.length < 2) {
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSubmitted(true);
  //   // Add your form submission logic here
  //   setTimeout(() => setSubmitted(false), 3000);
  // };

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
              Chess Team Registration
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
                  disabled={players.length >= 2}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
                >
                  Add Player ({players.length}/2)
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
                className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br text-white px-8 py-3 rounded-lg font-medium text-lg focus:ring-4 focus:ring-blue-300"
              >
                Submit Registration
              </button>
            </div>
          </form>

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

export default Chessregistration;
