const Sponsors = () => {
  // Local Card Component
  const Card = ({ imageSrc, altText }) => {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-center">
        <img src={imageSrc} alt={altText} className="max-h-16 object-contain" />
      </div>
    );
  };

  // List of sponsors with their images and alt texts
  const sponsors = [
    { imageSrc: "/images/teamImages/sumit.png", altText: "Sponsor 1" },
    { imageSrc: "/images/teamImages/sumit.png", altText: "Sponsor 2" },
    { imageSrc: "/images/teamImages/sumit.png", altText: "Sponsor 3" },
    { imageSrc: "/images/teamImages/sumit.png", altText: "Sponsor 4" },
  ];

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
          <h2 className="text-4xl font-bold text-white">Our Sponsors</h2>
          <p className="text-gray-300 mt-4">
            We are grateful for the support of our incredible sponsors who make
            our vision possible.
          </p>
        </div>

        {/* Grid Layout for Sponsors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <Card
              key={index}
              imageSrc={sponsor.imageSrc}
              altText={sponsor.altText}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            Interested in partnering with us?{" "}
            <a href="/contact" className="text-blue-500 hover:underline">
              Contact us
            </a>{" "}
            to become a sponsor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
