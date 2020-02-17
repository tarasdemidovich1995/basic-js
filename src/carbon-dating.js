const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const REACTION_SPEED_CONSTANT = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || isNaN(sampleActivity) || sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0) {
    return false;
  }
  let time = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / REACTION_SPEED_CONSTANT);
  return time;
};
