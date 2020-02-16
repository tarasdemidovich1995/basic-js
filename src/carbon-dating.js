const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let lifePeriod = 0;
  while (sampleActivity > MODERN_ACTIVITY) {
    lifePeriod += HALF_LIFE_PERIOD;
    sampleActivity /= 2;
  }
  return lifePeriod == 0 ? false : lifePeriod;
};
