import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative h-[97vh] w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero_image.jpg')] bg-fixed bg-cover bg-center bg-no-repeat">
        {/* Improved Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-7xl mx-auto">
          {/* Logo Container with Animation */}
          <div className="mb-0 sm:mb-0 flex justify-center transform hover:scale-105 transition-transform duration-300">
            <img
              src="images/shauryotsava_logo2.png"
              alt="Shauryotsava Logo"
              className="w-72 sm:w-80 md:w-96 object-contain"
            />
          </div>

          {/* Main Title with Enhanced Typography */}
          <h1 className="mb-6 text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-800 to-yellow-500 ">
            Shauryotsava 2025
          </h1>

          {/* Tagline with Improved Styling */}
          <p className="mb-4 text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
            Play like there's no tomorrow
          </p>

          {/* Date with Special Styling */}
          <div className="mb-12 inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <p className="text-lg sm:text-xl font-semibold text-green-950 tracking-widest">
              21 - 23 FEBRUARY 2025
            </p>
          </div>

          {/* Enhanced Button Container */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6">
            <Link to="/register">
              <button
                type="button"
                className="w-full sm:w-auto px-8 py-4 text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 font-bold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
              >
                Register Now
              </button>
            </Link>
            <Link to="/about">
              <button
                type="button"
                className="w-full sm:w-auto px-8 py-4 text-cyan-300 border-2 border-cyan-300 hover:bg-cyan-300 hover:text-black font-bold rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
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
