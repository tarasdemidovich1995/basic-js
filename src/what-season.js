module.exports = function getSeason(date) {
  let month = date.getMonth();
  let timeOfYear;
  switch (true) {
    case month == 10 || month <= 1:
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
