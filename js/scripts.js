// ###############################################
// ###############__ Player-Class__###############
// ###############################################
function Player(name, player_type) {
  this.name = name;
  this.player_type = player_type;
}


// ###############################################
// ###############__ Space-Class__################
// ###############################################
function Space(coordinates) {
  this.occupiedBy = null;
  this.coordinates = coordinates;
  // coordinates is non-functional except for specs at the moment
}

Space.prototype.occupy = function(markedType) {
  if (this.occupiedBy === null){
    this.occupiedBy = markedType;
  }
}
