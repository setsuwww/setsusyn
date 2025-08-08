import { useState, useEffect } from "react";
import ListLink from "./ListLink";
import Logo from "./LogoPortofolio";
import MobileNavbar from "./MobileNavbarView";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.05;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-sky-50/50 backdrop-blur-sm border-b border-sky-100"
          : "bg-transparent"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 md:px-4 ${isScrolled ? "py-2 md:py-3" : "py-2 md:py-2"}`}>
        <div className="flex items-center justify-between h-16">

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-2">
            <ListLink />
          </div>


          {/* Mobile Menu */}
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;