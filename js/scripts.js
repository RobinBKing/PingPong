//business logic
var numberCheck = function(numberTo) {
  return !isNaN(numberTo);
};
var numberArray = function(numberTo) {
  var countArray = [];
  for (var i =1; i < (numberTo + 1); i++){
    countArray.push(i);
  };
  return countArray;
};
var remainderCheck = function(divTo, divBy) {
  return (divTo % divBy === 0);
};
var numberReplace = function(countArray, replaceNbr, replaceString) {
  for (var i = 0; i < (countArray.length); i++){
    if(countArray[i] % replaceNbr ===0){
      countArray[i] = replaceString;
    }
  };
  return countArray;
};

//interface
// $(document).ready(function() {
// });
