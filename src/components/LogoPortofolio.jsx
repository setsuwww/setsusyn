import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export const biodata = {
  namaPertama: '𝐑𝐢𝐟𝐪𝐢',
  namaLengkap: '𝐈𝐛𝐫𝐚𝐡𝐢𝐦',
};

const Logo = ({ size = 'text-4xl', color = 'text-sky-900' }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * 0.1;
      setIsScrolled(scrollPosition >= scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${size} flex-shrink-0 flex mb-4`} data-aos='slide-right' data-aos-delay={200}>
      <p
        className={` font-bold tracking-wider c-animate rounded-full mr-1 ${color} transition-colors duration-300 namaLengkap 
        ${isScrolled ? "text-sky-950" : "text-sky-800"}`}>
        {biodata.namaPertama}
      </p>

      <p className="font-bold text-sky-400 tracking-wider c-animate rounded-full namaLengkap">
        {biodata.namaLengkap}
      </p>

    </div>
  );
};

export default Logo;
