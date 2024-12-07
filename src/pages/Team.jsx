import React, { useState } from "react";
import { Card, Button } from "flowbite-react";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { teamMembers } from "../assets/data/TeamData";

const renderSocialIcons = (socials) => {
  const iconMap = {
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    instagram: FaInstagram,
    github: FaGithub,
  };

  return (
    <div className="flex justify-center space-x-3 mt-2">
      {Object.entries(socials).map(([platform, link]) => {
        const IconComponent = iconMap[platform];
        return (
          <a
            key={platform}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors hover:scale-110 transform duration-300"
          >
            <IconComponent size={20} />
          </a>
        );
      })}
    </div>
  );
};

const TeamSection = () => {
  const [activeDepartment, setActiveDepartment] = useState("Management");
  const departments = Object.keys(teamMembers);

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
          Meet Our Team
        </h2>

        {/* Department Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {departments.map((dept) => (
            <Button
              key={dept}
              color={activeDepartment === dept ? "blue" : "gray"}
              onClick={() => setActiveDepartment(dept)}
              className="rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {dept}
            </Button>
          ))}
        </div>

        {/* Team Members Container - Updated with flex */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {teamMembers[activeDepartment].map((member) => (
            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] max-w-sm">
              <Card
                key={member.name}
                className="relative group h-96 w-full overflow-hidden border-0 bg-transparent transition-transform duration-500 ease-in-out hover:scale-105"
                imgAlt={`${member.name} profile`}
                imgSrc={member.image}
              >
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500"
                    src={member.image}
                    alt={`${member.name} profile`}
                  />

                  {/* Gradient overlay for text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-100 group-hover:opacity-95 transition-opacity duration-500" />
                </div>

                {/* Content container */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center transform transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className="backdrop-blur-md bg-gray-900/30 rounded-lg p-3 transform transition-all duration-500 group-hover:bg-gray-900/50 group-hover:shadow-xl">
                    <h5 className="text-xl font-semibold text-white mb-2 transform transition-all duration-500 group-hover:scale-105">
                      {member.name}
                    </h5>
                    <span className="text-sm text-gray-200 block mb-3 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                      {member.role}
                    </span>
                    {renderSocialIcons(member.socials)}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
