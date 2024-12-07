import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar fluid>
      <Navbar.Brand>
        <Link to="/">
          <img
            src="https://spardha.org.in/images/logo/spardha-logo-white.png"
            className="mr-3 h-6 sm:h-9"
            alt="ShauryAutsav"
          />
        </Link>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Shauryautsav
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/register">
          <Button>Register</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          className="text-gray-700 hover:text-blue-500 dark:text-white"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-gray-700 hover:text-blue-500 dark:text-white"
          to="/about"
        >
          About Us
        </Link>
        <Link
          className="text-gray-700 hover:text-blue-500 dark:text-white"
          to="/events"
        >
          Events
        </Link>
        <Link
          className="text-gray-700 hover:text-blue-500 dark:text-white"
          to="/team"
        >
          Team
        </Link>
        <Link
          className="text-gray-700 hover:text-blue-500 dark:text-white"
          to="/sponsors"
        >
          Sponsors
        </Link>
        <Link
          className="text-gray-700 hover:text-blue-500 dark:text-white"
          to="/contact"
        >
          Contact Us
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
