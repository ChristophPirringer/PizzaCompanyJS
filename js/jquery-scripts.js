$(document).ready(function(){

  var pizzas = new Pizzas();




    $("#place_order").click(function(event){

      var pizza_size = parseInt($('input[name="size"]:checked').val());
      var pizza_quantity = parseInt($('input[name="quantity"]:checked').val());
      var ingredient_cheese = parseInt($('input[name="ingredient_cheese"]:checked').val());
      var ingredient_bacon = parseInt($('input[name="ingredient_bacon"]:checked').val());
      var ingredient_veggies = parseInt($('input[name="ingredient_veggies"]:checked').val());
      // debugger;



      $("#info_bar").append("Player:" + game.turnCounter + ", Move: " + game.gameBoard.spaces[space_id].occupiedBy + game.winCheck())


      $("#show_order").text("");




    });

});
