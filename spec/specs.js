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
  it("should replace array number divisible by 3 with 'Ping'", function() {
    var countArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    expect(numberReplace(countArray, 3, "Ping")).to.eql([1,2,"Ping",4,5,"Ping",7,8,"Ping",10,11,"Ping",13,14,"Ping",16,17,"Ping",19,20,"Ping",22,23,"Ping",25,26,"Ping",28,29,"Ping"]);
  });
  it("should replace array number divisible by 5 with 'Pong'", function() {
    var countArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    expect(numberReplace(countArray, 5, "Pong")).to.eql([1,2,3,4,"Pong",6,7,8,9,"Pong",11,12,13,14,"Pong",16,17,18,19,"Pong",21,22,23,24,"Pong",26,27,28,29,"Pong"]);
  });
  it("should replace array number divisible by 15 with 'PingPong'", function() {
      var countArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
      expect(numberReplace(countArray, 15, "PingPong")).to.eql([1,2,3,4,5,6,7,8,9,10,11,12,13,14,"PingPong",16,17,18,19,20,21,22,23,24,25,26,27,28,29,"PingPong"]);
  });
  it("should replace array number divisible by any given with given text", function() {
      var countArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
      expect(numberReplace(countArray, 7, "Lucky")).to.eql([1,2,3,4,5,6,"Lucky",8,9,10,11,12,13,"Lucky",15,16,17,18,19,20,"Lucky",22,23,24,25,26,27,"Lucky",29,30]);
  });
  it("should replace array numbers divisible by given numbers with given text", function() {
      var countArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
      expect(pingPongReplace(countArray)).to.eql([1, 2, "Ping", 4, "Pong", "Ping", 7, 8, "Ping", "Pong", 11, "Ping", 13, 14, "PingPong", 16, 17, "Ping", 19, "Pong", "Ping", 22, 23, "Ping", "Pong", 26, "Ping", 28, 29, "PingPong"]);
  });
});
