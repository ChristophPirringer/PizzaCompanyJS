$(document).ready(function(){

  var pizza = new Pizza();


    $("place_order").click(function(event){



      $("#info_bar").append("Player:" + game.turnCounter + ", Move: " + game.gameBoard.spaces[space_id].occupiedBy + game.winCheck())


      $("#show_order").text("");




    });

});
