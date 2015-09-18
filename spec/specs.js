// ###############################################
// ###############__ Pizza-Class__################
// ###############################################
describe("#pizza", function() {
  it("will create pizza object and return amount", function() {
    var testPizza = new Pizza(5);
    expect(testPizza.quantity).to.equal(5);
  });
});


// ###############################################
// ###############__ Topping-Class__##############
// ###############################################
describe("#topping", function() {
  it("will create toppings object and return empty array of toppings", function() {
    var testToppings = new Toppings();
    expect(testToppings.toppings).to.eql([]);
  });
});
