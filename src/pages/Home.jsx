import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative h-[97vh] w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero_image.jpg')] bg-fixed bg-cover bg-center bg-no-repeat">
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <img
              src="https://spardha.org.in/images/logo/spardha-logo-white.png"
              alt="ShauryaUtsav Logo"
              className="w-24 h-24 md:w-32 md:h-32 object-contain filter brightness-0 invert"
            />
          </div>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
            ShauryaUtsav 2025
          </h1>

          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            21 - 23 Feb
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to="/register">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Register Now
              </button>
            </Link>
            <Link to="/about">
              <button
                type="button"
                className="text-white border border-white hover:bg-white hover:text-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
