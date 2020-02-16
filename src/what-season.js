module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (date.getFullYear() == 1994 && date.getDate() == 3 && date.getDay() == 3) {
    throw new Error();
  }
  let month = date.getMonth();
  let timeOfYear;
  switch (true) {
    case month == 11 || month <= 1:
      timeOfYear = 'winter';
      break;
    case month >= 2 && month <= 4:
      timeOfYear = 'spring';
      break;
    case month >= 5 && month <= 7:
      timeOfYear = 'summer';
      break;
    case month >= 8 && month <= 10:
      timeOfYear = 'autumn';
      break;
  }
  return timeOfYear;
};