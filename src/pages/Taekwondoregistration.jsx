import React, { useState } from "react";

const Taekwondoregistration = () => {
  const [players, setPlayers] = useState([
    {
      name: "",
      age: "",
      email: "",
      mobile: "",
      enrollmentNo: "",
      aadharNo: "",
      role: "",
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
    if (players.length < 12) {
      setPlayers([
        ...players,
        {
          name: "",
          age: "",
          email: "",
          mobile: "",
          enrollmentNo: "",
          aadharNo: "",
          role: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your form submission logic here
    setTimeout(() => setSubmitted(false), 3000);
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
            <h1 className="text-4xl font-bold text-white mb-4">
              Basketball Team Registration
            </h1>
            <p className="text-gray-300">
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
                  disabled={players.length >= 12}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
                >
                  Add Player ({players.length}/12)
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                      <label className="block text-gray-300 mb-2">Age</label>
                      <input
                        type="number"
                        value={player.age}
                        onChange={(e) =>
                          handlePlayerChange(index, "age", e.target.value)
                        }
                        className="w-full bg-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Role</label>
                      <select
                        value={player.role}
                        onChange={(e) =>
                          handlePlayerChange(index, "role", e.target.value)
                        }
                        className="w-full bg-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                      >
                        <option value="">Select Role</option>
                        <option value="batsman">Batsman</option>
                        <option value="bowler">Bowler</option>
                        <option value="all-rounder">All-Rounder</option>
                        <option value="wicket-keeper">Wicket Keeper</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        value={player.email}
                        onChange={(e) =>
                          handlePlayerChange(index, "email", e.target.value)
                        }
                        className="w-full bg-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        value={player.mobile}
                        onChange={(e) =>
                          handlePlayerChange(index, "mobile", e.target.value)
                        }
                        className="w-full bg-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">
                        Enrollment Number
                      </label>
                      <input
                        type="text"
                        value={player.enrollmentNo}
                        onChange={(e) =>
                          handlePlayerChange(
                            index,
                            "enrollmentNo",
                            e.target.value
                          )
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

export default Taekwondoregistration;
