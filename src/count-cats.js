module.exports = function countCats(backyard) {
  let ears = 0;
  for (let i = 0; i < backyard.length; i++) {
    for (let j = 0; j < row.length; j++) {
      if (backyard[i][j] === '^^') ears++;
    }
  }
  return ears;
};
