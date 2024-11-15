import React, { useState } from "react";
import PropTypes from "prop-types";

// Reusable Button Component
const Button = ({ type, onClick, isLoggedIn }) => {
  const buttonStyles = {
    search: "bg-blue-600 text-white hover:bg-blue-700",
    booking: "bg-green-600 text-white hover:bg-green-700",
    login: "bg-yellow-600 text-white hover:bg-yellow-700",
    signup: "bg-purple-600 text-white hover:bg-purple-700",
  };

  const renderButtonText = () => {
    if (type === "login") {
      return isLoggedIn ? "Logout" : "Login";
    } else if (type === "signup") {
      return isLoggedIn ? null : "Sign Up";
    } else if (type === "search") {
      return "Search";
    } else if (type === "booking") {
      return "Book Now";
    }
  };

  return (
    <button
      className={`px-6 py-3 rounded-md text-lg font-semibold transition-all duration-200 ${buttonStyles[type]}`}
      onClick={onClick}
      hidden={type === "signup" && isLoggedIn}>
      {renderButtonText()}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["search", "booking", "login", "signup"]).isRequired,
  onClick: PropTypes.func,
  isLoggedIn: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  isLoggedIn: false,
};

export default Button;
