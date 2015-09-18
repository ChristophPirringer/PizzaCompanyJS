// ###############################################
// ###############__ Pizzas-Class__###############
// ###############################################
function Pizzas(quantity, size) {
  this.quantity = quantity;
  this.size = size;
}

Pizzas.prototype.calculatePrice = function(pizza_size, pizza_quantity, ingredient_cheese, ingredient_bacon, ingredient_veggies) {
  var price = pizza_size * 5 * pizza_quantity + ingredient_cheese  + ingredient_bacon * 2 + ingredient_veggies;
  return price;

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
