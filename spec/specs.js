describe('pingPong', function() {
  it("is true if countTo is a number", function(){
    expect(numberCheck(50)).to.equal(true);
  });
  it("is false if countTo is not a number", function(){
    expect(numberCheck("not")).to.equal(false);
  });
  it("is true if countTo is > 0", function(){
    expect(numberCheck(1)).to.equal(true);
  });
  it("is true if remaindir array number divided by dcountTo = 0", function(){
    expect(numberCheck(1)).to.equal(true);
  });
  it("is true if 1st number divided by 2nd number's remaindier = 0", function(){
    expect(remainderCheck(30, 15)).to.equal(true);
  });
  it("should replace array number divisible by given number with given text", function() {
    var countArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    expect(numberReplace(countArray, 15, "PingPong")).to.eql([1,2,3,4,5,6,7,8,9,10,11,12,13,14,"PingPong",16,17,18,19,20,21,22,23,24,25,26,27,28,29,"PingPong"]);
  });
});
