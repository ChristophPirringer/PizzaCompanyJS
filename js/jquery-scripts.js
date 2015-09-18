$(document).ready(function(){
  var total_price = 0;
  var order_price = 0;
  var custom_ingredient_price = 0;


  $("#place_order").click(function(event){

// ###############################################
// #########__ Fetching Values From Form__########
// ###############################################
    var pizza_size = parseInt($('input[name="size"]:checked').val());
    var pizza_quantity = parseInt($('input[name="quantity"]:checked').val());
    var ingredient_cheese = parseInt($('input[name="ingredient_cheese"]:checked').val());
    var ingredient_bacon = parseInt($('input[name="ingredient_bacon"]:checked').val());
    var ingredient_veggies = parseInt($('input[name="ingredient_veggies"]:checked').val());


// ###############################################
// #__ Creating Pizzas Object and Calculating Pice__#
// ###############################################
    var newOrder = new Pizzas(pizza_size, pizza_quantity, ingredient_cheese, ingredient_bacon, ingredient_veggies);
    orderPrice = newOrder.calculatePrice(pizza_size, pizza_quantity, ingredient_cheese, ingredient_bacon, ingredient_veggies);

// ###############################################
// ###############__ Funny Insert__###############
// ###############################################
    var sizeInsert = "";
    if (pizza_size === 1){
      sizeInsert = " Are you on a diet?"
    } else {
      sizeInsert = " That can't be good for your heart."
    }

    var ingredientInsert = "";
    if (ingredient_cheese === 2 && ingredient_bacon === 4){
      ingredientInsert = " Now THAT is a PIZZA!"
    }


// ###############################################
// ###############__ Display Order__##############
// ###############################################
    $("#show_order").text("You ordered " + newOrder.pizza_quantity + " pizzas of ." +
     newOrder.pizza_quantity + " ft, diameter." + sizeInsert + " As toppings you chose: "
     + newOrder.ingredient_cheese + " lb of cheese and " + newOrder.ingredient_bacon +
      " servings of bacon." + ingredientInsert + " Luckily, there are only " + newOrder.ingredient_veggies + " servings of yucky green stuff on your pizzas." + "This comes to a base-price of: " + orderPrice + " Dollars.")

    total_price = orderPrice +  custom_ingredient_price;

    $("#show_price").text("This comes to a total price of: " + total_price);
  });


// ###############################################
// ##########__ Dynamic Ingredient Form__#########
// ###############################################
  $("#add_custom_ingredient").click(function(event) {
          $( '<br' +'<div class="custom_ingredient">' +
          '<div class="form-group">' +
          '<label for="ingredient_name">Name of Ingredient</label>' +
          '<input type="text" class="form-control ingredient_name">' +
          '</div>' +
          '<div class="form-group">' +
          '<label for="ingredient_amount">Amount of Ingreteint</label>' +
          '<input type="number" class="form-control ingredient_amount">' +
          '</div>' +
          '</div>').appendTo("#ingredient_veggies");
  })

// ###############################################
// ##########__ Submit Custom Ingredients__#######
// ###############################################
  $("#submit_custom_ingredient").click(function(event) {

    var custom_ingredient_items = "";

    $(".custom_ingredient").each(function() {
      var custom_name = $(this).find("input.ingredient_name").val();
      var custom_amount = parseInt($(this).find("input.ingredient_amount").val());
      var custom_ingredient = new Ingredient( custom_name, custom_amount);
      custom_ingredient_price = custom_amount * 5;
      custom_ingredient_items = custom_amount + " of " + custom_name;

      $("#show_customs").append("<br>" + "As custom-ingredients, you added " + custom_ingredient_items + " costing " + custom_ingredient_price);

      total_price = orderPrice +  custom_ingredient_price;

      $("#show_price").text("This comes to a total price of: " + total_price);
    });
  })


});
