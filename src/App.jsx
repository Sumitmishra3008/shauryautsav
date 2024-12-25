import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Register from "./pages/Register";
import Sponsors from "./pages/Sponsors";
import Team from "./pages/Team";
import Footer from "./components/Footer";
import CricketRegistration from "./pages/CricketRegistration.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main_area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        {/* <CricketRegistration /> */}
      </div>
      <Footer />
    </>
  );
};

export default App;
