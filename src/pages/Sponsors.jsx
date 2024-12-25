const Sponsors = () => {
  // Local Card Component
  const Card = ({ imageSrc, altText }) => {
    return (
      <div className="bg-transparent p-0   flex items-center justify-center">
        <img
          src={imageSrc}
          alt={altText}
          className="max-h-48 object-contain bg-cover"
        />
      </div>
    );
  };

  // List of sponsors with their images and alt texts
  const sponsors = [
    { imageSrc: "/images/sponsors/sponsor1.png", altText: "Sponsor 1" },
    { imageSrc: "/images/sponsors/sponsor2.png", altText: "Sponsor 1" },
    { imageSrc: "/images/sponsors/sponsor3.png", altText: "Sponsor 1" },
    { imageSrc: "/images/sponsors/sponsor4.jpg", altText: "Sponsor 1" },
    { imageSrc: "/images/sponsors/sponsor5.png", altText: "Sponsor 1" },
    { imageSrc: "/images/sponsors/sponsor6.png", altText: "Sponsor 1" },
    { imageSrc: "/images/sponsors/sponsor7.png", altText: "Sponsor 1" },
    { imageSrc: "/images/sponsors/sponsor8.png", altText: "Sponsor 1" },
    { imageSrc: "/images/sponsors/sponsor9.png", altText: "Sponsor 1" },
    { imageSrc: "/images/sponsors/sponsor10.png", altText: "Sponsor 1" },
    { imageSrc: "/images/sponsors/sponsor11.png", altText: "Sponsor 1" },
    { imageSrc: "/images/sponsors/sponsor12.png", altText: "Sponsor 1" },
    { imageSrc: "/images/sponsors/sponsor13.png", altText: "Sponsor 1" },
    { imageSrc: "/images/sponsors/sponsor14.jpg", altText: "Sponsor 1" },
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
