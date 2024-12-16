import React from "react";

const Contact = () => {
  return (
    <section className="relative py-16 bg-gray-900 min-h-screen w-full">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-fixed bg-center"
        style={{
          backgroundImage: "url(/images/hero_image.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(0.8)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative container mx-auto px-4">
        <div className="text-center my-12">
          <h2 className="text-4xl font-bold text-white">Contact Us</h2>
          <p className="text-gray-300 mt-4">
            We’d love to hear from you! Send us a message and we’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-2 w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="mt-2 w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
