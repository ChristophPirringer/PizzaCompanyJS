// ###############################################
// ###############__ Pizza-Class__###############
// ###############################################
function Pizza(quantity) {
  this.quantity = quantity;
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
