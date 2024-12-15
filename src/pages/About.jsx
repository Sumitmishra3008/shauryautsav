import React, { useState } from "react";
import { Link } from "react-router-dom";

// Card Component
const Card = ({ image, designation }) => {
  return (
    <div className="bg-gray-200 rounded-lg p-4 shadow-md flex flex-col items-center">
      <img
        src={image}
        alt="person"
        className="w-24 h-24 object-cover rounded-full mb-2"
      />
      <p className="text-lg font-medium">{designation}</p>
    </div>
  );
};

// Main AboutUs Page
const About = () => {
  return (
    <>
      {/* Background Image with Gradient Overlay */}
      <div className="fixed inset-0 bg-[url('/images/hero_image.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Dark Gradient Overlay */}
        <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      <div className="relative flex mt-20 ">
        {/* Main Content */}
        <main className="flex flex-col ">
          {/* Section: Hero Image */}
          <div className="mb-8">
            <img
              src="public\images\image.png"
              alt="sports fest"
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="mt-4 text-center text-white text-lg">
              Welcome to Shourya-Utsav - a celebration of sportsmanship and
              teamwork.
            </p>
          </div>

          {/* Section: Description */}
          <div className="mb-8">
            <h2 className="text-2xl text-white font-bold text-center mb-4">
              About Us
            </h2>
            <p className="text-white text-center mx-auto max-w-3xl">
              Shourya-Utsav is an annual sports fest that brings together
              participants from across the region to compete, celebrate, and
              showcase their athletic skills. Join us to experience the thrill,
              teamwork, and energy of sportsmanship.
            </p>
          </div>

          {/* Section: middle Content */}
          <div className="flex justify-between items-center my-8 p-4 rounded-lg ">
            <div className="flex-1">
              <img
                src="https://via.placeholder.com/300x150"
                alt="secondary image"
                className="rounded-lg"
              />
            </div>
            <div className="flex-1 ml-4">
              <p className="text-white text-center">
                Stay tuned for exciting matches, amazing performances, and the
                spirit of sports!
              </p>
            </div>
          </div>

          {/* Section: Card Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {/* Replace 'person.png' with actual images */}
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
        </main>
      </div>
    </>
  );
};

export default About;
