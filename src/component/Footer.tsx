import React from "react";

import { FaRegKeyboard } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-secondary mt-5 py-4">
      <div className="container">
        <div className="text-center">
          <h4>
            Made By <FaRegKeyboard></FaRegKeyboard>&nbsp;<a href="http://webking.info">Kim.Y.H</a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
