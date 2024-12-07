import React, { useState } from "react";
import { Card, Button } from "flowbite-react";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const TeamSection = () => {
  const [activeDepartment, setActiveDepartment] = useState("Management");

  const teamMembers = {
    Management: [
      {
        name: "Sarah Johnson",
        role: "Event Director",
        image: "public/images/hero_image.jpg",
        socials: {
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
      {
        name: "Michael Chen",
        role: "Operations Manager",
        image: "/api/placeholder/400/400",
        socials: {
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
    ],
    Marketing: [
      {
        name: "Emma Rodriguez",
        role: "Marketing Lead",
        image: "/api/placeholder/400/400",
        socials: {
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
      {
        name: "Alex Kim",
        role: "Social Media Coordinator",
        image: "/api/placeholder/400/400",
        socials: {
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
      },
    ],
    Technical: [
      {
        name: "David Wong",
        role: "Technical Director",
        image: "/api/placeholder/400/400",
        socials: {
          linkedin: "#",
          github: "#",
          twitter: "#",
        },
      },
      {
        name: "Rachel Patel",
        role: "Event Tech Specialist",
        image: "/api/placeholder/400/400",
        socials: {
          linkedin: "#",
          github: "#",
          twitter: "#",
        },
      },
    ],
    Operations: [
      {
        name: "Carlos Mendez",
        role: "Logistics Coordinator",
        image: "/api/placeholder/400/400",
        socials: {
          linkedin: "#",
          instagram: "#",
          twitter: "#",
        },
      },
      {
        name: "Olivia Kim",
        role: "Venue Management",
        image: "/api/placeholder/400/400",
        socials: {
          linkedin: "#",
          instagram: "#",
          twitter: "#",
        },
      },
    ],
  };

  const departments = Object.keys(teamMembers);

  const renderSocialIcons = (socials) => {
    const iconMap = {
      linkedin: FaLinkedin,
      twitter: FaTwitter,
      instagram: FaInstagram,
      github: FaGithub,
    };

    return (
      <div className="flex justify-center space-x-3 mt-4">
        {Object.entries(socials).map(([platform, link]) => {
          const IconComponent = iconMap[platform];
          return (
            <a
              key={platform}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <IconComponent size={24} />
            </a>
          );
        })}
      </div>
    );
  };

  return (
    <section className="relative py-16 bg-gray-50">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url(/api/placeholder/1920/1080)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(0.3)",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-indigo-900/70 z-10" />

      <div className="relative z-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Our Team
        </h2>

        {/* Department Navigation */}
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-12">
          {departments.map((dept) => (
            <Button
              key={dept}
              color={activeDepartment === dept ? "blue" : "gray"}
              onClick={() => setActiveDepartment(dept)}
              className="px-3 md:px-6 py-2 mb-2"
            >
              {dept}
            </Button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {teamMembers[activeDepartment].map((member) => (
            <Card
              key={member.name}
              className="max-w-sm mx-auto w-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/90 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative w-full pb-[100%]">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={member.image}
                  alt={`${member.name} profile`}
                />
              </div>
              <div className="p-4 pt-0 text-center">
                <h5 className="mt-4 mb-1 text-lg md:text-xl font-medium text-gray-900">
                  {member.name}
                </h5>
                <span className="text-xs md:text-sm text-gray-500 block mb-2">
                  {member.role}
                </span>
                {renderSocialIcons(member.socials)}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
