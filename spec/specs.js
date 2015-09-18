// ###############################################
// ###############__ Player-Class__###############
// ###############################################
describe("#player", function() {
  it("will create player object and return name", function() {
    var testPlayer = new Player("Ronaldo");
    expect(testPlayer.name).to.equal("Ronaldo");
  });


});
