// ###############################################
// ###############__ Pizza-Class__###############
// ###############################################
describe("#pizza", function() {
  it("will create pizza object and return amount", function() {
    var testPizza = new Pizza(5);
    expect(testPizza.quantity).to.equal(5);
  });


});
