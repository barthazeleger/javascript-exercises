const sumAll = function (minNum, maxNum) {
  let sum = 1;
  let i = minNum;
  while (i < maxNum) {
    i++;
    if (i === maxNum) {
      sum += i;
    } else {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
