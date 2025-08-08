import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVuejs, faReact, faAngular, faJsSquare } from "@fortawesome/free-brands-svg-icons";

const LogoSection = () => {
  return (
    <div className="flex space-x-6 text-gray-400 mt-3">

      <FontAwesomeIcon
        icon={faJsSquare}
        className="text-gray-300 text-3xl transition-transform transform hover:scale-125 hover:text-yellow-400"
      />

      <FontAwesomeIcon
        icon={faVuejs}
        className="text-gray-300 text-3xl transition-transform transform hover:scale-125 hover:text-green-500"
      />

      <FontAwesomeIcon
        icon={faReact}
        className="text-gray-300 text-3xl transition-transform transform hover:scale-125 hover:text-sky-400"
      />

      <FontAwesomeIcon
        icon={faAngular}
        className="text-gray-300 text-3xl transition-transform transform hover:scale-125 hover:text-red-500"
      />
    </div>
  );
};

export default LogoSection;
