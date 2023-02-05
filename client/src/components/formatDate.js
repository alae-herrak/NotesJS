export const formatDate = (date) => {
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
  const day = dayName(date.getDay());
  return `${day} ${date.getDay()} / ${
    date.getMonth() + 1
  } / ${date.getFullYear()}`;
};
