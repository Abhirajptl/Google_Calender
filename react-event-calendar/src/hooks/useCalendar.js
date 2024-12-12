import { useState } from "react";
import { getMonthDays } from "../utils/dateUtils";

const useCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  return {
    currentMonth,
    setCurrentMonth,
    getMonthDays: () => getMonthDays(currentMonth),
  };
};

export default useCalendar;
