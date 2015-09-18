$(document).ready(function(){


    $("#place_order").click(function(event){

      var pizza_size = parseInt($('input[name="size"]:checked').val());
      var pizza_quantity = parseInt($('input[name="quantity"]:checked').val());
      var ingredient_cheese = parseInt($('input[name="ingredient_cheese"]:checked').val());
      var ingredient_bacon = parseInt($('input[name="ingredient_bacon"]:checked').val());
      var ingredient_veggies = parseInt($('input[name="ingredient_veggies"]:checked').val());

      var newOrder = new Pizzas(pizza_size, pizza_quantity, ingredient_cheese, ingredient_bacon, ingredient_veggies);
      newOrder.calculatePrice(pizza_size, pizza_quantity, ingredient_cheese, ingredient_bacon, ingredient_veggies);

      var sizeInsert = "";
      if (pizza_size === 1){
        sizeInsert = " Are you on a diet?"
      } else {
        sizeInsert = " That can't be good for your heart."
      }


      debugger;
      $("#show_order").text("You ordered " + newOrder.pizza_quantity + " pizzas of ." +
       newOrder.pizza_quantity + " ft, diameter." + sizeInsert + " As toppings you chose: "
       + newOrder.ingredient_cheese + " lb of cheese, " + newOrder.ingredient_bacon +
        " servings of bacon and " + newOrder.ingredient_veggies + " servings of yucky green stuff.")





    });

});
