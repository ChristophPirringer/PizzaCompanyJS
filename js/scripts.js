// ###############################################
// ###############__ Pizzas-Class__###############
// ###############################################
function Pizzas(pizza_size, pizza_quantity, ingredient_cheese, ingredient_bacon, ingredient_veggies) {
  this.pizza_size = pizza_size;
  this.pizza_quantity = pizza_quantity;
  this.ingredient_cheese = ingredient_cheese;
  this.ingredient_bacon = ingredient_bacon;
  this.ingredient_veggies = ingredient_veggies;

  this.orderPrice = [];
}

Pizzas.prototype.calculatePrice = function(pizza_size, pizza_quantity, ingredient_cheese, ingredient_bacon, ingredient_veggies) {
  this.price = pizza_size * 5 * pizza_quantity + ingredient_cheese  + ingredient_bacon * 2 + ingredient_veggies;
  this.orderPrice.push(this.price);
  return this.price;

}


// ###############################################
// ##############__ Toppings-Class__##############
// ###############################################
function Toppings(toppings) {
  this.toppings = [];
}

Toppings.prototype.addTopping = function(topping, amount) {
  var ingredient = new Ingredient(topping, amount);
  this.toppings.push(ingredient);
}

// ###############################################
// #############__ Ingredient-Class__#############
// ###############################################
function Ingredient(topping, amount) {
  this.topping = topping;
  this.amount = amount;
}
