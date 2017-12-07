function Vector(x,y) {
  this.x = x;
  this.y = y;
}
Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    var ret = Math.sqrt(Math.pow((0-this.x),2) +Math.pow((0-this.y),2))
    return ret }
});
Vector.prototype.plus = function(newVect) {
  var retVect = new Vector(); 
  retVect.x = this.x + newVect.x;
  retVect.y = this.y + newVect.y; 
  return retVect; 
}; 

Vector.prototype.minus = function(newVect) {
  var retVect = new Vector(); 
  retVect.x = this.x - newVect.x;
  retVect.y = this.y - newVect.y; 
  return retVect; 
}; 



console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5