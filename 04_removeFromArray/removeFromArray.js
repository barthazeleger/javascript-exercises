const removeFromArray = function (createArray, pushFromArray) {
  const myArray = createArray;
  myArray.splice(pushFromArray - 1, 1);
  return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
