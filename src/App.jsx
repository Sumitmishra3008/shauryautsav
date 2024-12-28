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
import Events2 from "./pages/Events2";
import Basketregistration from "./pages/Basketregistration.jsx";
import Volleyballregistration from "./pages/Volleyballregistration.jsx";
import Chessregistration from "./pages/Chessregistration.jsx";
import Athleticsregistration from "./pages/Athleticsregistration.jsx";
import Badmintonregistration from "./pages/Badmintonregistration.jsx";
import Footballregistration from "./pages/Footballregistration.jsx";
import Taekwondoregistration from "./pages/Taekwondoregistration.jsx";
import Kabaddiregistration from "./pages/Kabaddiregistration.jsx";
import Ttregistration from "./pages/Ttregistration.jsx";
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
          <Route path="/events" element={<Events2 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/team" element={<Team />} />
          <Route path="/register/1" element={<Basketregistration />} />
          <Route path="/register/2" element={<Volleyballregistration />} />
          <Route path="/register/3" element={<Chessregistration />} />
          <Route path="/register/4" element={<Athleticsregistration />} />
          <Route path="/register/5" element={<Badmintonregistration />} />
          <Route path="/register/6" element={<CricketRegistration />} />
          <Route path="/register/7" element={<Footballregistration />} />
          <Route path="/register/8" element={<Taekwondoregistration />} />
          <Route path="/register/9" element={<Kabaddiregistration />} />
          <Route path="/register/10" element={<Ttregistration />} />
        </Routes>
        {/* <CricketRegistration /> */}
      </div>
      <Footer />
    </>
  );
};

export default App;
