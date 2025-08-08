import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import Logo from "./LogoPortofolio";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="lg:hidden py-4 px-6 fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      <div className="flex items-center justify-between">
        <Logo size="text-xl mt-2" />

        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center space-x-2 text-gray-800">
          <FaBars className={` ${isMenuOpen ? "text-gray-800 p-2 bg-gray-100" : "text-sky-800 p-2 bg-sky-100"} w-[100%] h-[100%]`}  />
        </button>
        
      </div>

      <div className={` ${isMenuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-gray-800 rounded-b-[30%] opacity-90 shadow-md z-10`}>
        <div className="flex flex-col items-center space-y-6 py-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-lg text-sky-100 tracking-wider font-semibold hover:text-sky-500">
            Home
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-lg text-sky-100 tracking-wider font-semibold hover:text-sky-500">
            About
          </Link>

          <Link
            to="service"
            smooth={true}
            duration={500}
            className="text-lg text-sky-100 tracking-wider font-semibold hover:text-sky-500">
            Portfolio
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-lg text-sky-100 tracking-wider font-semibold hover:text-sky-500">
            Skills
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-lg text-sky-100 tracking-wider font-semibold hover:text-sky-500">
            Contact
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default MobileNavbar;
