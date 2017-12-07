// Your code here
function SmartPlantEater() {
  this.energy = 20;
  this.eatCount = 0; 
}
SmartPlantEater.prototype.act = function(context) {
  var space = context.find(" ");
  if (this.energy > 80 && space)
    return {type: "reproduce", direction: space};
  if (this.eatCount < 2 && space){
    this.eatCount++; 
    this.energy += 20; 
    return {type: "eat", direction: Plant};
  }
  if (space)
    return {type: "move", direction: space};
};
animateWorld(new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant}
));