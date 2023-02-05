export const formatDate = (date) => {
  const day = dayName(date.getDay());
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  return `${day} ${d} / ${m} / ${y}`;
};

const dayName = (dayNumber) => {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 0:
      return "Sunday";
  }
};
