export const getMonthDays = (currentMonth) => {
    const startOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );
    const endOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );
  
    const days = [];
    for (let i = startOfMonth.getDate(); i <= endOfMonth.getDate(); i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      days.push({ date, number: i });
    }
    return days;
  };
  
  export const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };
  
  export const isSameDay = (date1, date2) => {
    return (
      date1?.getDate() === date2?.getDate() &&
      date1?.getMonth() === date2?.getMonth() &&
      date1?.getFullYear() === date2?.getFullYear()
    );
  };
  