import React from "react";

const Navigation = ({ currentMonth, setCurrentMonth }) => {
  const handlePrevious = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
  };

  const handleNext = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  };

  return (
    <div className="navigation">
      <button onClick={handlePrevious}>Previous</button>
      <h2>{currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Navigation;
