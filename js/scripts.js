// ###############################################
// ###############__ Pizza-Class__###############
// ###############################################
function Pizza(quantity) {
  this.quantity = quantity;
}


// ###############################################
// ##############__ Toppings-Class__##############
// ###############################################
function Toppings() {
  this.toppings = [];
}

Toppings.prototype.addTopping = function(topping, amount) {
  var topping = new Topping([topping, amount]);
  this.toppings.push(topping);
}
