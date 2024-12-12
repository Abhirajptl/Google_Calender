import React from "react";

const Header = () => {
  const today = new Date();

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>Dynamic Event Calendar</h1>
        <p>{formatDate(today)}</p>
      </div>
    </header>
  );
};

export default Header;
