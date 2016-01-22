describe('pingPong', function() {
  it("is true if countToNumber is a number", function(){
    expect(numberCheck(50)).to.equal(true);
  });
  it("is false if countToNumber is not a number", function(){
    expect(numberCheck("not")).to.equal(false);
  });
});
