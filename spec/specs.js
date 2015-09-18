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

  it("will create add a toppping with the attributes of topping and amounnt to the toppings-array", function() {
    var testToppings = new Toppings();
    testToppings.addTopping("cheese", "10lb")
    debugger;
    expect(testToppings.toppings[0].topping + ", " + testToppings.toppings[0].amount ).to.eql("cheese, 10lb");
  });
});
