// ###############################################
// ###############__ Pizzas-Class__################
// ###############################################
describe("#pizzas", function() {
  it("will create pizza object and return quantity", function() {
    var testPizza = new Pizzas(5);
    expect(testPizza.quantity).to.equal(5);
  });

  it("will create pizza object and return size", function() {
    var testPizza = new Pizzas(1, "small");
    expect(testPizza.size).to.equal("small");
  });

  it("will calculate the price of an order", function() {
    var testPizza = new Pizzas(1, "small");
    expect(testPizza.calculatePrice(1, 1, 1, 2, -1)).to.equal(9);
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

  it("will add a toppping with the attributes of topping and amount to the toppings-array", function() {
    var testToppings = new Toppings();
    testToppings.addTopping("cheese", "10lb")
    expect(testToppings.toppings[0].topping + ", " + testToppings.toppings[0].amount ).to.eql("cheese, 10lb");
  });
});


// ###############################################
// ############__ Ingredient-Class__##############
// ###############################################
describe("#ingredient", function() {
  it("will create ingredient object and return the topping-kind", function() {
    var testIngredient = new Ingredient("cheese", "10lb");
    expect(testIngredient.topping).to.equal("cheese");
    expect(testIngredient.amount).to.equal("10lb");
  });

  it("will create ingredient object and return the topping-amount", function() {
    var testIngredient = new Ingredient("cheese", "10lb");
    expect(testIngredient.amount).to.equal("10lb");
  });

});
