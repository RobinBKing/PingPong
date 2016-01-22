//business logic
var numberCheck = function(countTo) {
  return !isNaN(countTo);
};
var numberArray = function(countTo) {
  var countArray = [];
  if(numberCheck(countTo)){
    for (var i = 1; i < (countTo + 1); i++){
      countArray.push(i);
    };
  }
  return countArray;
};
var remainderCheck = function(divTo, divBy) {
  return (divTo % divBy === 0);
};
var numberReplace = function(countArray, replaceNbr, replaceString) {
  for (var i = 0; i < (countArray.length); i++){
    if(remainderCheck(countArray[i], replaceNbr)){
      countArray[i] = replaceString;
    }
  };
  return countArray;
};
var pingPongReplace = function(countArray) {
  if(countArray.length > 0){
    countArray = numberReplace(countArray, 15, "Ping Pong");
    countArray = numberReplace(countArray, 5, "Pong");
    countArray = numberReplace(countArray, 3, "Ping");
  }
  return countArray;
};
var makePingPong = function(countTo) {
  var countArray = numberArray(countTo);
  var pingPongArray = pingPongReplace(countArray);
  return pingPongArray;
};
//interface
$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
  $("ul").empty();
  var countTo = parseInt($("input#countTo").val());
  var listArray = makePingPong(countTo);
  if(listArray.length > 0){
    for (var i = 0; i < listArray.length; i++){
      $("ul.pingPongList").append("<li>"+listArray[i]+"</li>");
    }
    $("#result").show();
  }
  else {
    alert("You have to enter a number to play!");
  }
  event.preventDefault();
  });
});
